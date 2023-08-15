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
		name: 'forgtype',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
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
		name: 'forgstatus',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
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