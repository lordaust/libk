import fetchFrontpagePeopleData from '@/lib/fetchFrontpagePeopleData'

const FrontpageClubMembers = async () => {
	const people = await fetchFrontpagePeopleData()

	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0">
				<span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
					<span className="h-px w-8 bg-brand" aria-hidden="true" />
					Klubben
				</span>
				<h2 className="font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
					Hvem er vi?
				</h2>
				<p className="mt-6 text-lg leading-8 text-navy-600">
					Hos oss er det en hel rekke mennesker som bidrar til at barn og voksne
					kan drive med det de elsker. Her er noen av dem.
				</p>
			</div>
			<ul
				role="list"
				className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-12 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				{people.map((person, index) => (
					<li key={`${person.name}-${index}`} className="group">
						<div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-navy-100 ring-offset-2 transition-all duration-300 group-hover:ring-brand">
							<img
								alt={person.photo?.caption ?? person.name}
								src={person.photoUrl ?? 'https://via.placeholder.com/150'}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
						<h3 className="mt-5 text-base font-semibold leading-7 tracking-tight text-navy">
							{person.name}
						</h3>
						<p className="text-sm leading-6 text-brand">{person.role}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FrontpageClubMembers
