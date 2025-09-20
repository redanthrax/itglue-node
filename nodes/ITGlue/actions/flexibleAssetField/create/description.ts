import { FlexibleAssetFieldProperties } from "../../interfaces";

export const flexibleAssetFieldCreateDescription: FlexibleAssetFieldProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the flexible asset field',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Flexible Asset Type ID',
		name: 'flexibleAssetTypeId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the flexible asset type this field belongs to',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Field Type',
		name: 'fieldType',
		type: 'options',
		default: 'text',
		required: true,
		description: 'The type of the field',
	options: [
		{ name: 'Checkbox', value: 'checkbox' },
		{ name: 'Date', value: 'date' },
		{ name: 'Number', value: 'number' },
		{ name: 'Select', value: 'select' },
		{ name: 'Tag', value: 'tag' },
		{ name: 'Text', value: 'text' },
		{ name: 'Textbox', value: 'textbox' },
	],
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['create'],
			},
		},
	},
];