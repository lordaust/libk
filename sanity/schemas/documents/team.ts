import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'team',
	title: 'Team',
	type: 'document',
	fields: [
		defineField({
			name: 'teamTitle',
			title: 'Unikt lagnavn',
			description: 'Feltet brukes som navn i menyen, lister og på lagets side',
			type: 'string',
			initialValue: 'Lagnavn',
			validation: (Rule) => Rule.required().error('Lagnavn er påkrevd'),
		}),
		defineField({
			name: 'teamName',
			title: 'Slug/URL',
			description: 'Trykk på knappen for å generere en url som ikke er i bruk',
			type: 'slug',
			options: {
				source: 'teamTitle',
				maxLength: 200,
				slugify: (input: string) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
			validation: (Rule) => Rule.required().error('Slug er påkrevd'),
		}),
		defineField({
			name: 'teamCategory',
			title: 'Kategori',
			description:
				'Kategorien brukes til å gruppere lagene på siden og vise hvilken type lag det er',
			type: 'string',
			initialValue: 'Aldersbestemt',
			options: {
				list: [
					{ title: 'Aldersbestemt', value: 'Aldersbestemt' },
					{ title: 'Herrer', value: 'Herrer' },
					{ title: 'Damer', value: 'Damer' },
				],
				layout: 'radio',
			},
			validation: (Rule) => Rule.required().error('Kategori er påkrevd'),
		}),
		//TODO: Denne han være litt kul å vise frem
		defineField({
			name: 'teamLongDescription',
			title: 'Kort lagbeskrivelse',
			description: 'Skriv gjerne en kort selgende beskrivelse av laget',
			type: 'text',
			initialValue: 'Lagbeskrivelse',
		}),
		defineField({
			name: 'teamDescRichText',
			title: 'Utfyllende lagbeskrivelse riktekst',
			description:
				'Her kan du skrive en lengre beskrivelse av laget og hva som er spesielt med det, eller informasjon dersom det er relevant',
			type: 'array',
			of: [{ type: 'block' }],
			initialValue: [
				{
					_type: 'block',
					children: [
						{
							_type: 'span',
							text: 'Her kommer beskrivelsen.',
						},
					],
				},
			],
		}),
		defineField({
			name: 'teamImage',
			title: 'Lagbilde',
			description:
				'Last opp et bilde for laget som skal vises på lagets detaljside',
			type: 'image',
			options: {
				hotspot: true, // Allows for focal point editing in the Sanity Studio
			},
			// No validation rule, making it optional
		}),
		defineField({
			name: 'participationDescription',
			title: 'Krav til deltagelse',
			description:
				'Skal beskrive hvem som kan være med på laget som alder, kriterier, ferdighetsnivå, etc.',
			type: 'text',
			initialValue: 'Info om hvem som kan bli med kommer',
			validation: (Rule) =>
				Rule.required().error('Krav til deltagelse er påkrevd'),
		}),
		defineField({
			name: 'contactPersonType',
			title: 'Kontaktperson/type',
			description:
				'Hvilken tittel eller rolle har personen på laget? Lagleder, oppmann, trener, materialforvalter, etc.',
			type: 'string',
			initialValue: 'Lagleder',
		}),
		defineField({
			name: 'contactPerson',
			title: 'Kontaktperson',
			description:
				'Velg personen som er ansvarlig for laget og som kan motta henvendelser fra interesserte',
			type: 'reference',
			to: [{ type: 'person' }],
			weak: true,
			validation: (Rule) => Rule.required().error('Kontaktperson er påkrevd'),
		}),
		defineField({
			name: 'trainingTimes',
			title: 'Treningstider',
			description:
				'Registrer de ulike tidene det trenes eller spilles kamper (om det er fast). Anbefalt format: Mandag 18:00-19:30 i Kjennhallen',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'membershipCost',
			title: 'Medlemskap kostnad',
			description: 'Hvor mye koster det å være medlem av klubben/laget?',
			type: 'number',
		}),
		defineField({
			name: 'licenseCost',
			title: 'Treningsvagift kostnad',
			description: 'Hvor mye koster treningsavgiften for å delta på treninger?',
			type: 'number',
		}),
		defineField({
			name: 'spondCode',
			title: 'Spond kode',
			description: 'Koden som brukes for å melde seg på gruppen i Spond',
			type: 'string',
			initialValue: '',
		}),

		defineField({
			name: 'sortorderValue',
			title: 'Sorteringsrekkefølge (1-10)',
			description: 'Brukes til å sortere lagene i menyen og på lagoversikten',
			type: 'number',
			initialValue: 10,
		}),
		defineField({
			name: 'activeState',
			title: 'Aktiv?',
			description:
				'Om laget ikke lenger eksisteres kan det skrus av her slik at det fjernes fra lister og menyer',
			type: 'boolean',
			initialValue: true,
		}),
	],
	preview: {
		select: {
			title: 'teamTitle',
			subtitle: 'teamCategory',
			media: 'contactPerson.photo',
			activeState: 'activeState',
		},
		prepare(selection: any) {
			const { title, subtitle, media, activeState } = selection
			const activeBadge = activeState ? '✅' : '❌'
			return {
				title: `${title} ${activeBadge}`,
				subtitle,
				media,
			}
		},
	},
	orderings: [
		{
			title: 'Sorteringsrekkefølge',
			name: 'sortorderValueAsc',
			by: [{ field: 'sortorderValue', direction: 'asc' }],
		},
		{
			title: 'Lagnavn A-Å',
			name: 'teamTitleAsc',
			by: [{ field: 'teamTitle', direction: 'asc' }],
		},
		{
			title: 'Lagnavn Å-A',
			name: 'teamTitleDesc',
			by: [{ field: 'teamTitle', direction: 'desc' }],
		},
		{
			title: 'Kategori A-Å',
			name: 'teamCategoryAsc',
			by: [{ field: 'teamCategory', direction: 'asc' }],
		},
		{
			title: 'Kategori Å-A',
			name: 'teamCategoryDesc',
			by: [{ field: 'teamCategory', direction: 'desc' }],
		},
	],
})
