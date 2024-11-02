import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { TeamType } from '@/types/types'

const fetchTeamData = async (slug: string): Promise<TeamType> => {
	const query = groq`*[_type == "team" && teamName.current == $slug && activeState == true][0]{
		teamTitle,
		teamDescriptionRichText,
		teamName,
		teamCategory,
		contactPerson->{
			name,
			email,
			phone,
			role,
			photo,
			"photoUrl": photo.asset->url,
			boardMember,
			linkedIn,
			description,
			activeState
		},
		contactPersonType,
		participationDescription,
		trainingTimes[],
		membershipCost,
		licenseCost,
		spondCode,
		teamLink,
		teamLongDescription,
		teamDescRichText,
		sortorderValue,
		activeState,
    teamImage { asset, crop, hotspot } 
	}`
	return await sanityClient.fetch(query, { slug }, { cache: 'no-store' })
}

export default fetchTeamData
