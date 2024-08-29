// sanity/schemas/documents/team.js
export default {
	name: 'team',
	title: 'Team',
	type: 'document',
	fields: [
		{
			name: 'teamName',
			title: 'Unique Team Name',
			type: 'slug',
			options: {
				source: 'teamTitle', // Correct source reference
				default: 'lagnavn', // Default value if source is empty
				maxLength: 200, // Will be ignored if slugify is set
				slugify: (input: string) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
		},
		{
			name: 'teamTitle',
			title: 'Team Title',
			type: 'string',
			initialValue: 'Lagnavn', // Correctly using initialValue
		},
		{
			name: 'teamCategory',
			title: 'Category',
			type: 'string',
			initialValue: 'Aldersbestemt', // Default value
			options: {
				list: [
					{ title: 'Aldersbestemt', value: 'Aldersbestemt' },
					{ title: 'Herrer', value: 'Herrer' },
					{ title: 'Damer', value: 'Damer' },
				],
				layout: 'radio', // optional: you can display as radio buttons
			},
			validation: (Rule: any) => Rule.required().error('Category is required'),
		},
		{
			name: 'participationDescription',
			title: 'Participation Description',
			type: 'text',
			initialValue: 'Info om hvem som kan bli med kommer', // Correctly using initialValue
		},
		{
			name: 'contactPersonType',
			title: 'Contact Person Type',
			type: 'string',
			initialValue: 'Lagleder', // Correctly using initialValue
		},
		{
			name: 'contactPerson',
			title: 'Contact Person',
			type: 'reference',
			to: [{ type: 'person' }],
			weak: true, // Enables weak references
		},
		{
			name: 'trainingTimes',
			title: 'Training Times',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'membershipCost',
			title: 'Membership Cost',
			type: 'number',
		},
		{
			name: 'licenseCost',
			title: 'License Cost',
			type: 'number',
		},
		{
			name: 'spondCode',
			title: 'Spond Code',
			type: 'string',
			initialValue: '', // Correctly using initialValue
		},
		{
			name: 'teamLink',
			title: 'Team Link/URL',
			type: 'string',
			initialValue: '', // Correctly using initialValue
		},
		{
			name: 'teamLongDescription',
			title: 'Team Long Description',
			type: 'text',
			initialValue: 'Lagbeskrivelse', // Correctly using initialValue
		},
		{
			name: 'teamDescRichText',
			title: 'Team Description RichText',
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
		},
		{
			name: 'sortorderValue',
			title: 'Sortorder value (1-10)',
			type: 'number',
			initialValue: 10, // Correctly using initialValue
		},
		{
			name: 'activeState',
			title: 'Active?',
			type: 'boolean',
			initialValue: false, // Correctly using initialValue
		},
	],
}
