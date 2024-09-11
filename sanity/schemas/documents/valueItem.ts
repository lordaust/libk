import { defineField, defineType } from 'sanity'

// schemas/valueItem.ts
export default defineType({
	name: 'valueItem',
	title: 'Verdielement',
	type: 'object',
	fields: [
		defineField({
			name: 'name',
			title: 'Tittel',
			type: 'string',
			validation: (Rule) =>
				Rule.required()
					.min(3)
					.max(50)
					.error('Tittel er påkrevd og må være mellom 3 og 50 tegn.'),
		}),
		defineField({
			name: 'description',
			title: 'Beskrivelse',
			type: 'text',
			validation: (Rule) =>
				Rule.required()
					.max(500)
					.error('Beskrivelse er påkrevd og kan ikke overstige 500 tegn.'),
		}),
	],
})
