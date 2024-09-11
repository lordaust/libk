import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { BlogPostType } from '@/types/types'

const fetchNewsData = async (slug: string): Promise<BlogPostType> => {
	const query = groq`*[_type == "blogpost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "asset": asset-> // Fetch the asset reference for image URLs
    }
  },
  publishDate,
  description,
  "authorId": author->_id,
  author->{
    name,
    email,
    phone,
    role,
    photo,
    "photoUrl": photo.asset->url
  },
  "attachments": attachments[]->{
    _id,
    title,
    description,
    "fileUrl": file.asset->url
  },
  "categories": categories[]->{
    _id,
    title
  }
}
`
	return await sanityClient.fetch(query, { slug }, { cache: 'no-store' })
}

export default fetchNewsData
