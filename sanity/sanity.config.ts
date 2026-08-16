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

const singletonTypes = ['site', 'klubbinfoPage']

export default defineConfig({
	name: 'libk',
	title: 'ADMIN PANEL (CMS)',

	projectId: 'hkdejsji',
	dataset: 'production',

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
		templates: (templates) => [
			...templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
			{
				id: 'internalDocument-dokumenter',
				title: 'Dokument (intern)',
				schemaType: 'internalDocument',
				value: { category: 'dokumenter' },
			},
			{
				id: 'internalDocument-media',
				title: 'Media (intern)',
				schemaType: 'internalDocument',
				value: { category: 'media' },
			},
			{
				id: 'internalDocument-annet',
				title: 'Vedlegg (annet)',
				schemaType: 'internalDocument',
				value: { category: 'annet' },
			},
		],
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
