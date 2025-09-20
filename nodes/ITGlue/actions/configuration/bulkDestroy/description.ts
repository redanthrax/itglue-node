import { ConfigurationProperties } from "../../interfaces";

export const configurationBulkDestroyDescription: ConfigurationProperties = [
	{
		displayName: 'Configuration IDs',
		name: 'ids',
		type: 'string',
		default: '',
		required: true,
		description: 'Comma-separated list of configuration IDs to delete',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['bulkDestroy'],
			},
		},
	},
];