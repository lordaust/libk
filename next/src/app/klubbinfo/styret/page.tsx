import BoardMembers from '@/ui/modules/BoardMembers'
import fetchBoardMembersData from '@/lib/fetchBoardMembersData'
import Separator from '@/ui/modules/Separator'

export default async function Styret() {
	const boardMembers = await fetchBoardMembersData()

	return (
		<div>
			<BoardMembers boardMembers={boardMembers} />
			<Separator />
		</div>
	)
}
