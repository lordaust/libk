import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { FaqType } from '@/types/types'

const fetchTeamFAQData = async (): Promise<FaqType[]> => {
	const query = groq`*[_type == "faq"&& category in ['Klubbinfo', 'Medlemskap']]| order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }`
	return await sanityClient.fetch(query)
}

export default fetchTeamFAQData