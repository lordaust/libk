import Image from 'next/image'

export default function forside() {
	return (
		<div>
			<div className="flex items-center justify-between gap-4">
				<div className="flex-1">
					<h2 className="text-balance text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
						Lørenskog Innebandyklubb
					</h2>
					<p className="mt-3 text-base text-black sm:mt-6 sm:text-lg">
						Innebandy for alle.
					</p>
				</div>
				<Image
					className="h-auto w-20 shrink-0 sm:w-28 lg:w-[185px]"
					src="/images/logo_libk_smaller.png"
					alt="Lørenskog Innebandy Logo"
					height={150}
					width={185}
				/>
			</div>
		</div>
	)
}
