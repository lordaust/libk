import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'

const fetchFrontPageData = async () => {
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
	return await sanityClient.fetch(query, {}, { cache: 'no-store' })
}

export default fetchFrontPageData
