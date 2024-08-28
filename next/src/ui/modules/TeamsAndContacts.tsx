import { ChevronRightIcon } from '@heroicons/react/20/solid'

const people = [
	{
		name: '2013 - Christian Hansen',
		email: '48 44 88 84',
		role: 'Trener og lagleder',
		imageUrl: './images/christian.png',
		href: '/lag/2013',
		lastSeen: 'Nestleder',
	},
	{
		name: '2014/2015 - Åsa Holtsmark',
		email: 'holtsmark @ gmail.com',
		role: 'Trenere og lagleder',
		imageUrl: '/images/aasa.png',
		href: '/lag/2014-2015',
		lastSeen: 'Styreleder',
	},
	{
		name: '2016/2017 - André Hamre Solli',
		email: '45 24 38 70',
		role: 'Trener',
		imageUrl:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		href: '/lag/2016-2017',
		lastSeen: 'Medlem',
	},
	{
		name: '2018 - Terje Gulbrandsen',
		email: '450 23 590',
		role: 'Oppmann',
		imageUrl:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		href: '/lag/2018',
		lastSeen: 'Medlem',
	},
	{
		name: 'Innebandyskolen - Kristian Skjerstad',
		email: '99 11 74 93',
		role: 'Ansvarlig arrangør',
		imageUrl:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		href: '#',
		lastSeen: 'Medlem',
	},
	{
		name: 'Veteran/Old boys - Thomas Borge',
		email: '90 76 95 56',
		role: 'Lagleder',
		imageUrl:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		href: '#',
		lastSeen: 'Musiker',
	},
]

export default function TeamsAndContacts() {
	return (
		<ul role="list" className="divide-y divide-gray-100">
			{people.map((person) => (
				<li key={person.email} className="relative py-5 hover:bg-gray-50">
					<div className="px-4 sm:px-6 lg:px-8">
						<div className="mx-auto flex max-w-4xl justify-between gap-x-6">
							<div className="flex min-w-0 gap-x-4">
								<img
									alt=""
									src={person.imageUrl}
									className="h-12 w-12 flex-none rounded-full bg-gray-50"
								/>
								<div className="min-w-0 flex-auto">
									<p className="text-sm font-semibold leading-6 text-gray-900">
										<a href={person.href}>
											<span className="absolute inset-x-0 -top-px bottom-0" />
											{person.name}
										</a>
									</p>
									<p className="mt-1 flex text-xs leading-5 text-gray-500">
										<a
											href={person.email}
											className="relative truncate hover:underline"
										>
											{person.email}
										</a>
									</p>
								</div>
							</div>
							<div className="flex shrink-0 items-center gap-x-4">
								<div className="hidden sm:flex sm:flex-col sm:items-end">
									<p className="text-sm leading-6 text-gray-900">
										{person.role}
									</p>
									<p className="mt-1 text-xs leading-5 text-gray-500">
										{person.lastSeen}
									</p>
								</div>
								<ChevronRightIcon
									aria-hidden="true"
									className="h-5 w-5 flex-none text-gray-400"
								/>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}
