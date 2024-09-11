import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { PersonType } from '@/types/types'

const fetchFrontpagePeopleData = async (): Promise<PersonType[]> => {
	const query = groq`
    *[_type == "person" && activeState == true] | order(boardMember asc, sortorderValue asc, name asc) {
      name,
      email,
      phone,
      role,
      linkedIn,
      description,
      activeState,
      sortorderValue,
      boardMember,
      "photoUrl": photo.asset->url,
      photo {
        caption
      }
    }
  `

	return await sanityClient.fetch(query, {}, { cache: 'no-store' })
}

export default fetchFrontpagePeopleData
