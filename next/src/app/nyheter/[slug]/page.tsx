import fetchTeamData from '@/lib/fetchTeamData'
import { type NextPage } from 'next'
import React from 'react'

import PageHeading from '@/ui/modules/PageHeading'
import Separator from '@/ui/modules/Separator'
import fetchNewsDetailData from '@/lib/fetchNewsDetailData'
import NewsDetails from '@/ui/modules/NewsDetails'

type NewsDetailPageProps = {
	params: {
		slug: string
	}
}

const NewsDetail: NextPage<NewsDetailPageProps> = async ({ params }) => {
	const newsDetailData = await fetchNewsDetailData(params.slug)
	console.log(newsDetailData)

	// Check if team data is present
	if (!newsDetailData) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<PageHeading
				title="Nyheter"
				description="Her finner du våre nyhetssaker. Følg med for oppdateringer!"
			/>
			<NewsDetails news={newsDetailData} />
			<Separator />
		</div>
	)
}

export default NewsDetail
