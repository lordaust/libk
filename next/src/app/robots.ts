import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			// Unlisted internal resources – keep out of search engines.
			// Page-level `robots: { index: false }` metadata is the real
			// guarantee; this is an extra hint for well-behaved crawlers.
			disallow: '/intern',
		},
	}
}
