import Image from 'next/image'

export default function forside() {
	return (
		<div>
			<div className="flex">
				<span className="flex-1">
					<h2 className="text-4xl font-bold text-black sm:text-6xl">
						Lørenskog Innebandyklubb
					</h2>
					<p className="mt-6 text-lg text-black">Innebandy for alle.</p>
				</span>
				<span>
					<div className="">
						<Image
							className="w-auto"
							src="/images/logo_libk_smaller.png"
							alt="Lørenskog Innebandy Logo"
							height={150}
							width={185}
						/>
					</div>
				</span>
			</div>
		</div>
	)
}
