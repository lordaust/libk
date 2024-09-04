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
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'answer',
			title: 'Svar',
			description:
				'Svaret på spørsmålet som stilles. Max 255 tegn for lesbarhet og konsistens.',
			type: 'text',
			validation: (Rule: any) => Rule.required(),
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
		},
		{
			name: 'attachments',
			title: 'Vedlegg',
			description:
				'Velg å legge til et eller flere vedlegg som kan lastes ned under spørsmålet.',
			type: 'array',
			of: [
				/*	{
					type: 'reference', // This allows selecting existing attachments
					to: [{ type: 'attachment' }],
				}, */
				{
					type: 'attachment', // This allows uploading new attachments directly
				},
			],
		},
		{
			name: 'order',
			title: 'Sortering',
			type: 'number',
			description: 'Jo høyere tall jo lavere ned på siden',
			validation: (Rule: any) => Rule.required().min(0).integer(),
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
