import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { TeamType } from '@/types/types'

const fetchTeamData = async (slug: string): Promise<TeamType> => {
	const query = groq`*[_type == "team" && teamName.current == $slug][0]{
  teamTitle,
  teamDescriptionRichText,
  teamName,
  contactPerson->{
    name,
    email,
    phone,
    role,
		photo,
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
	return await sanityClient.fetch(query, { slug })
}

export default fetchTeamData
