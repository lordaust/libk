import {
	createClient,
	type QueryParams,
	type ResponseQueryOptions,
} from 'next-sanity'
import dev from '@/lib/env'
export { groq } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: process.env.SANITY_API_VERSION || '2023-09-04',
	useCdn: !dev,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: SanityImageSource) =>
	createImageUrlBuilder({
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	}).image(source)

export const urlFor2 = (source: SanityImageSource) =>
	createImageUrlBuilder({
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	})
		.image(source)
		.auto('format') // Optional: for automatic format optimization
		.url()

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
