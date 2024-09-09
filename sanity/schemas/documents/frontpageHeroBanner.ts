import { defineField, defineType } from 'sanity'

// schemas/frontpageHero.ts
export default defineType({
	name: 'frontpageHeroBanner',
	title: 'Forsidebanner med bilder',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tittel',
			type: 'string',
			description: 'Hovedoverskriften på forsiden. Hold den kort og tydelig.',
			validation: (Rule: any) =>
				Rule.required()
					.min(10)
					.max(50)
					.warning('Tittelen bør være mellom 10 og 50 tegn.'),
		}),
		defineField({
			name: 'subtitle',
			title: 'Undertittel',
			type: 'string',
			description: 'Kort beskrivelse som utfyller hovedtittelen.',
			validation: (Rule: any) =>
				Rule.required()
					.min(20)
					.max(100)
					.warning('Undertittelen bør være mellom 20 og 100 tegn.'),
		}),
		defineField({
			name: 'ctaButtonLabel',
			title: 'Bli medlem (ikke i bruk ennå)',
			type: 'string',
			description: 'Teksten på handlingsknappen, for eksempel "Bli medlem".',
			validation: (Rule: any) =>
				Rule.required()
					.min(3)
					.max(20)
					.warning('Knappeetiketten bør være mellom 3 og 20 tegn.'),
		}),
		defineField({
			name: 'images',
			title: 'Bilder',
			type: 'array',
			description:
				'Opplast inntil 5 bilder som vises på forsiden. Ideell størrelse er 400*528 (breddexhøyde).',
			of: [{ type: 'image', options: { hotspot: true } }],
			validation: (Rule: any) =>
				Rule.required()
					.min(5)
					.max(5)
					.error('Du må laste opp nøyaktig 5 bilder.'),
		}),
		defineField({
			name: 'altText',
			title: 'Alt-tekst for bilder',
			type: 'string',
			description: 'Beskrivende tekst for bildene, for bedre tilgjengelighet.',
			validation: (Rule: any) =>
				Rule.required()
					.min(5)
					.max(100)
					.warning('Alt-teksten bør være mellom 5 og 100 tegn.'),
		}),
	],
})
