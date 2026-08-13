import React from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaLock } from 'react-icons/fa'

type InternalPageHeadingProps = {
	kicker?: string
	title: string
	description?: string
	backHref?: string
	backLabel?: string
}

const InternalPageHeading: React.FC<InternalPageHeadingProps> = ({
	kicker = 'Internt',
	title,
	description,
	backHref,
	backLabel,
}) => {
	return (
		<header className="mb-8">
			{backHref && (
				<Link
					href={backHref}
					className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-royal transition-colors hover:text-royal-700"
				>
					<FaArrowLeft className="h-3 w-3" aria-hidden="true" />
					{backLabel ?? 'Tilbake'}
				</Link>
			)}

			<div className="flex items-center gap-3">
				<span className="h-px w-8 bg-royal" aria-hidden="true" />
				<span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
					<FaLock className="h-3 w-3" aria-hidden="true" />
					{kicker}
				</span>
			</div>

			<h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-navy-900 sm:text-5xl">
				{title}
			</h1>

			{description && (
				<p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-navy-600">
					{description}
				</p>
			)}
		</header>
	)
}

export default InternalPageHeading
