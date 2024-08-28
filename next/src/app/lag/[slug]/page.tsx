import fetchTeamData from '@/lib/fetchTeamData'
import { type NextPage } from 'next'
import React from 'react'

import PageHeading from '@/ui/modules/PageHeading'
import TeamDetails from '@/ui/modules/TeamDetails'
import Oss from '@/ui/modules/Oss'

type TeamPageProps = {
	params: {
		slug: string
	}
}

const LagInfo: NextPage<TeamPageProps> = async ({ params }) => {
	const team = await fetchTeamData(params.slug)
	console.log(team)

	// Check if team data is present
	if (!team) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<PageHeading
				title={team.teamTitle}
				description={team.teamLongDescription}
			/>
			<TeamDetails team={team} />
			<Oss />
		</div>
	)
}

export default LagInfo