// lib/fetchFrontpageValues.ts
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'

const frontpageValuesQuery = groq`
  *[_type == "frontpageValues"][0]{
    title,
    subtitle,
    values[] {
      name,
      description
    }
  }
`

export const fetchFrontpageValues = async () => {
	const result = await sanityClient.fetch(frontpageValuesQuery)
	return result
}
