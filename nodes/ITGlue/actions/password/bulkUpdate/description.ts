import { PasswordProperties } from "../../interfaces";

export const passwordBulkUpdateDescription: PasswordProperties = [
	{
		displayName: 'Updates',
		name: 'updates',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Update',
		typeOptions: {
			multipleValues: true,
		},
		description: 'The passwords to update',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['bulkUpdate'],
			},
		},
		options: [
			{
				displayName: 'Update',
				name: 'update',
				values: [
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
						default: '',
						description: 'Additional notes for the password',
					},
					{
						displayName: 'Organization ID',
						name: 'organizationId',
						type: 'string',
						default: '',
						description: 'The ID of the organization this password belongs to',
					},
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						typeOptions: { password: true },
						default: '',
						description: 'The password value',
					},
					{
						displayName: 'Password Category ID',
						name: 'passwordCategoryId',
						type: 'string',
						typeOptions: { password: true },
						default: '',
						description: 'The ID of the password category',
					},
					{
						displayName: 'Password ID',
						name: 'id',
						type: 'string',
						default: '',
							required:	true,
						description: 'The ID of the password to update',
					},
					{
						displayName: 'Resource ID',
						name: 'resourceId',
						type: 'string',
						default: '',
						description: 'The ID of the resource this password is associated with',
					},
					{
						displayName: 'Resource Type',
						name: 'resourceType',
						type: 'string',
						default: '',
						description: 'The type of resource this password is associated with',
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
						description: 'The username for the password',
					},
				],
			},
		],
	},
];