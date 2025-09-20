import { ConfigurationTypeProperties } from "../../interfaces";

export const configurationTypeGetByIdDescription: ConfigurationTypeProperties = [
	{
		displayName: 'Configuration Type ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the configuration type to retrieve',
		displayOptions: {
			show: {
				resource: ['configurationType'],
				operation: ['getById'],
			},
		},
	},
];