import { OrganizationStatusProperties } from "../../interfaces";

export const organizationStatusCreateDescription: OrganizationStatusProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the organization status',
		displayOptions: {
			show: {
				resource: ['organizationStatus'],
				operation: ['create'],
			},
		},
	},
];