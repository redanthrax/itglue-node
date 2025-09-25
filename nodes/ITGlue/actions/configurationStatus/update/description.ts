import { ConfigurationStatusProperties } from "../../interfaces";

export const configurationStatusUpdateDescription: ConfigurationStatusProperties = [
	{
		displayName: 'Configuration Status ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the configuration status to update',
		displayOptions: {
			show: {
				resource: ['configurationStatus'],
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
				resource: ['configurationStatus'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the configuration status',
			},
		],
	},
];
