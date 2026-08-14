import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'internalDocument',
	title: 'Intern ressurs',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tittel',
			description: 'Vises som navnet på ressursen i utlistingen på nettsiden.',
			type: 'string',
			validation: (Rule) =>
				Rule.required()
					.min(3)
					.max(80)
					.error('Tittel er påkrevd, og må være mellom 3 og 80 tegn.'),
		}),
		defineField({
			name: 'category',
			title: 'Kategori',
			description:
				'Bestemmer hvilken side ressursen vises på – «Dokumenter» eller «Media».',
			type: 'string',
			options: {
				list: [
					{ title: 'Dokumenter', value: 'dokumenter' },
					{ title: 'Media', value: 'media' },
				],
				layout: 'radio',
			},
			initialValue: 'dokumenter',
			validation: (Rule) => Rule.required().error('Kategori er påkrevd.'),
		}),
		defineField({
			name: 'description',
			title: 'Beskrivelse',
			description: 'Kort beskrivelse som vises under tittelen. Maks 200 tegn.',
			type: 'text',
			rows: 2,
			validation: (Rule) =>
				Rule.max(200).error('Beskrivelsen kan ikke overstige 200 tegn.'),
		}),
		defineField({
			name: 'sourceType',
			title: 'Type ressurs',
			description:
				'Velg om ressursen er en fil som lastes opp, eller en lenke til en ekstern tjeneste (f.eks. Google Drive eller et skjema).',
			type: 'string',
			options: {
				list: [
					{ title: 'Opplastet fil', value: 'file' },
					{ title: 'Ekstern lenke', value: 'external' },
				],
				layout: 'radio',
			},
			initialValue: 'file',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'file',
			title: 'Fil',
			description:
				'Last opp filen. Du kan trykke på ... for å erstatte eller slette filen senere.',
			type: 'file',
			options: {
				storeOriginalFilename: true,
				accept:
					'application/pdf, image/*, image/svg+xml, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			},
			hidden: ({ parent }) => parent?.sourceType !== 'file',
			validation: (Rule) =>
				Rule.custom((file, context) => {
					const parent = context.parent as { sourceType?: string }
					if (parent?.sourceType === 'file' && !file) {
						return 'Fila er påkrevd når ressursen er en opplastet fil.'
					}
					return true
				}),
		}),
		defineField({
			name: 'externalUrl',
			title: 'Ekstern lenke',
			description: 'Full URL til den eksterne ressursen (må starte med https://).',
			type: 'url',
			hidden: ({ parent }) => parent?.sourceType !== 'external',
			validation: (Rule) =>
				Rule.uri({ scheme: ['http', 'https'] }).custom((url, context) => {
					const parent = context.parent as { sourceType?: string }
					if (parent?.sourceType === 'external' && !url) {
						return 'Lenken er påkrevd når ressursen er en ekstern lenke.'
					}
					return true
				}),
		}),
		defineField({
			name: 'publishedAt',
			title: 'Publiseringsdato',
			description:
				'Brukes til å sortere ressursene (nyeste først) og vises som dato i utlistingen.',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			category: 'category',
			sourceType: 'sourceType',
			originalFilename: 'file.asset.originalFilename',
			externalUrl: 'externalUrl',
			media: 'file.asset',
		},
		prepare({ title, category, sourceType, originalFilename, externalUrl }) {
			const isExternal = sourceType === 'external'
			const extension = isExternal
				? 'lenke'
				: (originalFilename?.split('.').pop()?.toLowerCase() ?? 'fil')

			let emoji = '📎'
			if (isExternal) emoji = '🔗'
			else
				switch (extension) {
					case 'pdf':
						emoji = '📕'
						break
					case 'doc':
					case 'docx':
						emoji = '📄'
						break
					case 'xls':
					case 'xlsx':
					case 'csv':
						emoji = '📊'
						break
					case 'png':
					case 'jpg':
					case 'jpeg':
					case 'gif':
					case 'webp':
						emoji = '🖼️'
						break
					case 'svg':
						emoji = '🎨'
						break
				}

			const categoryLabel = category === 'media' ? 'Media' : 'Dokumenter'

			return {
				title: `${emoji} ${title}`,
				subtitle: `${categoryLabel} · ${isExternal ? externalUrl : extension}`,
			}
		},
	},
	orderings: [
		{
			title: 'Publiseringsdato, nyeste først',
			name: 'publishedDesc',
			by: [{ field: 'publishedAt', direction: 'desc' }],
		},
		{
			title: 'Publiseringsdato, eldste først',
			name: 'publishedAsc',
			by: [{ field: 'publishedAt', direction: 'asc' }],
		},
		{
			title: 'Tittel, A-Å',
			name: 'titleAsc',
			by: [{ field: 'title', direction: 'asc' }],
		},
	],
})
