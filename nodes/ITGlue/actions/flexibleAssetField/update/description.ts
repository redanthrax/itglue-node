import { FlexibleAssetFieldProperties } from "../../interfaces";

export const flexibleAssetFieldUpdateDescription: FlexibleAssetFieldProperties = [
	{
		displayName: 'Field ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the flexible asset field to update',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new name for the flexible asset field',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['update'],
			},
		},
	},
];