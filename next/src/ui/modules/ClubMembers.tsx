import fetchFrontpagePeopleData from '@/lib/fetchFrontpagePeopleData'

const FrontpageClubMembers = async () => {
	const people = await fetchFrontpagePeopleData()

	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Hvem er vi?
				</h2>
				<p className="mt-6 text-lg leading-8 text-gray-600">
					Hos oss er det en hel rekke mennesker som bidrar til at barn og voksne
					kan drive med det de elsker. Her er noen av dem.
				</p>
			</div>
			<ul
				role="list"
				className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				{people.map((person) => (
					<li key={person.name}>
						<img
							alt={person.photo?.caption}
							src={person.photoUrl ?? 'https://via.placeholder.com/150'}
							className="mx-auto h-24 w-24 rounded-full"
						/>
						<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
							{person.name}
						</h3>
						<p className="text-sm leading-6 text-gray-600">{person.role}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FrontpageClubMembers
