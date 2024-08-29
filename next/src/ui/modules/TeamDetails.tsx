import { TeamType } from '@/types/types'
import React from 'react'
import { PortableText } from '@portabletext/react'

type TeamDetailsProps = {
	team: TeamType
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ team }) => {
	if (!team) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div className="mt-2">
				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						Hvem kan bli med?
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
						<strong>{team.teamCategory}:</strong>{' '}
						{team.participationDescription}
					</dd>
				</div>
				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						Treningstider
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
						{team.trainingTimes.map((trainingTime, index) => (
							<div key={index}>{trainingTime}</div>
						))}
					</dd>
				</div>
				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						Hva koster det?
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
						<strong>Treningsavgift</strong> {team.membershipCost} pr år <br />
						<br />
						<strong>Lisens</strong> {team.licenseCost} pr år <br />
					</dd>
				</div>
				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						Spond kode
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
						{team.spondCode}
					</dd>
				</div>
				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						Om laget
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
						<PortableText value={team.teamDescRichText} />
						ikke tomt.
					</dd>
				</div>
			</div>
		</div>
	)
}

export default TeamDetails
