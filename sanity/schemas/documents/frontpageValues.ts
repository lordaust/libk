import { defineField, defineType } from 'sanity'

// schemas/frontpageValues.ts
export default defineType({
	name: 'frontpageValues',
	title: 'Frontpage Values',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Verdier',
			type: 'string',
			description: 'Overskriften til våre verdier.',
			validation: (Rule: any) =>
				Rule.required()
					.min(10)
					.max(30)
					.warning('Tittelen bør være mellom 10 og 30 tegn.'),
		}),
		defineField({
			name: 'subtitle',
			title: 'Undertittel',
			type: 'text',
			description: 'Kort beskrivelse som utfyller hovedtittelen.',
			validation: (Rule: any) =>
				Rule.required()
					.min(50)
					.max(100)
					.warning('Undertittelen bør være mellom 50 og 100 tegn.'),
		}),
		defineField({
			name: 'values',
			title: 'Våre verdier',
			type: 'array',
			of: [{ type: 'valueItem' }],
			validation: (Rule: any) =>
				Rule.required()
					.min(1)
					.max(3)
					.error('Du må legge til minst én verdi og maksimalt tre.'),
		}),
	],
})
