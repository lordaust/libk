import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { AboutSectionType } from '@/types/types'

const fetchAboutSectionsData = async (): Promise<AboutSectionType[]> => {
	const query = groq`*[_type == "aboutSection"] | order(order asc) {
    _id,
    header,
    subtitle,
    content,
    order,
    _updatedAt,
    contactPerson->{
      name,
      role,
      email,
      phone,
      "photoUrl": photo.asset->url
    }
  }`
	return await sanityClient.fetch(query, {}, { cache: 'no-store' })
}

export default fetchAboutSectionsData
