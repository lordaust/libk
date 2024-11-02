import fetchTeamData from '@/lib/fetchTeamData'
import { type NextPage } from 'next'
import React from 'react'

import PageHeading from '@/ui/modules/PageHeading'
import TeamDetails from '@/ui/modules/TeamDetails'
import Oss from '@/ui/modules/Oss'
import Separator from '@/ui/modules/Separator'
import Coach from '@/ui/modules/Coach'
import fetchTeamFaqData from '@/lib/fetchTeamFaqData'
import TeamImage from '@/ui/modules/TeamImage'

type TeamPageProps = {
	params: {
		slug: string
	}
}

const LagInfo: NextPage<TeamPageProps> = async ({ params }) => {
	const teamData = await fetchTeamData(params.slug)
	const teamFaqData = await fetchTeamFaqData()
	//	console.log(teamData.teamImage as { asset?: any; crop?: any; hotspot?: any })
	//console.log(teamFaqData)

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
			<div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:space-x-6">
				{teamData.teamImage && (
					<TeamImage
						image={
							teamData.teamImage as { asset?: any; crop?: any; hotspot?: any }
						}
						alt={`${teamData.teamTitle} image`}
					/>
				)}
				<Coach coach={teamData.contactPerson} />
			</div>

			<Separator />
			<TeamDetails team={teamData} />
			<Separator />

			<Oss questions={teamFaqData} />
		</div>
	)
}

export default LagInfo
