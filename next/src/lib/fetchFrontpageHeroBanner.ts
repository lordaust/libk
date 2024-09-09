// lib/fetchFrontpageHeroBanner.ts
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'

const frontpageHeroBannerQuery = groq`
  *[_type == "frontpageHeroBanner"][0]{
    title,
    subtitle,
    ctaButtonLabel,
    images[]{
      asset->{
        _id,
        url
      },
      altText
    }
  }
`

export const fetchFrontpageHeroBanner = async () => {
	const result = await sanityClient.fetch(frontpageHeroBannerQuery)
	return result
}
