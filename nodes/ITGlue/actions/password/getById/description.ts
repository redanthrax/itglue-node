import { PasswordProperties } from '../../interfaces';

export const passwordGetByIdDescription: PasswordProperties = [
	{
		displayName: 'Password ID',
		name: 'passwordId',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['getById'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the password to retrieve',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['getById'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Include',
				name: 'include',
				type: 'multiOptions',
				options: [
					{
						name: 'Password Category',
						value: 'password_category',
					},
					{
						name: 'Organization',
						value: 'organization',
					},
					{
						name: 'Attachments',
						value: 'attachments',
					},
				],
				default: [],
				description: 'Related resources to include',
			},
		],
	},
];