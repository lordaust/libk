import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import defaultDocumentNode from './src/defaultDocumentNode'
import structure from './src/structure'
import { sharedNotesNotepadPlugin } from 'sanity-plugin-shared-notes'
import { draftReviewPluginV3 } from 'sanity-plugin-draft-review-v3'

import { lighthousePlugin } from 'sanity-lighthouse-plugin'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const singletonTypes = ['site']

export default defineConfig({
	name: 'libk',
	title: 'ADMIN PANEL (CMS)',

	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

	plugins: [
		structureTool({ defaultDocumentNode, structure }),
		dashboardTool({ widgets: [projectInfoWidget(), projectUsersWidget()] }),
		visionTool(),
		sharedNotesNotepadPlugin(), //TODO: Denne er muligå vise
		draftReviewPluginV3({}), //TODO: Denne er mulig å vise
		lighthousePlugin(), //TODO: Denne er mulig å vise
	],

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) =>
							action &&
							['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},
})
