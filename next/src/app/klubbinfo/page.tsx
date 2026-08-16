import PageHeading from '@/ui/modules/PageHeading'
import AboutSections from '@/ui/modules/AboutSections'
import ContactLinkSection from '@/ui/modules/ContactLinkSection'
import Oss from '@/ui/modules/Oss'
import Partnere from '@/ui/modules/Partnere'
import Separator from '@/ui/modules/Separator'
import fetchAboutSectionsData from '@/lib/fetchAboutSectionsData'
import fetchKlubbinfoPageData from '@/lib/fetchKlubbinfoPageData'
import fetchBoardFaqData from '@/lib/fetchBoardFaqData'

export default async function Klubbinfo() {
	const [aboutSections, klubbinfoPage, boardFaqMembers] = await Promise.all([
		fetchAboutSectionsData(),
		fetchKlubbinfoPageData(),
		fetchBoardFaqData(),
	])

	return (
		<div>
			<PageHeading
				title="Om klubben"
				description="Her finner du informasjon om Lørenskog Innebandyklubb – hvordan du blir medlem, partner og hvem du kan kontakte."
			/>
			<AboutSections sections={aboutSections} />
			<ContactLinkSection config={klubbinfoPage} />
			<Separator />
			<Oss questions={boardFaqMembers} />
			<Separator />
			<Partnere />
		</div>
	)
}
