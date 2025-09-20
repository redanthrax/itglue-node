import { FlexibleAssetFieldProperties } from "../../interfaces";

export const flexibleAssetFieldDestroyDescription: FlexibleAssetFieldProperties = [
	{
		displayName: 'Field ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the flexible asset field to delete',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['destroy'],
			},
		},
	},
];