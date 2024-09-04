import fetchTeamData from '@/lib/fetchTeamData'
import { type NextPage } from 'next'
import React from 'react'

import PageHeading from '@/ui/modules/PageHeading'
import TeamDetails from '@/ui/modules/TeamDetails'
import Oss from '@/ui/modules/Oss'
import Separator from '@/ui/modules/Separator'
import Coach from '@/ui/modules/Coach'
import fetchTeamFaqData from '@/lib/fetchTeamFaqData'

type TeamPageProps = {
	params: {
		slug: string
	}
}

const LagInfo: NextPage<TeamPageProps> = async ({ params }) => {
	const teamData = await fetchTeamData(params.slug)
	const teamFaqData = await fetchTeamFaqData()
	console.log(teamData)
	console.log(teamFaqData)

	// Check if team data is present
	if (!teamData) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<PageHeading
				title={teamData.teamTitle}
				description={teamData.teamLongDescription}
			/>
			<Coach coach={teamData.contactPerson} />
			<Separator />
			<TeamDetails team={teamData} />
			<Separator />

			<Oss questions={teamFaqData} />
		</div>
	)
}

export default LagInfo
