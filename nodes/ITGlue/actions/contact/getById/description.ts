import { ContactProperties } from '../../interfaces';

export const contactGetByIdDescription: ContactProperties = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		displayOptions: { show: { resource: ['contact'], operation: ['getById'] } },
		default: '',
		required: true,
		description: 'The ID of the contact to retrieve',
	},
];
