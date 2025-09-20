import { OrganizationTypeProperties } from "../../interfaces";

export const organizationTypeUpdateDescription: OrganizationTypeProperties = [
	{
		displayName: 'Organization Type ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the organization type to update',
		displayOptions: {
			show: {
				resource: ['organizationType'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new name for the organization type',
		displayOptions: {
			show: {
				resource: ['organizationType'],
				operation: ['update'],
			},
		},
	},
];