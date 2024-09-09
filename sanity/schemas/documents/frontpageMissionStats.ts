import { defineField, defineType } from 'sanity'

// schemas/frontpageMissionStats.ts
export default defineType({
	name: 'frontpageMissionStats',
	title: 'Mission Stats',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Misjon',
			type: 'string',
			description: 'Overskriften til vår misjon.',
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
					.warning('Undertittelen bør være mellom 50 og 200 tegn.'),
		}),
		defineField({
			name: 'focus',
			title: 'Fokus',
			type: 'text',
			description: 'Vårt fokus med klubben.',
			validation: (Rule: any) =>
				Rule.required()
					.min(10)
					.max(250)
					.warning('Teksten bør være mellom 100 og 250 tegn.'),
		}),
		defineField({
			name: 'history',
			title: 'Historie',
			type: 'text',
			description: 'Vår historie kort oppsummert',
			validation: (Rule: any) =>
				Rule.required()
					.min(10)
					.max(250)
					.warning('Teksten bør være mellom 100 og 250 tegn.'),
		}),
		defineField({
			name: 'statistics',
			title: 'Infografikk/statistikk',
			type: 'array',
			of: [{ type: 'statItem' }],
		}),
	],
})
