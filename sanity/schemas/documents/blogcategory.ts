import { defineField, defineType } from 'sanity'
import { VscTag } from 'react-icons/vsc'

export default defineType({
	name: 'blogcategory',
	title: 'Blog category',
	type: 'document',
	icon: VscTag,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Kategoriens tittel',
			validation: (Rule) =>
				Rule.required()
					.min(3)
					.max(50)
					.error('Tittel er påkrevd, og må være mellom 3 og 50 tegn.'),
		}),
	],
})
