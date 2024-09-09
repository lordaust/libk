import { defineField, defineType } from 'sanity'

// schemas/valueItem.ts
export default defineType({
	name: 'valueItem',
	title: 'Verdielement',
	type: 'object',
	fields: [
		defineField({ name: 'name', title: 'Tittel', type: 'string' }),
		defineField({ name: 'description', title: 'Beskrivelse', type: 'text' }),
	],
})
