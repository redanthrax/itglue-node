import { FlexibleAssetProperties } from '../../interfaces';

export const flexibleAssetCreateDescription: FlexibleAssetProperties = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The organization ID to create the flexible asset for',
	},
	{
		displayName: 'Flexible Asset Type ID',
		name: 'flexibleAssetTypeId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The flexible asset type ID that defines the structure',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The name of the flexible asset',
	},
	{
		displayName: 'Traits',
		name: 'traits',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['create'],
			},
		},
		description: 'JSON object containing the flexible asset traits/fields based on the asset type',
		placeholder: '{"field_name": "value", "another_field": "another_value"}',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
				description: 'Additional notes for the flexible asset',
			},
			{
				displayName: 'Restricted',
				name: 'restricted',
				type: 'boolean',
				default: false,
				description: 'Whether the flexible asset is restricted',
			},
		],
	},
];