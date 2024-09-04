import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { BlogPostType } from '@/types/types'

const fetchNewsData = async (): Promise<BlogPostType[]> => {
	const query = groq`*[_type == "blogpost"] | order(publishDate desc) {
  _id,
  title,
    slug {
      current,
      _type
    },
  body,
  publishDate,
	 "authorId": author->_id,
  author->{
    name,
    email,
    phone,
    role,
    photo,
    "photoUrl": photo.asset->url,
  },
  description,
  "categories": categories[]->{
    _id,
    title
  },
}
`
	return await sanityClient.fetch(query)
}

export default fetchNewsData
