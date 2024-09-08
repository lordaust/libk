import FrontPage from '@/ui/modules/frontpage'
import Partnere from '@/ui/modules/Partnere'
import Separator from '@/ui/modules/Separator'

export default async function Forside() {
	//console.log(boardMembers)
	return (
		<div>
			<FrontPage />
			<Separator />
			<Partnere />
		</div>
	)
}
