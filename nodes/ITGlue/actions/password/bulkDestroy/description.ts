import { PasswordProperties } from "../../interfaces";

export const passwordBulkDestroyDescription: PasswordProperties = [
	{
		displayName: 'Password IDs',
		name: 'ids',
		type: 'string',
		default: '',
		required: true,
		description: 'Comma-separated list of password IDs to delete',
		displayOptions: {
			show: {
				resource: ['password'],
				operation: ['bulkDestroy'],
			},
		},
	},
];