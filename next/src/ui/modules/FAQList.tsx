import { BlogPostType } from '@/types/types'

type BlogListProps = {
	posts: BlogPostType[]
	featuredPost: BlogPostType
}

const FAQList: React.FC<BlogListProps> = ({ posts, featuredPost }) => {
	return (
		<div className="bg-white py-10 sm:py-10">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
				<article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
					<time
						dateTime={featuredPost.publishDate}
						className="block text-sm leading-6 text-gray-600"
					>
						{featuredPost.publishDate}
					</time>
					<h2
						id="featured-post"
						className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
					>
						{featuredPost.title}
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-600">
						{featuredPost.description.length > 255
							? `${featuredPost.description.slice(0, 255)}...`
							: featuredPost.description}
					</p>
					<div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
						<div className="flex">
							<a
								href={`/nyheter/${featuredPost.slug.current}`}
								aria-describedby="featured-post"
								className="text-sm font-semibold leading-6 text-indigo-600"
							>
								Les mer <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
						<div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
							<a
								href={`/klubbinfo/`}
								className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
							>
								<img
									alt={featuredPost.author.photo.caption}
									src={featuredPost.author.photoUrl}
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
							<article key={post._id} className="py-12">
								<div className="group relative max-w-xl">
									<time
										dateTime={post.publishDate}
										className="block text-sm leading-6 text-gray-600"
									>
										{post.publishDate}
									</time>
									<h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
										<a href={`/nyheter/${post.slug.current}`}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h2>
									<p className="mt-4 text-sm leading-6 text-gray-600">
										{post.description.length > 255
											? `${post.description.slice(0, 255)}...`
											: post.description}
									</p>

									<div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
										<div className="flex">
											<a
												href={`/nyheter/${post.title}`}
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
										href={`/klubbinfo/`}
										className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
									>
										<img
											alt={post.author.photo.caption}
											src={post.author.photoUrl}
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

export default FAQList
