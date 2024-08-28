import Image from 'next/image'

export default function partnere() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
					<div className="mx-auto w-full max-w-xl lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Våre sammarbeidspartnere
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Vi har over mange år hatt samarbeid med en rekke solide aktører i
							Norge. Alle bidrar de til vår drift, til nærmiljø eller idrett
							generellt eller arbeid med barn og unge i kommunen. Vi er stolte
							av å ha disse med oss på laget.
						</p>
						<div className="mt-8 flex items-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Ønsker du å bli partner?
							</a>
							<a href="#" className="text-sm font-semibold text-gray-900">
								Kontakt oss! <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
						<div>
							<Image
								className="w-auto"
								src="/images/torshov_sport_logo_300.png"
								alt="Torshov sport logo"
								width={300}
								height={150}
							/>
						</div>
						<div>
							<Image
								className="w-auto"
								src="/images/comet_sport_logo_300.png"
								alt="Comet sport logo"
								width={300}
								height={150}
							/>
						</div>
						<div>
							<Image
								className="w-auto"
								src="/images/aya_sports_logo_300.png"
								alt="Aya sport logo"
								width={300}
								height={150}
							/>
						</div>
						<div>
							<Image
								className="w-auto"
								src="/images/umbro_logo_300.png"
								alt="Umbro sport logo"
								width={300}
								height={150}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
