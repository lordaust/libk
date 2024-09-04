import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'blogpost',
	title: 'Blog post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tittel',
			description: 'Brukes som overskrift på siden',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Url/Slug',
			description: 'Trykk på knappen for å generere en url som ikke er i bruk',
			type: 'slug',
			options: {
				source: 'title',
				slugify: (input: string) =>
					input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.replace(/[^a-z0-9-]/g, '')
						.slice(0, 200),
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Ingress',
			description:
				'Max 255 tegn som synes i nyhetsfeeden og på toppen av siden',
			type: 'text',
		}),
		defineField({
			name: 'body',
			title: 'Innhold',
			description: 'Kommer under ingress på detaljsiden',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					fields: [
						defineField({
							name: 'alt',
							title: 'Alt Text',
							type: 'string',
						}),
						defineField({
							name: 'caption',
							title: 'Caption',
							type: 'text',
							rows: 2,
						}),
					],
				},
			],
		}),
		defineField({
			name: 'categories',
			title: 'Nyhetskategori',
			description: 'Kategoriene markeres med en tag i utlistinger',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'blogcategory' }],
					weak: true,
				},
			],
		}),
		{
			name: 'attachments',
			title: 'Vedlegg',
			description:
				'Velg å legge til et eller flere vedlegg som kan lastes ned under posten.',
			type: 'array',
			of: [
				{
					type: 'reference', // This allows selecting existing attachments
					to: [{ type: 'attachment' }],
				},
			],
		},
		defineField({
			name: 'publishDate',
			title: 'Publisert dato',
			description: 'Datoen vises som først publisert dato på siden.',
			type: 'date',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'author',
			title: 'Skrevet av',
			description: 'Velg hvem som settes til forfatter av innlegget',
			type: 'reference',
			to: [{ type: 'person' }],
			weak: true,
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'publishDate',
			categories: 'categories.0.title',
			author: 'author.name',
			isDraft: '_id',
		},
		prepare(selection) {
			const { title, subtitle, categories, author, isDraft } = selection
			const date = new Date(subtitle).toLocaleDateString('nb-NO', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})

			// Map categories to icons
			const categoryIcons: { [key: string]: string } = {
				Aktuellt: 'ℹ️',
				Info: '👥',
				Arrangement: '💪',
				Styreinfo: '🏛️', // Added emoji for "Styreinfo"
			}

			// Select the correct icon or fallback to a default one
			const categoryIcon = categoryIcons[categories] || '❓'

			// Determine draft status
			const statusIcon = isDraft.startsWith('drafts.') ? '📝' : '✅'

			return {
				title: `${statusIcon} ${categoryIcon} ${title}`,
				subtitle: `${date} - ${author} - ${categories}`,
			}
		},
	},
	orderings: [
		{
			title: 'Publiseringsdato (Nyeste først)',
			name: 'publishDateDesc',
			by: [{ field: 'publishDate', direction: 'desc' }],
		},
		{
			title: 'Publiseringsdato (Eldste først)',
			name: 'publishDateAsc',
			by: [{ field: 'publishDate', direction: 'asc' }],
		},
		{
			title: 'Tittel A-Å',
			name: 'titleAsc',
			by: [{ field: 'title', direction: 'asc' }],
		},
		{
			title: 'Tittel Å-A',
			name: 'titleDesc',
			by: [{ field: 'title', direction: 'desc' }],
		},
	],
})
