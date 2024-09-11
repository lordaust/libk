import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { TeamType } from '@/types/types'

const fetchTeamsData = async (): Promise<TeamType[]> => {
	const query = groq`*[_type == "team" && activeState == true]| order(sortorderValue asc) {
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
  activeState
}`
	return await sanityClient.fetch(query, {}, { cache: 'no-store' })
}

export default fetchTeamsData
