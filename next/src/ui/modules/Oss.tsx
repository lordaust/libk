const faqs = [
	{
		question: 'Kan jeg spille innebandy?',
		answer:
			'Lørenskog innebandy driver med breddeidrett. Vi ønsker at alle skal kunne bli med, og ha det bra i klubben vår. Vi kan alltid tilby spillere å komme og prøve idretten. Vi har fokus på at alle får mulighet til å utvikle seg knyttet til sitt nivå. Vi har også null toleranse for mobbing.',
	},
	{
		question: 'Så hva forventer vi?',
		answer:
			'Alle som skal være med må stille på trening, følge med og oppføre seg ovenfor medspillere, motspillere og trenere. Jo mindre man kan når man begynner jo mer/lengre må man trene før man er klar for å spille kamper. Dette er for å sikre spillerne slik at de ikke blir skadet eller slutter. Noen spillere kan trene med et eldre eller yngre lag for å få bedre tilpasset treningsnivå.',
	},
	{
		question: 'Hva trenger vi av foreldrene?',
		answer:
			'Alle spillere må være registrert og medlem i klubben. Dette kan gjøres via innmelding skjema på våre nettsider. For de nye spillerne vil vi at foreldrene er i hallen på de 3-4 første treningene. Er det spesielle behov rundt en spiller må klubben bli informert om dette.',
	},
	{
		question: 'Hva slags utstyr må vi ha?',
		answer:
			'Alle spillere må ha treningstøy for å trene inne, inne-/hallsko, innebandybriller, vannflaske og innebandykølle (opp til navlen).',
	},
	{
		question: 'Hva om det skjer noe på trening eller kamper?',
		answer:
			'Vi må ha kontaktdetaljer til foreldrene slik at vi kan ringe om det skjer noe. Hvis det oppstår en situasjon på trening vil spilleren bli utvist fra resten av den aktuelle treningen. Skulle det skje flere ganger blir spilleren utvist for 1 mnd. (4 uker), og vi vil ta en samtale med foreldrene sammen med spilleren. Hvis dette ikke hjelper vil spilleren bli utvist for en lengere periode, eventuelt resten av sesongen. Spillere som ikke har betalt kontingent eller skylder klubben penger får ikke trene eller spille kamper før dette er i orden.',
	},
	{
		question: 'Hva koster det?',
		answer:
			'Klubben har en treningsavgift + medlemsavgift. Prisene varierer mellom 1000-1500,- for de forskjellige lagene pr. sesong (ca. 1. sept. til 30. april, totalt 8 mnd.) Klubben har veldig lite dugnader. Men alle lag må bidra på tilsynsvakter, der man må være i hallen for å passe på at ting går bra for seg. Lagleder for lagene fordeler og informerer om hvilke vakter deres lag er tildelt. Tilsynsvaktene er et krav fra kommunen for å kunne disponere Kjennhallen. I tillegg har har vi hjemmekamper der foreldre bidrar til å drive kaféen, sekretariat og inngang ifbm. eget lags kamp. Klubben kan også få tildelt et heldags arrangement der vi skal f.eks. holde 5-6 kamper eller en minirunde / cup. Da må alle foreldre fra aktuelle årstrinn bidra.',
	},

	// More questions...
]

export default function OSS() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
				<div className="lg:grid lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-5">
						<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
							Kansje du lurer på noe?
						</h2>
						<p className="mt-4 text-base leading-7 text-gray-600">
							Vi har samlet noen av de vanligste spørsmålene vi får, som kanskje
							kan hjelpe. Hvis du ikke finner svaret du leter etter, kan du
							kontakte
							<a
								href="#"
								className="font-semibold text-indigo-600 hover:text-indigo-500"
							>
								oss
							</a>{' '}
							direkte.
						</p>
					</div>
					<div className="mt-10 lg:col-span-7 lg:mt-0">
						<dl className="space-y-10">
							{faqs.map((faq) => (
								<div key={faq.question}>
									<dt className="text-base font-semibold leading-7 text-gray-900">
										{faq.question}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										{faq.answer}
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
