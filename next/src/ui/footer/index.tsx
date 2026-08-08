import navigation from './footer_data'

export default async function Footer() {
	const title = 'Lørenskog Innebandyklubb'

	return (
		<footer className="mt-8 border-t-4 border-brand bg-navy">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-20 lg:px-8">
				<nav
					className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
					aria-label="Footer"
				>
					{navigation.main.map((item) => (
						<div key={item.name} className="pb-6">
							<a
								href={item.href}
								className="text-sm leading-6 text-navy-200 transition-colors hover:text-white"
							>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-8">
					{navigation.social.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-navy-300 transition-colors hover:text-brand-300"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<p className="mt-10 text-center text-xs leading-5 text-navy-300">
					&copy; {new Date().getFullYear()} {title}
				</p>
			</div>
		</footer>
	)
}
