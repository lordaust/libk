import { InternalDocument, InternalDocumentCategory } from '@/types/types'

// TODO: Replace with a Sanity fetch once the `internalDocument` schema is live.
// This is example data used to build and preview the /intern pages.
const internalDocumentsMock: InternalDocument[] = [
	// --- Dokumenter ---
	{
		_id: 'doc-1',
		title: 'Årsrapport 2024',
		description: 'Styrets årsberetning og aktivitetsrapport for sesongen 2024.',
		category: 'dokumenter',
		fileUrl: '/documents/arsrapport-2024.pdf',
		fileType: 'pdf',
		publishedAt: '2025-02-18',
	},
	{
		_id: 'doc-2',
		title: 'Regnskap 2024',
		description: 'Fullstendig regnskap med resultat- og balanseoppstilling.',
		category: 'dokumenter',
		fileUrl: '/documents/regnskap-2024.xlsx',
		fileType: 'xlsx',
		publishedAt: '2025-02-15',
	},
	{
		_id: 'doc-3',
		title: 'Referat årsmøte 2025',
		description: 'Protokoll fra årsmøtet avholdt 12. mars 2025.',
		category: 'dokumenter',
		fileUrl: '/documents/referat-arsmote-2025.pdf',
		fileType: 'pdf',
		publishedAt: '2025-03-14',
	},
	{
		_id: 'doc-4',
		title: 'Referat styremøte januar 2025',
		description: 'Referat fra styremøtet 09. januar 2025.',
		category: 'dokumenter',
		fileUrl: '/documents/referat-styremote-jan-2025.docx',
		fileType: 'docx',
		publishedAt: '2025-01-10',
	},
	{
		_id: 'doc-5',
		title: 'Invitasjon Lørenskog Cup 2025',
		description: 'Invitasjon og påmeldingsinfo til årets klubbturnering.',
		category: 'dokumenter',
		fileUrl: '/documents/invitasjon-lorenskog-cup-2025.pdf',
		fileType: 'pdf',
		publishedAt: '2025-04-02',
	},
	{
		_id: 'doc-6',
		title: 'Påmeldingsskjema (ekstern)',
		description: 'Digitalt påmeldingsskjema for arrangementer.',
		category: 'dokumenter',
		fileUrl: 'https://forms.gle/eksempel',
		isExternal: true,
		fileType: 'link',
		publishedAt: '2025-04-02',
	},

	// --- Media ---
	{
		_id: 'media-1',
		title: 'Klubblogo (PNG)',
		description: 'Hovedlogo med transparent bakgrunn – for skjerm og web.',
		category: 'media',
		fileUrl: '/images/logo_libk_2025.png',
		fileType: 'png',
		publishedAt: '2025-05-01',
	},
	{
		_id: 'media-2',
		title: 'Klubblogo (SVG)',
		description: 'Vektorversjon av logoen – for trykk og skalering.',
		category: 'media',
		fileUrl: '/media/logo_libk_2025.svg',
		fileType: 'svg',
		publishedAt: '2025-05-01',
	},
	{
		_id: 'media-3',
		title: 'Lagbilde A-lag 2024/25',
		description: 'Offisielt lagbilde i full oppløsning.',
		category: 'media',
		fileUrl: '/media/lagbilde-a-lag-2024-25.jpg',
		fileType: 'jpg',
		publishedAt: '2024-11-20',
	},
	{
		_id: 'media-4',
		title: 'Drakt- og profilmanual',
		description: 'Retningslinjer for bruk av logo, farger og typografi.',
		category: 'media',
		fileUrl: '/media/profilmanual.pdf',
		fileType: 'pdf',
		publishedAt: '2025-05-03',
	},
	{
		_id: 'media-5',
		title: 'Bildearkiv sesong 2024/25 (ekstern)',
		description: 'Lenke til delt Google Drive-mappe med sesongbilder.',
		category: 'media',
		fileUrl: 'https://drive.google.com/eksempel',
		isExternal: true,
		fileType: 'link',
		publishedAt: '2025-05-10',
	},
]

export function getInternalDocumentsByCategory(
	category: InternalDocumentCategory,
): InternalDocument[] {
	return internalDocumentsMock
		.filter((doc) => doc.category === category)
		.sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))
}

export function getInternalDocumentCount(
	category: InternalDocumentCategory,
): number {
	return internalDocumentsMock.filter((doc) => doc.category === category).length
}

export default internalDocumentsMock
