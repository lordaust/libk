import React from 'react'
import Link from 'next/link'
import { KlubbinfoPageType } from '@/types/types'

type ContactLinkSectionProps = {
	config: KlubbinfoPageType
}

const ContactLinkSection: React.FC<ContactLinkSectionProps> = ({ config }) => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
				<div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-navy-100 bg-navy-50 p-6 sm:flex-row sm:items-center">
					<p className="text-lg font-semibold text-navy">
						Har du spørsmål om klubben?
					</p>
					<Link
						href={config.contactLinkTarget}
						className="group inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal/90"
					>
						{config.contactLinkText}
						<span
							aria-hidden="true"
							className="transition-transform duration-200 group-hover:translate-x-1"
						>
							&rarr;
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ContactLinkSection
