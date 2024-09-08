import fetchNewsData from '@/lib/fetchNewsData'
import PageHeading from '@/ui/modules/PageHeading'
import FAQList from '@/ui/modules/FAQList'
import Separator from '@/ui/modules/Separator'
import { BlogPostType } from '@/types/types'

export default async function nyheter() {
	const BlogData: BlogPostType[] = await fetchNewsData()
	const featuredPost = BlogData[0]
	const posts = BlogData.slice(1)

	//console.log(featuredPost)
	//console.log(posts)

	return (
		<div>
			{/* 			<PageHeading
				title="Nyheter"
				description="Her finner du våre nyhetssaker. Følg med for oppdateringer!"
			/> */}
			<FAQList featuredPost={featuredPost} posts={posts} />
			<Separator />
		</div>
	)
}
