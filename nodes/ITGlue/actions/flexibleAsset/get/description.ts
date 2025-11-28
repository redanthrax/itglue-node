import { FlexibleAssetProperties } from '../../interfaces';

export const flexibleAssetGetDescription: FlexibleAssetProperties = [
	{
		displayName: 'Flexible Asset Type',
		name: 'flexibleAssetTypeId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getFlexibleAssetTypes',
		},
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['get'],
			},
		},
		required: true,
		default: '',
		description: 'The flexible asset type to retrieve assets for',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
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
				resource: ['flexibleAsset'],
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
				resource: ['flexibleAsset'],
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
				description: 'Filter by flexible asset name',
			},
			{
				displayName: 'Organization ID',
				name: 'organization_id',
				type: 'string',
				default: '',
				description: 'Filter by organization ID',
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
				resource: ['flexibleAsset'],
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
						name: 'Flexible Asset Type',
						value: 'flexible_asset_type',
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