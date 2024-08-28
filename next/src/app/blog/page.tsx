const featuredPost = {
	id: 1,
	title: 'Nye treningstider sesongen 24/25',
	href: '#',
	description:
		'Hei! Da er vi klare for en ny sesong med innebandy! De nye treninstidene for Kjennhallen ligger vedlagt og er i stor grad basert på ønsker fra de ulike lagenhetene.',
	date: 'Aug 14, 2024',
	datetime: '2024-08-14',
	author: {
		name: 'Christian Hansen',
		role: 'Nestleder',
		href: '#',
		imageUrl:
			'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
}

const posts = [
	{
		id: 4,
		title: 'Referat fra første styremøte i nytt styre 2024',
		href: '#',
		description:
			'Notater fra styremøte fra onsdag 10.april 2024 er nå tilgjengelig under klubbinfo.',
		date: 'Apr 13, 2024',
		datetime: '2024-04-13',
		category: { title: 'Styremøte', href: '#' },
		author: {
			name: 'Åsa Holtsmark',
			role: 'Styreleder',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		id: 2,
		title: 'Klubbkveld med Pureplay',
		href: '#',
		description:
			'26 Februar fra 17:00-19:30 arrangerer Pureplay klubbkveld i Kjennhallen. Gjør et kupp på innebandyutstyr og få gode råd om sko, køller og klær.',
		date: 'Mar 16, 2020',
		datetime: '2024-02-19',
		category: { title: 'Klubbkveld', href: '#' },
		author: {
			name: 'Christian Hasen',
			role: 'Nestleder',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		id: 3,
		title: 'Rekrutteringsdag på Triaden',
		href: '#',
		description:
			'Lørdag 26. August er det rekrutteringsdag på Triaden i samarbeid med AYA sport. Vi arrangerer konkurranser med premier. Les mer her....',
		date: 'Mar 16, 2020',
		datetime: '2023-12-16',
		category: { title: 'Marketing', href: '#' },
		author: {
			name: 'Alex Andersen',
			role: 'Teknisk geni',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
]

export default function Blog() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
				<article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
					<time
						dateTime={featuredPost.datetime}
						className="block text-sm leading-6 text-gray-600"
					>
						{featuredPost.date}
					</time>
					<h2
						id="featured-post"
						className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
					>
						{featuredPost.title}
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-600">
						{featuredPost.description}
					</p>
					<div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
						<div className="flex">
							<a
								href={featuredPost.href}
								aria-describedby="featured-post"
								className="text-sm font-semibold leading-6 text-indigo-600"
							>
								Les mer <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
						<div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
							<a
								href={featuredPost.author.href}
								className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
							>
								<img
									alt=""
									src={featuredPost.author.imageUrl}
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
								/>
								{featuredPost.author.name}
							</a>
						</div>
					</div>
				</article>
				<div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
					<div className="-my-12 divide-y divide-gray-900/10">
						{posts.map((post) => (
							<article key={post.id} className="py-12">
								<div className="group relative max-w-xl">
									<time
										dateTime={post.datetime}
										className="block text-sm leading-6 text-gray-600"
									>
										{post.date}
									</time>
									<h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
										<a href={post.href}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h2>
									<p className="mt-4 text-sm leading-6 text-gray-600">
										{post.description}
									</p>

									<div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
										<div className="flex">
											<a
												href={featuredPost.href}
												aria-describedby="featured-post"
												className="text-sm font-semibold leading-6 text-indigo-600"
											>
												Les mer <span aria-hidden="true">&rarr;</span>
											</a>
										</div>
									</div>
								</div>
								<div className="mt-4 flex">
									<a
										href={post.author.href}
										className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
									>
										<img
											alt=""
											src={post.author.imageUrl}
											className="h-6 w-6 flex-none rounded-full bg-gray-50"
										/>
										{post.author.name}
									</a>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
