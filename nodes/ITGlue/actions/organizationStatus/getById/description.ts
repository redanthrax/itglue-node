import { OrganizationStatusProperties } from "../../interfaces";

export const organizationStatusGetByIdDescription: OrganizationStatusProperties = [
	{
		displayName: 'Organization Status ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the organization status to retrieve',
		displayOptions: {
			show: {
				resource: ['organizationStatus'],
				operation: ['getById'],
			},
		},
	},
];