import { PasswordProperties } from '../../interfaces';

export const passwordGetDescription: PasswordProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['password'],
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
				resource: ['password'],
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
				resource: ['password'],
				operation: ['get'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Created At',
				name: 'created_at',
				type: 'string',
				default: '',
				description: 'Filter by created date (ISO format)',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by password name',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Filter by notes',
			},
			{
				displayName: 'Organization ID',
				name: 'organization_id',
				type: 'string',
				default: '',
				description: 'Filter by organization ID',
			},
			{
				displayName: 'Password Category ID',
				name: 'password_category_id',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Filter by password category ID',
			},
			{
				displayName: 'Updated At',
				name: 'updated_at',
				type: 'string',
				default: '',
				description: 'Filter by updated date (ISO format)',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'Filter by URL',
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				description: 'Filter by username',
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
				resource: ['password'],
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
						name: 'Password Category',
						value: 'password_category',
					},
					{
						name: 'Organization',
						value: 'organization',
					},
					{
						name: 'Attachments',
						value: 'attachments',
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