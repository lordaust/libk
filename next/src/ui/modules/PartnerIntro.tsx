const PartnerIntro: React.FC = ({}) => {
	return (
		<div className="bg-white py-10 md:py-10">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
				<div className="max-w-2xl xl:col-span-2">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Våre partnere
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Som klubb jobber vi tett med nærmiljøet og samarbeidspartnere for å
						finne gode lokal løsninger. Vi har et knippe partnere som vi jobber
						tett med, der vi sammen jobber for å skape bærekratige løsninger for
						våre medlemmer.
					</p>
				</div>
			</div>
		</div>
	)
}

export default PartnerIntro
