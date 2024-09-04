import Oss from '@/ui/modules/Oss'
import PageHeading from '@/ui/modules/PageHeading'
import TeamsAndContacts from '@/ui/modules/TeamsAndContacts'
import ContentTeamsPage from '@/ui/modules/ContentTeamsPage'
import fetchTeamsData from '@/lib/fetchTeamsData'
import Separator from '@/ui/modules/Separator'

export default async function Lag() {
	const teamsData = await fetchTeamsData()
	//console.log(teamsData)
	return (
		<div>
			<PageHeading
				title="Våre lag"
				description="Her finner du våre registrerte lag. Finner du ikke ditt alderstrinn? Ta kontakt!"
			/>
			<TeamsAndContacts teams={teamsData} />
			<Separator />

			<ContentTeamsPage />
		</div>
	)
}
