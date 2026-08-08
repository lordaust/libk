import Image from 'next/image'

export default function PartnerDetaljer() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
					<div className="mx-auto w-full max-w-xl lg:mx-0">
						<span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
							<span className="h-px w-8 bg-royal" aria-hidden="true" />
							Samarbeidspartnere
						</span>
						<h2 className="font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
							Våre sammarbeidspartnere
						</h2>
						<p className="mt-6 text-lg leading-8 text-navy-600">
							Vi har over mange år hatt samarbeid med en rekke solide aktører i
							Norge. Alle bidrar de til vår drift, til nærmiljø eller idrett
							generellt eller arbeid med barn og unge i kommunen. Vi er stolte
							av å ha disse med oss på laget.
						</p>
						<div className="mt-8 flex items-center gap-x-6">
							<a href="#" className="action">
								Ønsker du å bli partner?
							</a>
							<a
								href="#"
								className="group inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors hover:text-royal"
							>
								Kontakt oss!{' '}
								<span
									aria-hidden="true"
									className="transition-transform duration-200 group-hover:translate-x-1"
								>
									&rarr;
								</span>
							</a>
						</div>
					</div>
					<div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-6 lg:mx-0 lg:max-w-none lg:pl-8">
						<div className="flex items-center justify-center rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-card-hover">
							<Image
								className="h-auto w-auto max-w-[70%] opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
								src="/images/comet_sport_logo_300.png"
								alt="Comet sport logo"
								width={300}
								height={150}
							/>
						</div>
						<div className="flex items-center justify-center rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-card-hover">
							<Image
								className="h-auto w-auto max-w-[70%] opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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
