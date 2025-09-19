import { ContactProperties } from '../../interfaces';

export const contactDeleteDescription: ContactProperties = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		displayOptions: { show: { resource: ['contact'], operation: ['delete'] } },
		default: '',
		required: true,
		description: 'The ID of the contact to delete',
	},
];
