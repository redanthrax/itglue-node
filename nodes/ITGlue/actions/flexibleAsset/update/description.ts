import { FlexibleAssetProperties } from '../../interfaces';

export const flexibleAssetUpdateDescription: FlexibleAssetProperties = [
	{
		displayName: 'Flexible Asset ID',
		name: 'flexibleAssetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['update'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the flexible asset to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the flexible asset',
			},
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
			{
				displayName: 'Traits',
				name: 'traits',
				type: 'json',
				default: '{}',
				description: 'JSON object containing the flexible asset traits/fields to update',
				placeholder: '{"field_name": "new_value", "another_field": "updated_value"}',
			},
		],
	},
];