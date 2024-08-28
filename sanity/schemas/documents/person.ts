// sanity/schemas/documents/person.js
export default {
	name: 'person',
	title: 'Person',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			initialValue: 'Navn',
		},
		{
			name: 'email',
			title: 'Email',
			type: 'email',
			initialValue: 'person@epost.com',
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'number',
			initialValue: 987654321,
		},
		{
			name: 'role',
			title: 'Role',
			type: 'string',
			initialValue: 'Medlem/Styremedlem/Trener/Kontaktperson',
		},
		{
			name: 'linkedIn',
			title: 'LinkedIn',
			type: 'url',
			initialValue: '',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'photo',
			title: 'Photo',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					initialValue: 'Profilbilde av personen',
				},
			],
		},
		{
			name: 'boardMember',
			title: 'I styret?',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'sortorderValue',
			title: 'Sortorder value (1-10)',
			type: 'number',
			initialValue: 10,
		},
		{
			name: 'activeState',
			title: 'Active?',
			type: 'boolean',
			initialValue: true,
		},
	],
}
