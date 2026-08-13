import type { Metadata } from 'next'
import Link from 'next/link'
import { FaFolderOpen, FaImages, FaArrowRight } from 'react-icons/fa'
import InternalPageHeading from '@/ui/modules/InternalPageHeading'
import Separator from '@/ui/modules/Separator'
import { getInternalDocumentCount } from '@/lib/internalDocumentsMock'

export const metadata: Metadata = {
	title: 'Intern | Lørenskog Innebandyklubb',
	description: 'Interne ressurser for medlemmer, styret og lagledere.',
	robots: { index: false, follow: false },
}

const categories = [
	{
		href: '/intern/dokumenter',
		title: 'Dokumenter',
		description:
			'Årsrapporter, referater, regnskap, invitasjoner og andre klubbdokumenter.',
		category: 'dokumenter' as const,
		icon: FaFolderOpen,
	},
	{
		href: '/intern/media',
		title: 'Media',
		description:
			'Logoer, lagbilder, profilmanual og annet bildemateriell til nedlasting.',
		category: 'media' as const,
		icon: FaImages,
	},
]

export default function InternPage() {
	return (
		<div>
			<InternalPageHeading
				title="Interne ressurser"
				description="Her samler vi dokumenter og media for medlemmer, styret og lagledere. Denne siden er ikke synlig i menyen eller i søkemotorer – del lenken kun med de som skal ha tilgang."
			/>

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
				{categories.map((cat) => {
					const Icon = cat.icon
					const count = getInternalDocumentCount(cat.category)
					return (
						<Link
							key={cat.href}
							href={cat.href}
							className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-royal-200 hover:shadow-card-hover"
						>
							<span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal ring-1 ring-inset ring-royal-100">
								<Icon className="h-6 w-6" aria-hidden="true" />
							</span>

							<h2 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-navy-900 group-hover:text-royal">
								{cat.title}
							</h2>
							<p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-navy-600">
								{cat.description}
							</p>

							<span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal">
								{count} {count === 1 ? 'ressurs' : 'ressurser'}
								<FaArrowRight
									className="h-3 w-3 transition-transform group-hover:translate-x-1"
									aria-hidden="true"
								/>
							</span>
						</Link>
					)
				})}
			</div>

			<Separator />
		</div>
	)
}
