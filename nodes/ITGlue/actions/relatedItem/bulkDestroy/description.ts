import { RelatedItemProperties } from "../../interfaces";

export const relatedItemBulkDestroyDescription: RelatedItemProperties = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		default: [],
		required: true,
		description: 'The IDs of the related items to delete',
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['bulkDestroy'],
			},
		},
	},
];