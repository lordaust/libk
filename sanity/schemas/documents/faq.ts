export default {
	name: 'faq',
	title: 'FAQ',
	type: 'document',
	fields: [
		{
			name: 'question',
			title: 'Spørsmål',
			description:
				'Spørsmålet som vises på FAQ siden og på oss-komponenter på andre sider',
			type: 'string',
			validation: (Rule: any) => Rule.required().error('Spørsmål er påkrevd'),
		},
		{
			name: 'answer',
			title: 'Svar',
			description:
				'Svaret på spørsmålet som stilles. Max 500 tegn for lesbarhet og konsistens.',
			type: 'text',
			validation: (Rule: any) =>
				Rule.required()
					.max(500)
					.error('Svaret må være påkrevd og ikke overstige 500 tegn.'),
		},
		{
			name: 'category',
			title: 'Kategori',
			type: 'string',
			description:
				'Alle spørsmålene listes på FAQ/OSS siden, men de som har en kategori kommer også opp på oss-komponentene på de andre sidene.',
			options: {
				list: [
					{ title: 'Alle', value: 'Alle' },
					{ title: 'Klubbinfo', value: 'Klubben' },
					{ title: 'Medlemskap', value: 'Medlemskap', default: true },
					{ title: 'Treninger og trenere', value: 'Trening' },
					// Add more categories as needed
				],
			},
			validation: (Rule: any) => Rule.required().error('Kategori er påkrevd'),
		},
		{
			name: 'attachments',
			title: 'Vedlegg',
			description:
				'Velg å legge til ett eller flere vedlegg som kan lastes ned under spørsmålet. Nye filer opprettet her havner i kategorien «Annet» og vises ikke på de interne sidene.',
			type: 'array',
			of: [
				{
					type: 'reference', // Select any file from the unified resource library
					to: [{ type: 'internalDocument' }],
					weak: true,
				},
			],
		},
		{
			name: 'order',
			title: 'Sortering',
			type: 'number',
			description: 'Jo høyere tall jo lavere ned på siden',
			validation: (Rule: any) =>
				Rule.required()
					.min(0)
					.integer()
					.error('Sortering er påkrevd og må være et positivt heltall.'),
		},
	],
	preview: {
		select: {
			title: 'question',
			subtitle: 'category',
			order: 'order',
		},
		prepare(selection: any) {
			const { title, subtitle, order } = selection

			// Map categories to icons
			const categoryIcons: { [key: string]: string } = {
				Klubben: '🏠',
				Medlemskap: '📝',
				Trening: '💪',
				alle: '❓',
			}

			// Select the correct icon or fallback to a default one
			const categoryIcon = categoryIcons[subtitle] || '❓'

			return {
				title: `${order !== undefined ? order : 'Ingen'} - ${title}`,
				subtitle: `${categoryIcon} ${subtitle}`,
			}
		},
	},
	orderings: [
		{
			title: 'Sortering (Lav til høy)',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
		{
			title: 'Spørsmål A-Å',
			name: 'questionAsc',
			by: [{ field: 'question', direction: 'asc' }],
		},
		{
			title: 'Spørsmål Å-A',
			name: 'questionDesc',
			by: [{ field: 'question', direction: 'desc' }],
		},
	],
}
