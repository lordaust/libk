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
	console.log(values)

	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0">
				{/* Title from Sanity */}
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{title}
				</h2>

				{/* Subtitle from Sanity */}
				<p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
			</div>

			{/* Values from Sanity */}
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
