import { ContactProperties } from '../../interfaces';

export const contactUpdateDescription: ContactProperties = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		displayOptions: { show: { resource: ['contact'], operation: ['update'] } },
		default: '',
		required: true,
		description: 'The ID of the contact to update',
	},
];
