const CategoryBadge = ({ category }: { category: string }) => {
	let badgeBgColor = 'bg-yellow-100'
	let badgeTextColor = 'text-yellow-600'
	let badgeBorderColor = 'border-yellow-600'
	let badgeButtonColor = 'border-yellow-600'

	if (category == 'Trening') {
		badgeBgColor = 'bg-blue-50'
		badgeTextColor = 'text-blue-600'
		badgeBorderColor = 'border-blue-600'
		badgeButtonColor = 'fill-blue-600'
	} else if (category == 'Medlemskap') {
		badgeBgColor = 'bg-green-100'
		badgeTextColor = 'text-green-600'
		badgeBorderColor = 'border-green-600'
		badgeButtonColor = 'fill-green-600'
	} else if (category == 'Klubben') {
		badgeBgColor = 'bg-pink-100'
		badgeTextColor = 'text-pink-800'
		badgeBorderColor = 'border-pink-600'
		badgeButtonColor = 'fill-pink-600'
	} else {
		badgeBgColor = 'bg-green-100'
		badgeTextColor = 'text-green-600'
		badgeBorderColor = 'border-green-600'
		badgeButtonColor = 'fill-green-600'
	}

	return (
		<span
			className={`inline-flex items-center gap-x-1.5 rounded-full border-2 ${badgeBorderColor} ${badgeBgColor} px-1.5 py-0.5 text-xs font-medium ${badgeTextColor}`}
		>
			<svg
				viewBox="0 0 6 6"
				aria-hidden="true"
				className={`${badgeButtonColor} h-1.5 w-1.5`}
			>
				<circle r={3} cx={3} cy={3} />
			</svg>
			{category}
		</span>
	)
}

export default CategoryBadge
