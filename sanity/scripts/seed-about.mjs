// One-time seed for the "Om oss" (Klubbinfo) content.
// Idempotent: uses fixed document IDs with createOrReplace.
// Requires SANITY_WRITE_TOKEN (Editor). Run:
//   node --env-file-if-exists=/vercel/share/.env.project sanity/scripts/seed-about.mjs

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const TOKEN = process.env.SANITY_WRITE_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const API = `https://${PROJECT_ID}.api.sanity.io/v2023-09-04/data`

if (!PROJECT_ID || !TOKEN) {
	console.error('Missing project id or token')
	process.exit(1)
}
if (!process.env.SANITY_WRITE_TOKEN) {
	console.warn('Warning: SANITY_WRITE_TOKEN not set — mutations will likely fail (read-only token).')
}

// Build a simple Portable Text body from an array of paragraph strings.
let keySeq = 0
const key = () => `k${(keySeq++).toString(36)}`
const body = (paragraphs) =>
	paragraphs.map((text) => ({
		_type: 'block',
		_key: key(),
		style: 'normal',
		markDefs: [],
		children: [{ _type: 'span', _key: key(), text, marks: [] }],
	}))

async function query(groq) {
	const res = await fetch(`${API}/query/${DATASET}?query=${encodeURIComponent(groq)}`, {
		headers: { Authorization: `Bearer ${TOKEN}` },
	})
	const json = await res.json()
	return json.result
}

async function main() {
	// Attach a board member as contact person on the membership block, if one exists.
	const boardId = await query('*[_type=="person" && boardMember==true][0]._id')
	console.log('Board contact person:', boardId || '(none found)')

	const contactRef = boardId
		? { _type: 'reference', _ref: boardId, _weak: true }
		: undefined

	const sections = [
		{
			_id: 'aboutSection-medlem',
			_type: 'aboutSection',
			header: 'Hvordan bli medlem',
			subtitle: 'Bli en del av innebandyfamilien vår',
			order: 1,
			...(contactRef ? { contactPerson: contactRef } : {}),
			content: body([
				'Det er enkelt å bli medlem i Lørenskog Innebandyklubb. Vi tar imot spillere i alle aldre og på alle nivåer, fra nybegynnere til erfarne spillere.',
				'Ta kontakt med laget som passer for din aldersgruppe, eller send oss en henvendelse, så hjelper vi deg videre med påmelding og betaling via Spond.',
			]),
		},
		{
			_id: 'aboutSection-info',
			_type: 'aboutSection',
			header: 'Annen informasjon',
			order: 2,
			content: body([
				'Klubben ble stiftet i 1983 og har siden vært en viktig del av idrettstilbudet i Lørenskog. Vi er opptatt av å skape et trygt og inkluderende miljø for barn, unge og voksne.',
				'Du finner treningstider, lagoversikt og nyheter andre steder på nettsiden. Har du spørsmål som ikke besvares her, er du alltid velkommen til å kontakte oss.',
			]),
		},
		{
			_id: 'aboutSection-partner',
			_type: 'aboutSection',
			header: 'Hvordan bli partner/leverandør',
			subtitle: 'Støtt lokal idrett og bli synlig i nærmiljøet',
			order: 3,
			content: body([
				'Vi samarbeider med en rekke solide aktører som bidrar til klubbens drift og til idrettsglede for barn og unge i kommunen.',
				'Ønsker din bedrift å bli partner eller leverandør? Ta kontakt med styret, så finner vi en samarbeidsform som passer for dere.',
			]),
		},
	]

	const singleton = {
		_id: 'klubbinfoPage',
		_type: 'klubbinfoPage',
		contactLinkText: 'Kontakt oss i styret',
		contactLinkTarget: '/klubbinfo/styret',
	}

	const mutations = [...sections, singleton].map((doc) => ({
		createOrReplace: doc,
	}))

	const res = await fetch(`${API}/mutate/${DATASET}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify({ mutations }),
	})
	const json = await res.json()
	if (!res.ok) {
		console.error('Mutation failed:', JSON.stringify(json, null, 2))
		process.exit(1)
	}
	console.log(`Seeded ${mutations.length} documents (3 sections + singleton).`)
}

main().catch((e) => {
	console.error('ERR', e.message)
	process.exit(1)
})
