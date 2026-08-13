import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		// Falls back to the hardcoded project id from sanity.config.ts so a
		// standalone deploy (where NEXT_PUBLIC_SANITY_PROJECT_ID may be unset)
		// still builds correctly.
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hkdejsji',
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	},
})
