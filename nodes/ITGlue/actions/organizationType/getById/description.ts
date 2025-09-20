import { OrganizationTypeProperties } from "../../interfaces";

export const organizationTypeGetByIdDescription: OrganizationTypeProperties = [
	{
		displayName: 'Organization Type ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the organization type to retrieve',
		displayOptions: {
			show: {
				resource: ['organizationType'],
				operation: ['getById'],
			},
		},
	},
];