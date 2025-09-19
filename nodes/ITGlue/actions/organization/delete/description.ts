import { OrganizationProperties } from "../../interfaces";

export const organizationDeleteDescription: OrganizationProperties = [
	{
		displayName: 'Organization ID',
		name: 'orgid',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['deleteOrganization'],
			},
		},
		required: true,
		description: 'ID of the organization to delete',
	},
];