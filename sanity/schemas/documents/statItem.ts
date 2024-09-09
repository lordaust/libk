import { defineField, defineType } from 'sanity'

// schemas/statItem.ts
export default defineType({
	name: 'statItem',
	title: 'Stat Item',
	type: 'object',
	fields: [
		defineField({ name: 'label', title: 'Label', type: 'string' }),
		defineField({ name: 'value', title: 'Value', type: 'number' }),
	],
})
