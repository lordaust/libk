import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'klubbinfoPage',
	title: 'Klubbinfo-side',
	type: 'document',
	fields: [
		defineField({
			name: 'contactLinkText',
			title: 'Knappetekst',
			description: 'Teksten på lenken/knappen til kontaktseksjonen.',
			type: 'string',
			initialValue: 'Kontakt oss i styret',
			validation: (Rule) => Rule.required().error('Knappetekst er påkrevd.'),
		}),
		defineField({
			name: 'contactLinkTarget',
			title: 'Målside',
			description: 'Hvilken side lenken skal peke til.',
			type: 'string',
			options: {
				list: [
					{ title: 'Styret (Kontaktpersoner)', value: '/klubbinfo/styret' },
					{ title: 'Våre lag', value: '/lag' },
					{ title: 'Treninger', value: '/treninger' },
					{ title: 'Nyheter', value: '/nyheter' },
					{ title: 'Partnere', value: '/partnere' },
					{ title: 'OSS / FAQ', value: '/oss' },
					{ title: 'Forside', value: '/' },
				],
				layout: 'dropdown',
			},
			initialValue: '/klubbinfo/styret',
			validation: (Rule) => Rule.required().error('Målside er påkrevd.'),
		}),
	],
	preview: {
		select: {
			title: 'contactLinkText',
			subtitle: 'contactLinkTarget',
		},
		prepare(selection) {
			const { title, subtitle } = selection
			return {
				title: title || 'Klubbinfo-side',
				subtitle: `Kontaktlenke → ${subtitle || '—'}`,
			}
		},
	},
})
