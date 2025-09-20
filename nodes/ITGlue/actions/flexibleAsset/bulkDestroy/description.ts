import { FlexibleAssetProperties } from "../../interfaces";

export const flexibleAssetBulkDestroyDescription: FlexibleAssetProperties = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		description: 'The IDs of the flexible assets to delete',
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
				operation: ['bulkDestroy'],
			},
		},
	},
];