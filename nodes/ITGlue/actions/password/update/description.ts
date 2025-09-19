import { PasswordProperties } from '../../interfaces';

export const passwordUpdateDescription: PasswordProperties = [
	{
		displayName: 'Password ID',
		name: 'passwordId',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['update'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the password to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the password',
			},
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
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				description: 'The actual password value',
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
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				description: 'The username associated with the password',
			},
		],
	},
];
