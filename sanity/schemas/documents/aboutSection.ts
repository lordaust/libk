import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'aboutSection',
	title: 'Om oss-seksjon',
	type: 'document',
	fields: [
		defineField({
			name: 'header',
			title: 'Overskrift',
			description: 'Vises som overskrift på seksjonen (f.eks. «Hvordan bli medlem»).',
			type: 'string',
			validation: (Rule) => Rule.required().error('Overskrift er påkrevd.'),
		}),
		defineField({
			name: 'subtitle',
			title: 'Undertittel',
			description:
				'Valgfri. Vises kun dersom den har innhold – en kort utdypning under overskriften.',
			type: 'string',
		}),
		defineField({
			name: 'content',
			title: 'Innhold',
			description:
				'Standard tekstinnhold med formatering og bilder – samme redigering som «Nyheter → Innhold».',
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
							validation: (Rule) =>
								Rule.required().error('Alt tekst er påkrevd for bilder.'),
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
			validation: (Rule) => Rule.required().error('Innhold er påkrevd.'),
		}),
		defineField({
			name: 'contactPerson',
			title: 'Kontaktperson',
			description:
				'Valgfri. Vises kun dersom den er valgt – knytter en person til seksjonen.',
			type: 'reference',
			to: [{ type: 'person' }],
			weak: true,
		}),
		defineField({
			name: 'order',
			title: 'Rekkefølge',
			description:
				'Bestemmer rekkefølgen seksjonene vises i på siden (lavt tall vises først).',
			type: 'number',
			initialValue: 10,
			validation: (Rule) => Rule.required().min(0),
		}),
	],
	orderings: [
		{
			title: 'Rekkefølge (lav-høy)',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
	],
	preview: {
		select: {
			title: 'header',
			order: 'order',
			subtitle: 'subtitle',
		},
		prepare(selection) {
			const { title, order, subtitle } = selection
			return {
				title: `${order != null ? `${order}. ` : ''}${title}`,
				subtitle: subtitle || 'Om oss-seksjon',
			}
		},
	},
})
