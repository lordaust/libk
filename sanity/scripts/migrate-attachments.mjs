// One-off migration: attachment -> internalDocument (category "annet").
// Idempotent: uses deterministic ids and createOrReplace, then repoints
// every blogpost reference and deletes the old attachment documents.
//
// Run: node --env-file-if-exists=/vercel/share/.env.project sanity/scripts/migrate-attachments.mjs

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const TOKEN = process.env.NEXT_PUBLIC_SANITY_TOKEN
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const API = `https://${PROJECT_ID}.api.sanity.io/v2023-09-04/data`

if (!PROJECT_ID || !TOKEN) {
	console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_TOKEN')
	process.exit(1)
}

const newIdFor = (oldId) => `internalDocument-${oldId.replace(/^drafts\./, '')}`

async function query(groq) {
	const res = await fetch(`${API}/query/${DATASET}?query=${encodeURIComponent(groq)}`, {
		headers: { Authorization: `Bearer ${TOKEN}` },
	})
	const json = await res.json()
	if (json.error) throw new Error(JSON.stringify(json.error))
	return json.result
}

async function mutate(mutations) {
	const res = await fetch(`${API}/mutate/${DATASET}?returnIds=true`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify({ mutations }),
	})
	const json = await res.json()
	if (json.error) throw new Error(JSON.stringify(json.error))
	return json
}

async function run() {
	const data = await query(`{
		"attachments": *[_type=="attachment"]{_id, _createdAt, title, description, "assetRef": file.asset._ref},
		"posts": *[_type=="blogpost" && count(attachments) > 0]{_id, "refs": attachments[]{_key, _ref, _weak}}
	}`)

	const attachments = data.attachments || []
	const posts = data.posts || []

	if (attachments.length === 0) {
		console.log('No attachment documents found. Nothing to migrate.')
		return
	}

	const mutations = []

	// 1. Create the replacement internalDocument for each attachment.
	for (const a of attachments) {
		if (!a.assetRef) {
			console.warn(`Skipping ${a._id} — no file asset attached.`)
			continue
		}
		mutations.push({
			createOrReplace: {
				_id: newIdFor(a._id),
				_type: 'internalDocument',
				title: a.title,
				description: a.description,
				category: 'annet',
				sourceType: 'file',
				publishedAt: a._createdAt,
				file: { _type: 'file', asset: { _type: 'reference', _ref: a.assetRef } },
			},
		})
	}

	// 2. Repoint every blogpost reference from the old id to the new id.
	for (const post of posts) {
		const newRefs = (post.refs || []).map((r) => ({
			_key: r._key,
			_type: 'reference',
			_ref: newIdFor(r._ref),
			...(r._weak ? { _weak: true } : {}),
		}))
		mutations.push({ patch: { id: post._id, set: { attachments: newRefs } } })
	}

	// 3. Delete the old attachment documents (published + any drafts).
	for (const a of attachments) {
		mutations.push({ delete: { id: a._id } })
		mutations.push({ delete: { id: `drafts.${a._id}` } })
	}

	console.log(`Applying ${mutations.length} mutations...`)
	const result = await mutate(mutations)
	console.log('Done. Transaction:', result.transactionId)
	console.log(
		'Migrated attachments:',
		attachments.map((a) => `${a._id} -> ${newIdFor(a._id)}`).join('\n  '),
	)
}

run().catch((e) => {
	console.error('Migration failed:', e.message)
	process.exit(1)
})
