import Oss from '@/ui/modules/Oss'
import PageHeading from '@/ui/modules/PageHeading'
import BoardMembers from '@/ui/modules/BoardMembers'
import fetchBoardMembersData from '@/lib/fetchBoardMembersData'

export default async function Klubbinfo() {
	const boardMembers = await fetchBoardMembersData()
	console.log(boardMembers)
	return (
		<div>
			<PageHeading
				title="Klubbinfo"
				description="Her finner du all informasjon om klubben vår"
			/>
			<BoardMembers boardMembers={boardMembers} />
			<Oss />
		</div>
	)
}
