import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { InternalDocument, InternalDocumentCategory } from '@/types/types'

const fetchInternalDocuments = async (
	category: InternalDocumentCategory,
): Promise<InternalDocument[]> => {
	const query = groq`*[_type == "internalDocument" && category == $category] | order(publishedAt desc) {
		_id,
		title,
		description,
		category,
		"isExternal": sourceType == "external",
		"fileUrl": select(
			sourceType == "external" => externalUrl,
			file.asset->url
		),
		"fileType": select(
			sourceType == "external" => "link",
			file.asset->extension
		),
		publishedAt,
	}`

	const documents = await sanityClient.fetch<InternalDocument[]>(
		query,
		{ category },
		{ cache: 'no-store' },
	)

	// Guard against documents that are missing a resolvable URL (e.g. a draft
	// with no file uploaded yet) so the frontend never renders a broken link.
	return documents.filter((doc) => Boolean(doc.fileUrl))
}

// Returns the number of published resources per category, used for the
// summary counts on the /intern landing page.
export const fetchInternalDocumentCount = async (
	category: InternalDocumentCategory,
): Promise<number> => {
	const query = groq`count(*[_type == "internalDocument" && category == $category])`
	const count = await sanityClient.fetch<number>(
		query,
		{ category },
		{ cache: 'no-store' },
	)
	return count ?? 0
}

export default fetchInternalDocuments
