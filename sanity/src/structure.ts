import { list } from './utils'
import type { StructureResolver } from 'sanity/structure'

import {
	VscServerProcess,
	VscTag,
	VscFlame,
	VscJersey,
	VscWorkspaceUnknown,
	VscFeedback,
	VscMegaphone,
	VscGraphLine,
	VscLaw,
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

			// Section Header: Konfigurasjon
			S.divider(),
			S.listItem()
				.title('Konfigurasjon')
				.icon(() => null),
			list(S, 'Dokumenter og vedlegg', 'attachment').icon(VscServerProcess),
			list(S, 'Nyhetskategorier', 'blogcategory').icon(VscTag),
		])

export default structure
