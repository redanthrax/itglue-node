import { PasswordProperties } from '../../interfaces';

export const passwordDeleteDescription: PasswordProperties = [
	{
		displayName: 'Password ID',
		name: 'passwordId',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['delete'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the password to delete',
	},
];