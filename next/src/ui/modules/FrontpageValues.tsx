const values = [
	{
		name: 'Samhold',
		description:
			'Det å finne samhold i en gruppe er viktig for å skape et godt miljø der alle kan skinne og føle seg verdsatt i fellesskapet. Samhold er en viktig faktor for å skape trivsel og en kultur som inkluderer og aksepterer. Vi ønsker at alle skal føle seg velkommen og inkludert i klubben og har nulltolleranse for mobbing.',
	},
	{
		name: 'Mestring',
		description:
			'Mestring er viktig for å skape ro, selvtillitt og trygghet til å ta ansvar for seg selv og andre. Mestring er fundamentet for motivasjon, troen på seg selv, driv og engasjement. Vi ønsker at alle skal oppleve mestring og at alle skal få mulighet til å utvikle seg. Vi ønsker at alle skal få mulighet til å utvikle seg til sitt ypperste nivå.',
	},
	{
		name: 'Iddrettsglede',
		description:
			'Idrettsglede er viktig for å skape en positiv holdning til idrett, til sunn konkurranse, oppnåelse av sine mål, hardt arbeid og å fostre en positiv holdning til seg selv og andre. Idrettsglede er viktig for å skape en positiv holdning til trening og til å skape en positiv holdning til å ta ansvar for seg selv og andre. Sammen i oppturer, nedturer og seire. Sammen i motgang og medgang. Glede ved oppnåelse over seg selv og andres prestasjoner. Vi ønsker at alle skal oppleve ekte glede i idrett og lek.',
	},
]

const FrontpageValues = () => {
	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Våre kjerneverdier
				</h2>
				<p className="mt-6 text-lg leading-8 text-gray-600">
					Inkludering, jobbe for hverandre, mesting og tro på seg selv, og glede
					er våre viktigste mål.
				</p>
			</div>
			<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{values.map((value) => (
					<div key={value.name}>
						<dt className="font-semibold text-gray-900">{value.name}</dt>
						<dd className="mt-1 text-gray-600">{value.description}</dd>
					</div>
				))}
			</dl>
		</div>
	)
}

export default FrontpageValues
