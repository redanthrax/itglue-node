import { ContactProperties } from '../../interfaces';

export const contactCreateDescription: ContactProperties = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The organization ID to create the contact for',
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The first name of the contact',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The last name of the contact',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Contact Type ID',
				name: 'contact_type_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Email',
				name: 'contact_emails',
				type: 'json',
				default: '[]',
				description: 'JSON array of email objects',
				placeholder: '[{"value": "email@example.com", "label": "Work", "primary": true}]',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
				description: 'Additional notes for the contact',
			},
			{
				displayName: 'Phone Numbers',
				name: 'contact_phones',
				type: 'json',
				default: '[]',
				description: 'JSON array of phone objects',
				placeholder: '[{"value": "+1234567890", "label": "Work", "primary": true}]',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Job title of the contact',
			},
		],
	},
];