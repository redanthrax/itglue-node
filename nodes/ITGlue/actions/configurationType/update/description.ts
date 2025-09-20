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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new name for the configuration type',
		displayOptions: {
			show: {
				resource: ['configurationType'],
				operation: ['update'],
			},
		},
	},
];