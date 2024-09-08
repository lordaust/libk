import Oss from '@/ui/modules/Oss'
import PageHeading from '@/ui/modules/PageHeading'
import BoardMembers from '@/ui/modules/BoardMembers'
import fetchBoardMembersData from '@/lib/fetchBoardMembersData'
import fetchBoardFaqData from '@/lib/fetchBoardFaqData'
import Partnere from '@/ui/modules/Partnere'
import Separator from '@/ui/modules/Separator'

export default async function Klubbinfo() {
	const boardMembers = await fetchBoardMembersData()
	const boardFaqMembers = await fetchBoardFaqData()

	//console.log(boardMembers)
	return (
		<div>
			{/* <PageHeading
				title="Klubbinfo"
				description="Her finner du all informasjon om klubben vår"
			/> */}
			<BoardMembers boardMembers={boardMembers} />
			<Separator />
			<Oss questions={boardFaqMembers} />
			<Separator />
			<Partnere />
		</div>
	)
}
