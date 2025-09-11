import { OrganizationProperties } from "../../interfaces";

export const organizationGetDescription: OrganizationProperties = [
	{
		displayName: 'All Organizations',
		name: 'allorgs',
		type: 'boolean',
		description: 'Whether to get all organizations or just one',
		default: true,
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add field',
		default: {},
		description: 'Filter the organization request',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
				allorgs: [
					true,
				],
			},
		},
		options: [
			{
				displayName: 'Organization ID',
				name: 'forgid',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Organization Name',
				name: 'forgname',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Organization Type Name or ID',
				name: 'forgtype',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
				default: '',
				typeOptions: {
					loadOptionsMethod: 'getOrgTypes',
				},
			},
			{
				displayName: 'Organization Status Name or ID',
				name: 'forgstatus',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
				default: '',
				typeOptions: {
					loadOptionsMethod: 'getOrgStatuses',
				},
			},
		],
	},
	{
		displayName: 'Organization',
		name: 'orgid',
		type: 'string',
		description: 'Organization to retrieve with full notes',
		default: '',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
				allorgs: [
					false,
				],
			},
		},
	},
];