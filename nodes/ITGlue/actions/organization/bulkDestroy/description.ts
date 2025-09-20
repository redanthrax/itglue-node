import { OrganizationProperties } from "../../interfaces";

export const organizationBulkDestroyDescription: OrganizationProperties = [
	{
		displayName: 'Organization IDs',
		name: 'ids',
		type: 'string',
		default: '',
		required: true,
		description: 'Comma-separated list of organization IDs to delete',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['bulkDestroy'],
			},
		},
	},
];