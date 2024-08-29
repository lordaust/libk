import {
	CheckCircleIcon,
	InformationCircleIcon,
} from '@heroicons/react/20/solid'

export default function ContentTeamsPage() {
	return (
		<div className="bg-white px-6 pb-32 lg:px-8">
			<div className="max-w-3xl text-base leading-7 text-gray-700 ">
				<div className="mt-10 max-w-2xl">
					<p>
						Kontaktpersoner aldersbestemte lag – bruk gjerne SMS først for å gi
						litt info om din henvendelse, da de av oss som må registreres i
						brønnøysundregisteret er svært rammet av telefonselgere.
					</p>
					<ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
						<li className="flex gap-x-3">
							<CheckCircleIcon
								aria-hidden="true"
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
							/>
							<span>
								<strong className="font-semibold text-gray-900">
									Samtrening
								</strong>{' '}
								På de yngste lagene trener gutter og jenter sammen. Ettersom
								lagene blir eldre prøver vi å dele lagene inn i gutte- og
								jentelag dersom det er nok spillere til dette. Ved for få
								spillere, deltar jentene på guttelagene – enten på samme
								alderstrinn, eller på trinnet under/over.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								aria-hidden="true"
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
							/>
							<span>
								<strong className="font-semibold text-gray-900">Kontakt</strong>{' '}
								Ta kontakt med treneren/kontaktperson for laget for nærmere
								informasjon. Grunnet stor pågang av telefonselgere er det lurt å
								sende en SMS først for å si noe om hva det gjelder.
							</span>
						</li>
						<li className="flex gap-x-3">
							<CheckCircleIcon
								aria-hidden="true"
								className="mt-1 h-5 w-5 flex-none text-indigo-600"
							/>
							<span>
								<strong className="font-semibold text-gray-900">
									Facebook.
								</strong>{' '}
								Finn oss også på Facebook:{' '}
								<a
									href="https://www.facebook.com/LIBK1983/?fref=ts"
									target="#new"
								>
									Lørenskog innebandy
								</a>
								.
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
