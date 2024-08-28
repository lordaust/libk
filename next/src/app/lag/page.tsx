import Oss from '@/ui/modules/Oss'
import PageHeading from '@/ui/modules/PageHeading'
import TeamsAndContacts from '@/ui/modules/TeamsAndContacts'
import ContentTeamsPage from '@/ui/modules/ContentTeamsPage'

export default async function Lag() {
	return (
		<div>
			<PageHeading
				title="Våre lag"
				description="Her finner du våre registrerte lag. Finner du ikke ditt alderstrinn? Ta kontakt!"
			/>
			<ContentTeamsPage />
			<TeamsAndContacts />
		</div>
	)
}
