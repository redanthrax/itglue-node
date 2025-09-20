import { OrganizationProperties } from "../../interfaces";

export const organizationGetByIdDescription: OrganizationProperties = [
	{
		displayName: 'Organization ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the organization to retrieve',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['getById'],
			},
		},
	},
];