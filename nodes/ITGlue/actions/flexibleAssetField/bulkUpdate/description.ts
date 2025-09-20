import { FlexibleAssetFieldProperties } from "../../interfaces";

export const flexibleAssetFieldBulkUpdateDescription: FlexibleAssetFieldProperties = [
	{
		displayName: 'Updates',
		name: 'updates',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Update',
		typeOptions: {
			multipleValues: true,
		},
		description: 'The flexible asset fields to update',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['bulkUpdate'],
			},
		},
		options: [
			{
				displayName: 'Update',
				name: 'update',
				values: [
					{
						displayName: 'Field ID',
						name: 'id',
						type: 'string',
						default: '',
						required: true,
						description: 'The ID of the field to update',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						required: true,
						description: 'The new name for the field',
					},
				],
			},
		],
	},
];