import { list } from './utils'
import type { StructureResolver } from 'sanity/structure'

import {
	VscTag,
	VscFlame,
	VscJersey,
	VscWorkspaceUnknown,
	VscFeedback,
	VscMegaphone,
	VscGraphLine,
	VscLaw,
	VscFolderOpened,
	VscFileMedia,
	VscFiles,
} from 'react-icons/vsc'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Innhold')
		.items([
			// Section Header: Innholdstyper
			S.divider(),
			S.listItem()
				.title('Innholdstyper')
				.icon(() => null), // Remove icon
			list(S, 'Nyheter', 'blogpost').icon(VscFlame),
			list(S, 'Lag', 'team').icon(VscJersey),
			list(S, 'Personer', 'person').icon(VscFeedback),
			list(S, 'Ofte stilte spørsmål', 'faq').icon(VscWorkspaceUnknown),

			// "Fast innhold" with Singletons listed directly
			S.divider(),
			S.listItem()
				.title('Fast innhold')
				.icon(() => null), // Remove icon
			S.listItem()
				.title('Forsidebanner med bilder')
				.icon(VscMegaphone)
				.child(
					S.document()
						.schemaType('frontpageHeroBanner')
						.documentId('frontpageHeroBanner'),
				),
			S.listItem()
				.title('Forside Mission og statistikk')
				.icon(VscGraphLine)
				.child(
					S.document()
						.schemaType('frontpageMissionStats')
						.documentId('frontpageMissionStats'),
				),
			S.listItem()
				.title('Forside Verdier')
				.icon(VscLaw)
				.child(
					S.document()
						.schemaType('frontpageValues')
						.documentId('frontpageValues'),
				),

			// Section Header: Interne ressurser
			S.divider(),
			S.listItem()
				.title('Interne ressurser')
				.icon(() => null),
			S.listItem()
				.title('Dokumenter (intern)')
				.icon(VscFolderOpened)
				.child(
					S.documentList()
						.title('Dokumenter (intern)')
						.schemaType('internalDocument')
						.filter('_type == "internalDocument" && category == "dokumenter"')
						.defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
						.initialValueTemplates([
							S.initialValueTemplateItem('internalDocument-dokumenter'),
						]),
				),
			S.listItem()
				.title('Media (intern)')
				.icon(VscFileMedia)
				.child(
					S.documentList()
						.title('Media (intern)')
						.schemaType('internalDocument')
						.filter('_type == "internalDocument" && category == "media"')
						.defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
						.initialValueTemplates([
							S.initialValueTemplateItem('internalDocument-media'),
						]),
				),
			S.listItem()
				.title('Andre filer (vedlegg)')
				.icon(VscFiles)
				.child(
					S.documentList()
						.title('Andre filer (vedlegg)')
						.schemaType('internalDocument')
						.filter('_type == "internalDocument" && category == "annet"')
						.defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
						.initialValueTemplates([
							S.initialValueTemplateItem('internalDocument-annet'),
						]),
				),

			// Section Header: Konfigurasjon
			S.divider(),
			S.listItem()
				.title('Konfigurasjon')
				.icon(() => null),
			list(S, 'Nyhetskategorier', 'blogcategory').icon(VscTag),
		])

export default structure
