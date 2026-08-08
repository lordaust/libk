import { fetchFrontpageMissionStats } from '@/lib/fetchFrontpageMissionStats'
import CountUp from './CountUp'

// Define the types to ensure correct data from Sanity
type StatItem = {
	label: string
	value: string | number
}

type FrontpageMissionStatsData = {
	title: string
	subtitle: string
	focus: string
	history: string
	statistics: StatItem[]
}

const FrontpageMissionStats = async () => {
	// Fetch the data from Sanity
	const frontpageMissionStatsData: FrontpageMissionStatsData =
		await fetchFrontpageMissionStats()

	// Destructure the fetched data
	const { title, subtitle, focus, history, statistics } =
		frontpageMissionStatsData

	return (
		<div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				{/* Title from Sanity */}
				<h2 className="font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
					{title}
				</h2>

				<div className="mt-6 flex flex-col gap-x-10 gap-y-16 lg:flex-row">
					<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
						{/* Subtitle from Sanity */}
						<p className="text-xl leading-8 text-navy-600">{subtitle}</p>

						<div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
							{/* Focus from Sanity */}
							<p>{focus}</p>

							{/* History from Sanity */}
							<p className="mt-10">{history}</p>
						</div>
					</div>

					<div className="lg:flex lg:flex-auto lg:justify-center">
						{/* Statistics from Sanity */}
						<dl className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:w-80 lg:grid-cols-1">
							{statistics.map((stat) => (
								<div
									key={stat.label}
									className="flex flex-col-reverse gap-y-2 rounded-2xl border border-navy-100 bg-navy-50/60 p-5 transition-colors hover:border-royal/40 sm:p-6"
								>
									<dt className="text-sm font-medium leading-6 text-navy-500 sm:text-base">
										{stat.label}
									</dt>
									<dd className="font-display text-4xl font-bold tracking-tight text-brand sm:text-5xl">
										<CountUp value={stat.value} />
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
