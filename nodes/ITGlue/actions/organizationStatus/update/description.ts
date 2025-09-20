import { OrganizationStatusProperties } from "../../interfaces";

export const organizationStatusUpdateDescription: OrganizationStatusProperties = [
	{
		displayName: 'Organization Status ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the organization status to update',
		displayOptions: {
			show: {
				resource: ['organizationStatus'],
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
		description: 'The new name for the organization status',
		displayOptions: {
			show: {
				resource: ['organizationStatus'],
				operation: ['update'],
			},
		},
	},
];