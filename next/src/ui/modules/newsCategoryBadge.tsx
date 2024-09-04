import {
	FaNewspaper,
	FaCalendarAlt,
	FaInfoCircle,
	FaUsers,
} from 'react-icons/fa'

const getCategoryIcon = (category: string, color: string) => {
	const iconStyle = { color } // Dynamically set the color
	switch (category.toLowerCase()) {
		case 'aktuellt':
			return <FaNewspaper style={iconStyle} />
		case 'styreinfo':
			return <FaUsers style={iconStyle} />
		case 'info':
			return <FaInfoCircle style={iconStyle} />
		case 'arragement':
			return <FaCalendarAlt style={iconStyle} />
		default:
			return <FaNewspaper style={iconStyle} /> // Default icon if category is not recognized
	}
}

const CategoryBadge = ({ category }: { category: string }) => {
	// Default colors
	let badgeBgColor = 'bg-yellow-100'
	let badgeTextColor = 'text-yellow-600'
	let badgeBorderColor = 'border-yellow-600'

	// Category-specific colors
	if (category.toLowerCase() === 'aktuellt') {
		badgeBgColor = 'bg-blue-50'
		badgeTextColor = 'text-blue-600'
		badgeBorderColor = 'border-blue-600'
	} else if (category.toLowerCase() === 'styreinfo') {
		badgeBgColor = 'bg-green-100'
		badgeTextColor = 'text-green-600'
		badgeBorderColor = 'border-green-600'
	} else if (category.toLowerCase() === 'info') {
		badgeBgColor = 'bg-pink-100'
		badgeTextColor = 'text-pink-800'
		badgeBorderColor = 'border-pink-600'
	} else if (category.toLowerCase() === 'arragement') {
		badgeBgColor = 'bg-purple-100'
		badgeTextColor = 'text-purple-600'
		badgeBorderColor = 'border-purple-600'
	}

	return (
		<span
			className={`inline-flex items-center gap-x-1.5 rounded-full border-2 ${badgeBorderColor} ${badgeBgColor} px-2 py-0.5 text-xs font-medium ${badgeTextColor}`}
		>
			{/* Icon based on category with dynamically set color */}
			{getCategoryIcon(category, badgeTextColor.replace('text-', ''))}

			{/* Category name */}
			<span className="ml-1">{category}</span>
		</span>
	)
}

export default CategoryBadge
