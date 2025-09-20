import { ContactProperties } from "../../interfaces";

export const contactBulkDestroyDescription: ContactProperties = [
	{
		displayName: 'Contact IDs',
		name: 'ids',
		type: 'string',
		default: '',
		required: true,
		description: 'Comma-separated list of contact IDs to delete',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['bulkDestroy'],
			},
		},
	},
];