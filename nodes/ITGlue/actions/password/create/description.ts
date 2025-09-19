import { PasswordProperties } from '../../interfaces';

export const passwordCreateDescription: PasswordProperties = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The organization ID to create the password for',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The name of the password',
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The username associated with the password',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: {
			password: true,
		},
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The actual password value',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
				description: 'Additional notes for the password',
			},
			{
				displayName: 'Password Category ID',
				name: 'password_category_id',
				type: 'string',
				typeOptions: { password: true },
				default: '',
			},
			{
				displayName: 'Restricted',
				name: 'restricted',
				type: 'boolean',
				default: false,
				description: 'Whether the password is restricted',
			},
			{
				displayName: 'Show Password',
				name: 'show_password',
				type: 'boolean',
				default: false,
				description: 'Whether to show the password in plain text',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The URL associated with the password',
			},
		],
	},
];
