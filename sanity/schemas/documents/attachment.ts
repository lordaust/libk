import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'attachment',
	title: 'Attachment',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Dokumentets tittel',
			description: 'Dette vises i utlistinger og nedtrekkslister',
			type: 'string',
			validation: (Rule) =>
				Rule.required()
					.min(3)
					.max(80)
					.error('Tittel er påkrevd, og må være mellom 3 og 80 tegn.'),
		}),
		defineField({
			name: 'description',
			title: 'Beskriv innholdet i filen',
			description:
				'Beskrivelsen vises kun i Sanity Studio når man ser på dokumentet, men kan brukes til å beskrive innholdet på nettsiden om vi vil. Max 200 tegn',
			type: 'text',
			validation: (Rule) =>
				Rule.max(200).error('Beskrivelsen kan ikke overstige 200 tegn.'),
		}),
		defineField({
			name: 'file',
			title: 'Fila',
			description:
				'Merk at du kan trykke på ... for å redigere, slette eller erstatte filen',
			type: 'file',
			options: {
				storeOriginalFilename: true,
				accept:
					'application/pdf, image/*, application/vnd.ms-excel, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Specify allowed file types
			},
			validation: (Rule) => Rule.required().error('Fila er påkrevd.'),
		}),
	],
	preview: {
		select: {
			title: 'title',
			description: 'description',
			originalFilename: 'file.asset.originalFilename',
			media: 'file.asset',
		},
		prepare({ title, description, originalFilename, media }) {
			const extension = originalFilename?.split('.').pop()?.toLowerCase()
			let emoji = '📄' // Default emoji

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
				case 'gif':
				case 'webp':
				case 'jpg':
					emoji = '🖼️'
					break
				default:
					emoji = '📎' // Fallback for unknown types
			}

			return {
				title: `${emoji} ${title || originalFilename} (${extension})`, // Add emoji and extension to title
				subtitle: description || originalFilename,
				media,
			}
		},
	},
	orderings: [
		{
			title: 'Title, A-Z',
			name: 'titleAsc',
			by: [{ field: 'title', direction: 'asc' }],
		},
		{
			title: 'Title, Z-A',
			name: 'titleDesc',
			by: [{ field: 'title', direction: 'desc' }],
		},
		{
			title: 'Creation Date, Newest First',
			name: 'createdDesc',
			by: [{ field: '_createdAt', direction: 'desc' }],
		},
		{
			title: 'Creation Date, Oldest First',
			name: 'createdAsc',
			by: [{ field: '_createdAt', direction: 'asc' }],
		},
	],
})
