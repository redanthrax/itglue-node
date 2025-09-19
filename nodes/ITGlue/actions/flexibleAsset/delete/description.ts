import { FlexibleAssetProperties } from '../../interfaces';

export const flexibleAssetDeleteDescription: FlexibleAssetProperties = [
	{
		displayName: 'Flexible Asset ID',
		name: 'flexibleAssetId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['delete'],
			},
		},
		default: '',
		required: true,
		description: 'The ID of the flexible asset to delete',
	},
];