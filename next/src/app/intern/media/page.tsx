import type { Metadata } from 'next'
import InternalPageHeading from '@/ui/modules/InternalPageHeading'
import InternalDocumentList from '@/ui/modules/InternalDocumentList'
import Separator from '@/ui/modules/Separator'
import { getInternalDocumentsByCategory } from '@/lib/internalDocumentsMock'

export const metadata: Metadata = {
	title: 'Media | Intern | Lørenskog Innebandyklubb',
	description: 'Logoer, bilder og annet mediemateriell.',
	robots: { index: false, follow: false },
}

export default function InternMediaPage() {
	const documents = getInternalDocumentsByCategory('media')

	return (
		<div>
			<InternalPageHeading
				title="Media"
				description="Logoer, lagbilder, profilmanual og annet bildemateriell til nedlasting."
				backHref="/intern"
				backLabel="Interne ressurser"
			/>

			<InternalDocumentList
				documents={documents}
				emptyMessage="Ingen mediefiler er lagt til ennå."
			/>

			<Separator />
		</div>
	)
}
