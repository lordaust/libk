import { defineField, defineType } from 'sanity'

// schemas/statItem.ts
export default defineType({
	name: 'statItem',
	title: 'Stat Item',
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			title: 'Label',
			type: 'string',
			validation: (Rule) =>
				Rule.required()
					.min(3)
					.max(50)
					.error('Label er påkrevd og må være mellom 3 og 50 tegn.'),
		}),
		defineField({
			name: 'value',
			title: 'Value',
			type: 'number',
			validation: (Rule) =>
				Rule.required()
					.min(0)
					.error('Value er påkrevd og må være et positivt tall.'),
		}),
	],
})
