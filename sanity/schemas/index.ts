// documents
import site from './documents/site'
import page from './documents/page'
import blogPost from './documents/blog.post'
import blogCategory from './documents/blog.category'
import person from './documents/person'
import team from './documents/team'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import heroCentered from './modules/hero.centered'
import heroPostcard from './modules/hero.postcard'
import blogRollup from './modules/blog-rollup'
import faqList from './modules/faq-list'

export const schemaTypes = [
	// documents
	site,
	page,
	blogPost,
	blogCategory,
	person,
	team,

	// objects
	cta,
	link,
	linkList,
	metadata,

	// modules
	blogRollup,
	faqList,
	heroCentered,
	heroPostcard,
]
