// src/app/teams/page.tsx
import fetchTeamsData from '@/lib/fetchTeamsData'
import PageHeading from '@/ui/modules/PageHeading'
import Separator from '@/ui/modules/Separator'
import { TeamType } from '@/types/types'
import TrainingScheduleDetails from '@/ui/modules/TrainingScheduleDetails'

export default async function TeamsPage() {
	const teamsData: TeamType[] = await fetchTeamsData()

	return (
		<div>
			<PageHeading
				title="Våre lags treningstider 2024-2025"
				description="Her er en samlet oversikt over alle våre lags treningstider i sesongen 2024-2025. For visse lag er påmelding i Spond. Avvik, ferier og uventa opphold får du beskjed om på trening eller i spond."
			/>

			<TrainingScheduleDetails teamsSchedule={teamsData} />

			<Separator />
		</div>
	)
}
