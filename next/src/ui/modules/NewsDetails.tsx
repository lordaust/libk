import { BlogPostType } from '@/types/types'
import React from 'react'
import { PortableText } from '@portabletext/react'
import { customComponents } from '@/ui/modules/customComponents'
import AttachmentList from '@/ui/modules/AttachmentList'
import Separator from '@/ui/modules/Separator'
import { format } from 'date-fns'
import { nb } from 'date-fns/locale'
import NewsCategoryBadge from '@/ui/modules/newsCategoryBadge'

type NewsDetailsProps = {
	news: BlogPostType
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ news }) => {
	if (!news) {
		return <div>Loading...</div>
	}
	console.log(news?.categories)

	let categoryTitle = 'No category'

	if (news?.categories) {
		categoryTitle = news?.categories[0].title
	}

	const formattedDate = format(
		new Date(news.publishDate),
		'EEEE dd MMMM yyyy',
		{ locale: nb },
	)

	return (
		<div className="bg-white px-2 py-5 lg:px-8">
			<div className="max-w-3xl text-base leading-7 text-gray-700">
				{/* Flex container to align title and category badge inline */}
				<div className="flex items-center">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{news.title}
					</h1>
					{/* Margin to space the badge from the title */}
					<div className="ml-2">
						<NewsCategoryBadge category={categoryTitle} />
					</div>
				</div>
				<p className="mt-6 text-xl leading-8">{news.description}</p>
				<div className="mt-10 max-w-2xl">
					<p>
						<PortableText value={news.body} components={customComponents} />
					</p>
				</div>
				<div className="mr-2 border-gray-200 pl-4 text-sm font-medium capitalize text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">
					<strong>Publisert: </strong>
					<time
						className="ml-4 border-l border-gray-200 pl-4 capitalize text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
						dateTime={formattedDate}
					>
						{formattedDate}
					</time>
					<div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
						<a
							href={`/klubbinfo/`}
							className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
						>
							<img
								alt={news.author.photo.caption}
								src={news.author.photoUrl}
								className="h-6 w-6 flex-none rounded-full bg-gray-50"
							/>
							{news.author.name}
						</a>
					</div>
				</div>
				<div>
					{news.attachments && news.attachments.length > 0 && (
						<>
							<Separator />
							<AttachmentList attachments={news.attachments} />
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default NewsDetails
