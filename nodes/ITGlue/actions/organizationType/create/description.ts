import { OrganizationTypeProperties } from "../../interfaces";

export const organizationTypeCreateDescription: OrganizationTypeProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the organization type',
		displayOptions: {
			show: {
				resource: ['organizationType'],
				operation: ['create'],
			},
		},
	},
];