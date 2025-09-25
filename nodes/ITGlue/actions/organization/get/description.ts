import { OrganizationProperties } from "../../interfaces";

export const organizationGetDescription: OrganizationProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Page Number',
		name: 'pageNumber',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 1,
		description: 'Page number for pagination (starts at 1)',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		description: 'Filter the organization request',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
			},
		},
	options: [
		{
			displayName: 'Organization ID',
			name: 'id',
			type: 'number',
			default: '',
			description: 'Filter by specific organization ID (alternative to dropdown selection)',
		},
		{
			displayName: 'Organization Name (Text Search)',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Filter by organization name using text search (supports partial matches)',
		},
		{
			displayName: 'Organization Name or ID',
			name: 'organization_select',
			type: 'options',
			description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			default: '',
			typeOptions: {
				loadOptionsMethod: 'getOrganizations',
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
			},
		],
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['get'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Include',
				name: 'include',
				type: 'multiOptions',
				options: [
					{
						name: 'Organization Type',
						value: 'organization_type',
					},
					{
						name: 'Organization Status',
						value: 'organization_status',
					},
				],
				default: [],
				description: 'Related resources to include',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'options',
				options: [
					{
						name: 'Created (Newest First)',
						value: '-created_at',
					},
					{
						name: 'Created (Oldest First)',
						value: 'created_at',
					},
					{
						name: 'Name (A-Z)',
						value: 'name',
					},
					{
						name: 'Name (Z-A)',
						value: '-name',
					},
					{
						name: 'Updated (Newest First)',
						value: '-updated_at',
					},
					{
						name: 'Updated (Oldest First)',
						value: 'updated_at',
					},
				],
				default: 'name',
				description: 'Sort order for results',
			},
		],
	},
];
