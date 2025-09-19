import { ContactProperties } from '../../interfaces';

export const contactGetDescription: ContactProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['contact'],
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
				resource: ['contact'],
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
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Contact Type ID',
				name: 'contact_type_id',
				type: 'string',
				default: '',
				description: 'Filter by contact type ID',
			},
			{
				displayName: 'Created At',
				name: 'created_at',
				type: 'string',
				default: '',
				description: 'Filter by created date (ISO format)',
			},
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				default: '',
				description: 'Filter by first name',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
				description: 'Filter by last name',
			},
			{
				displayName: 'Organization ID',
				name: 'organization_id',
				type: 'string',
				default: '',
				description: 'Filter by organization ID',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Filter by job title',
			},
			{
				displayName: 'Updated At',
				name: 'updated_at',
				type: 'string',
				default: '',
				description: 'Filter by updated date (ISO format)',
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
				resource: ['contact'],
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
						name: 'Contact Type',
						value: 'contact_type',
					},
					{
						name: 'Organization',
						value: 'organization',
					},
					{
						name: 'Passwords',
						value: 'passwords',
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
						name: 'First Name (A-Z)',
						value: 'first_name',
					},
					{
						name: 'First Name (Z-A)',
						value: '-first_name',
					},
					{
						name: 'Last Name (A-Z)',
						value: 'last_name',
					},
					{
						name: 'Last Name (Z-A)',
						value: '-last_name',
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
				default: 'first_name',
				description: 'Sort order for results',
			},
		],
	},
];