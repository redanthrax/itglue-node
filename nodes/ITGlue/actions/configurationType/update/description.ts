import { ConfigurationTypeProperties } from "../../interfaces";

export const configurationTypeUpdateDescription: ConfigurationTypeProperties = [
	{
		displayName: 'Configuration Type ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the configuration type to update',
		displayOptions: {
			show: {
				resource: ['configurationType'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		description: 'Fields to update (only specified fields will be changed)',
		displayOptions: {
			show: {
				resource: ['configurationType'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the configuration type',
			},
		],
	},
];
