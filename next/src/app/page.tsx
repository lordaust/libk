import Oss from '@/ui/modules/Oss'
import PageHeading from '@/ui/modules/PageHeading'
import BoardMembers from '@/ui/modules/BoardMembers'
import fetchBoardMembersData from '@/lib/fetchBoardMembersData'
import fetchBoardFaqData from '@/lib/fetchBoardFaqData'
import Partnere from '@/ui/modules/Partnere'
import Separator from '@/ui/modules/Separator'

export default async function Forside() {
	//console.log(boardMembers)
	return (
		<div>
			Velkommen til forsiden. Her er det meningen at vi skal vise noe
			informasjon om klubben. La oss snakke om hva. Et bilde bør vi ha også.
			<Separator />
			<Partnere />
		</div>
	)
}
