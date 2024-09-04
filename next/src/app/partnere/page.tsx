import Oss from '@/ui/modules/Oss'
import PageHeading from '@/ui/modules/PageHeading'
import PartnerIntro from '@/ui/modules/PartnerIntro'
import PartnerDetaljer from '@/ui/modules/Partnere'
import Separator from '@/ui/modules/Separator'

export default async function Partnere() {
	return (
		<div>
			<PageHeading
				title="Partnere"
				description="Her finner du info om våre sammarbeidspartnere"
			/>
			<PartnerDetaljer />
		</div>
	)
}
