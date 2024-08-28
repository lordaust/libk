import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { PersonType } from '@/types/types'

const fetchBoardMembersData = async (): Promise<PersonType[]> => {
	const query = groq`*[_type == "person" && activeState == true && boardMember == true] 
| order(sortorderValue asc) {
  name,
  email,
  phone,
  role,
  linkedIn,
  description,
  activeState,
  sortorderValue,
  boardMember,
   "photoUrl": photo.asset->url,  // Fetches the image URL
  photo {
    caption
      },
  // Add any other fields you want to include
}`
	return await sanityClient.fetch(query)
}

export default fetchBoardMembersData