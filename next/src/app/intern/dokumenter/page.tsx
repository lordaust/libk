import type { Metadata } from 'next'
import InternalPageHeading from '@/ui/modules/InternalPageHeading'
import InternalDocumentList from '@/ui/modules/InternalDocumentList'
import Separator from '@/ui/modules/Separator'
import fetchInternalDocuments from '@/lib/fetchInternalDocuments'

export const metadata: Metadata = {
	title: 'Dokumenter | Intern | Lørenskog Innebandyklubb',
	description: 'Årsrapporter, referater, regnskap og invitasjoner.',
	robots: { index: false, follow: false },
}

export default async function InternDokumenterPage() {
	const documents = await fetchInternalDocuments('dokumenter')

	return (
		<div>
			<InternalPageHeading
				title="Dokumenter"
				description="Årsrapporter, referater, regnskap, invitasjoner og andre klubbdokumenter."
				backHref="/intern"
				backLabel="Interne ressurser"
			/>

			<InternalDocumentList
				documents={documents}
				emptyMessage="Ingen dokumenter er lagt til ennå."
			/>

			<Separator />
		</div>
	)
}
