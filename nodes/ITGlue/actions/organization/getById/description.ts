import { OrganizationProperties } from "../../interfaces";

export const organizationGetByIdDescription: OrganizationProperties = [
	{
		displayName: 'Organization Name or ID',
		name: 'id',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getOrganizations',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['getById'],
			},
		},
	},
];