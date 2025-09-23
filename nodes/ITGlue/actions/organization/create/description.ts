import { OrganizationProperties } from "../../interfaces";

export const organizationCreateDescription: OrganizationProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: 'Organization Name',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['create'],
			},
		},
		required: true,
		description: 'The name of the organization',
	},
	{
		displayName: 'Alert',
		name: 'alert',
		type: 'string',
		default: '',
		placeholder: 'Organization Alert',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['create'],
			},
		},
		description: 'Create an alert for the organization',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		placeholder: 'Organization Description',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['create'],
			},
		},
		description: 'Create a description for the organization',
	},
	{
		displayName: 'Organization Type Name or ID',
		name: 'organization_type_id',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getOrgTypes',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Organization Status Name or ID',
		name: 'organization_status_id',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getOrgStatuses',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['create'],
			},
		},
	},
];