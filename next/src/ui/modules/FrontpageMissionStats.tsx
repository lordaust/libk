const stats = [
	{ label: 'medlemmer totalt', value: '249' },
	{ label: 'trening pr uke', value: '52 timer' },
	{ label: 'lag på ulike alderstrinn', value: '7' },
]

const FrontpageMissionStats = () => {
	return (
		<div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Vår misjon
				</h2>
				<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
					<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
						<p className="text-xl leading-8 text-gray-600">
							Vi tror at mesting, samhold og idrettglede er viktig for både
							voksne og barn og noe alle bør få oppleve. Vi ønsker å være en
							klubb som er for alle, og som har plass til alle. Vi har et godt
							miljø, og ønsker alltid enda flere nye spillere velkommen til oss.
							Vi drives av engasjerte frivillige som brenner for idretten og for
							at alle skal bli sett og hørt.
						</p>
						<div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
							<p>
								Lørenskog innebandy driver i dag bare med breddeidrett. Vi kan
								alltid tilby spillere å komme og prøve idretten. Vi har fokus på
								at alle får mulighet til å utvikle seg knyttet til sitt nivå. Vi
								har også null toleranse for mobbing. Inkludering, jobbe for
								hverandre og glede er våre viktigste mål.
							</p>
							<p className="mt-10">
								Lørenskog IBK er opprinnelig en sammenslått klubb bestående av
								Rasta IBK (stiftet 1987) og Løken/Finstad IBK (stiftet 1989).
								Disse to klubbene slo seg sammen til Lørenskog IBK i 1991. Vi
								har spilt på alle nivåer fra Elite til mini, fra da til nå.
							</p>
						</div>
					</div>
					<div className="lg:flex lg:flex-auto lg:justify-center">
						<dl className="w-64 space-y-8 xl:w-80">
							{stats.map((stat) => (
								<div key={stat.label} className="flex flex-col-reverse gap-y-4">
									<dt className="text-base leading-7 text-gray-600">
										{stat.label}
									</dt>
									<dd className="text-5xl font-semibold tracking-tight text-gray-900">
										{stat.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FrontpageMissionStats
