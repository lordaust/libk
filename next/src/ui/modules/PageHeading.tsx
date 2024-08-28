type PageHeadingProps = {
	title: string
	description: string
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
	return (
		<div className="border-b border-gray-200 pb-1">
			<h3 className="text-base font-semibold leading-6 text-gray-900">
				{title}
			</h3>
			<p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
		</div>
	)
}

export default PageHeading
