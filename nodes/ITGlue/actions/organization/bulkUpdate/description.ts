import { OrganizationProperties } from "../../interfaces";

export const organizationBulkUpdateDescription: OrganizationProperties = [
	{
		displayName: 'Organizations to Update',
		name: 'organizations',
		type: 'json',
		default: '[]',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['bulkUpdate'],
			},
		},
		required: true,
		description: 'JSON array of organizations to update. Each object should contain ID and the attributes to update.',
		placeholder: '[{"ID": 1, "name": "Updated Name", "alert": "New alert"}, {"ID": 2, "description": "New description"}]',
	},
];