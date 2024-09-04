import {
	createClient,
	type QueryParams,
	type ResponseQueryOptions,
} from 'next-sanity'
import dev from '@/lib/env'
export { groq } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: process.env.SANITY_API_VERSION || '2023-09-04',
	useCdn: !dev,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
	//TODO: return builder.image(source).auto('format').url() <- Støtte for autoformat i fremtiden?
	return builder.image(source).url()
}
export function fetchSanity<T = any>(
	query: string,
	{
		params = {},
		...next
	}: { params?: QueryParams } & ResponseQueryOptions['next'] = {},
) {
	return sanityClient.fetch<T>(query, params, {
		...(dev && {
			token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
			perspective: 'previewDrafts',
		}),
		next: {
			revalidate: dev ? 0 : false,
			...next,
		},
	})
}

export { sanityClient }
