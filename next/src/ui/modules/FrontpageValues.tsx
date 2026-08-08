import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { fetchFrontpageValues } from '@/lib/fetchFrontpageValues'

// Define the types to ensure correct data from Sanity
type ValueItem = {
	name: string
	description: string
}

type FrontpageValuesData = {
	title: string
	subtitle: string
	values: ValueItem[]
}

const FrontpageValues = async () => {
	// Fetch the data from Sanity
	const frontpageValuesData: FrontpageValuesData = await fetchFrontpageValues()

	// Destructure the fetched data
	const { title, subtitle, values } = frontpageValuesData
	//console.log(values)

	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0">
				<span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
					<span className="h-px w-8 bg-brand" aria-hidden="true" />
					Verdier
				</span>
				{/* Title from Sanity */}
				<h2 className="font-display text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
					{title}
				</h2>

				{/* Subtitle from Sanity */}
				<p className="mt-6 text-lg leading-8 text-navy-600">{subtitle}</p>
			</div>

			{/* Values from Sanity */}
			<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{values.map((value) => (
					<div
						key={value.name}
						className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover"
					>
						<span
							className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
							aria-hidden="true"
						/>
						<span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100">
							<CheckBadgeIcon
								className="h-6 w-6 text-brand"
								aria-hidden="true"
							/>
						</span>
						<dt className="font-display text-xl font-bold uppercase tracking-wide text-navy">
							{value.name}
						</dt>
						<dd className="mt-2 text-navy-600">{value.description}</dd>
					</div>
				))}
			</dl>
		</div>
	)
}

export default FrontpageValues
