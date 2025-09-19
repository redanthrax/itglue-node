import { FlexibleAssetProperties } from '../../interfaces';

export const flexibleAssetGetByIdDescription: FlexibleAssetProperties = [
	{
		displayName: 'Flexible Asset ID',
		name: 'flexibleAssetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['getById'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the flexible asset to retrieve',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['getById'],
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
		],
	},
];