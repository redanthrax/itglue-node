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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new name for the configuration status',
		displayOptions: {
			show: {
				resource: ['configurationStatus'],
				operation: ['update'],
			},
		},
	},
];