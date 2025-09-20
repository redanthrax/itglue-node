import { ContactProperties } from "../../interfaces";

export const contactBulkUpdateDescription: ContactProperties = [
	{
		displayName: 'Updates',
		name: 'updates',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Update',
		typeOptions: {
			multipleValues: true,
		},
		description: 'The contacts to update',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['bulkUpdate'],
			},
		},
		options: [
			{
				displayName: 'Update',
				name: 'update',
				values: [
					{
						displayName: 'Contact ID',
						name: 'id',
						type: 'string',
						default: '',
							required:	true,
						description: 'The ID of the contact to update',
					},
					{
						displayName: 'Contact Type ID',
						name: 'contactTypeId',
						type: 'string',
						default: '',
						description: 'The ID of the contact type',
					},
					{
						displayName: 'Email',
						name: 'email',
						type: 'string',
						placeholder: 'name@email.com',
						default: '',
						description: 'The email address of the contact',
					},
					{
						displayName: 'First Name',
						name: 'firstName',
						type: 'string',
						default: '',
						description: 'The first name of the contact',
					},
					{
						displayName: 'Last Name',
						name: 'lastName',
						type: 'string',
						default: '',
						description: 'The last name of the contact',
					},
					{
						displayName: 'Notes',
						name: 'notes',
						type: 'string',
						default: '',
						description: 'Additional notes about the contact',
					},
					{
						displayName: 'Phone',
						name: 'phone',
						type: 'string',
						default: '',
						description: 'The phone number of the contact',
					},
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: '',
						description: 'The job title of the contact',
					},
				],
			},
		],
	},
];