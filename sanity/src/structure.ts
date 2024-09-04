import { list, singleton } from './utils'
import type { StructureResolver } from 'sanity/structure'

import {
	VscServerProcess,
	VscTag,
	VscCopy,
	VscFlame,
	VscJersey,
	VscWorkspaceUnknown,
	VscFeedback,
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

			S.divider(),
			S.listItem()
				.title('Fast innhold')
				.icon(() => null), // Remove icon
			list(S, 'Enkeltsider', 'page').icon(VscCopy),

			// Section Header: Konfigurasjon
			S.divider(),
			S.listItem()
				.title('Konfigurasjon')
				.icon(() => null), // Remove icon

			list(S, 'Dokumenter og vedlegg', 'attachment').icon(VscServerProcess),
			list(S, 'Nyhetskategorier', 'blogcategory').icon(VscTag),
			/*			
			singleton(S, 'Meny (ikke i bruk)', 'site').icon(VscServerProcess),
			S.divider(),*/
		])

export default structure
