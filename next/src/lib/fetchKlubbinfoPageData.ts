import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { KlubbinfoPageType } from '@/types/types'

// Sensible fallbacks so the CTA always renders even before the singleton is filled in.
const FALLBACK: KlubbinfoPageType = {
	contactLinkText: 'Kontakt oss i styret',
	contactLinkTarget: '/klubbinfo/styret',
}

const fetchKlubbinfoPageData = async (): Promise<KlubbinfoPageType> => {
	const query = groq`*[_type == "klubbinfoPage"][0]{
    contactLinkText,
    contactLinkTarget
  }`
	const data = await sanityClient.fetch<KlubbinfoPageType | null>(
		query,
		{},
		{ cache: 'no-store' },
	)
	return {
		contactLinkText: data?.contactLinkText || FALLBACK.contactLinkText,
		contactLinkTarget: data?.contactLinkTarget || FALLBACK.contactLinkTarget,
	}
}

export default fetchKlubbinfoPageData
