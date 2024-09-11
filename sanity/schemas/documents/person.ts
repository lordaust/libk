export default {
	name: 'person',
	title: 'Person',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Fullt navn',
			description:
				'Navnet som vises på siden for nyheter, lagansvarlige eller klubbinfo/styremedlemmer',
			type: 'string',
			initialValue: 'Navn',
			validation: (Rule: any) => Rule.required().error('Navn er påkrevd'),
		},
		{
			name: 'email',
			title: 'Epost',
			description:
				'Eposten man kan kontakte vedkommende på om man har spørsmål',
			type: 'email',
			initialValue: 'person@epost.com',
			validation: (Rule: any) =>
				Rule.required().error(
					'Epost er påkrevd. Bruk test@test.com om du ikke har det.',
				),
		},
		{
			name: 'phone',
			title: 'Telefonnummer',
			description: 'Telefonnummeret man kan konktaktes',
			type: 'number',
			validation: (Rule: any) =>
				Rule.required().error(
					'Telefonnummer er påkrevd. Bruk 00000000 om du ikke har det.',
				),
		},
		{
			name: 'role',
			title: 'Rolle i klubben',
			description:
				'F.eks. trener, lagleder, styremedlem, medlem, kontaktperson, etc.',
			type: 'string',
			validation: (Rule: any) => Rule.required().error('Rolle er påkrevd'),
		},
		{
			name: 'linkedIn',
			title: 'LinkedIn profil',
			description:
				'Mest for styremedlemmer for å virke proffe med LinkedIn profil dersom man har det. Bygger tillit.',
			type: 'url',
			initialValue: '',
		},
		{
			name: 'description',
			title: 'kort beskrivelse',
			description: 'Brukes på lag- og styresider for å beskrive personen',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'photo',
			title: 'Bilde ',
			description:
				'Last opp ellervelg bilde. Optimalt format er .png med 219x219 i oppløsning.',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Undertittel / Alt tekst',
					description:
						'Brukes for å beskrive bildet for skjermlesere og søkemotorer',
					initialValue: 'Profilbilde av personen',
				},
			],
			validation: (Rule: any) =>
				Rule.required().error(
					'Bilde er påkrevd for styremedlemmer. Bruk placeholderbilde "bilde mangler" fra galleriet om du ikke har et.',
				),
		},
		{
			name: 'boardMember',
			title: 'I styret?',
			description:
				'Brukes for å filtrere bort andre medlemmer på ledelsen-sidene, og tilganger',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'sortorderValue',
			title: 'Sorteringsverdi (1-10 -> lav er bra)',
			description: 'Brukes til å sortere personene på lag- og styresidene',
			type: 'number',
			initialValue: 10,
		},
		{
			name: 'activeState',
			title: 'Aktiv?',
			description:
				'Om personen ikke lenger er aktiv i klubben kan det skrus av her slik at det fjernes fra lister og menyer',
			type: 'boolean',
			initialValue: true,
		},
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'role',
			media: 'photo',
			boardMember: 'boardMember',
			activeState: 'activeState',
		},
		prepare(selection: any) {
			const { title, subtitle, media, boardMember, activeState } = selection
			const boardBadge = boardMember ? '🛠️' : ''
			const activeBadge = activeState ? '✅' : '❌'
			return {
				title: `${title} ${activeBadge}`,
				subtitle: `${boardBadge} ${subtitle}`,
				media,
			}
		},
	},
	orderings: [
		{
			title: 'Sorteringsverdi',
			name: 'sortorderValueAsc',
			by: [{ field: 'sortorderValue', direction: 'asc' }],
		},
		{
			title: 'Navn A-Å',
			name: 'nameAsc',
			by: [{ field: 'name', direction: 'asc' }],
		},
		{
			title: 'Navn Å-A',
			name: 'nameDesc',
			by: [{ field: 'name', direction: 'desc' }],
		},
		{
			title: 'Rolle A-Å',
			name: 'roleAsc',
			by: [{ field: 'role', direction: 'asc' }],
		},
		{
			title: 'Rolle Å-A',
			name: 'roleDesc',
			by: [{ field: 'role', direction: 'desc' }],
		},
	],
}
