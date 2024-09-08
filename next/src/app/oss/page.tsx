import Oss from '@/ui/modules/Oss'
import PageHeading from '@/ui/modules/PageHeading'
import Separator from '@/ui/modules/Separator'
import fetchFAQData from '@/lib/fetchFAQData'

export default async function faq() {
	const faqData = await fetchFAQData()
	//console.log(faqData)
	return (
		<div>
			{/* 			<PageHeading
				title="OSS/FAQ"
				description="Her finner du typiske spørsmål vi får og svar på disse."
			/> */}
			<Oss questions={faqData} />
			<Separator />
		</div>
	)
}
