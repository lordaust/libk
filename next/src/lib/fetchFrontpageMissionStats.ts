// lib/fetchFrontpageMissionStats.ts
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'

// GROQ query to fetch frontpageMissionStats
const frontpageMissionStatsQuery = groq`
  *[_type == "frontpageMissionStats"][0]{
    title,
    subtitle,
    focus,
    history,
    statistics[]{
      label,
      value
    }
  }
`

// Fetch function for mission stats
export const fetchFrontpageMissionStats = async () => {
	const result = await sanityClient.fetch(
		frontpageMissionStatsQuery,
		{},
		{ cache: 'no-store' },
	)
	return result
}
