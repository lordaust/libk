import Image from 'next/image'

export default function forside() {
	return (
		<div>
			<div className="flex items-center justify-between gap-4">
				<div className="flex-1">
					<span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
						<span className="h-px w-8 bg-royal" aria-hidden="true" />
						Stiftet 1987
					</span>
					<h2 className="text-balance font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-navy sm:text-5xl lg:text-6xl">
						Lørenskog Innebandyklubb
					</h2>
					<p className="mt-3 text-base text-navy-500 sm:mt-5 sm:text-lg">
						Innebandy for alle.
					</p>
				</div>
				<Image
					className="h-auto w-20 shrink-0 drop-shadow-sm sm:w-28 lg:w-[185px]"
					src="/images/logo_libk_smaller.png"
					alt="Lørenskog Innebandy Logo"
					height={150}
					width={185}
					priority
				/>
			</div>
		</div>
	)
}
