import { ConfigurationTypeProperties } from "../../interfaces";

export const configurationTypeCreateDescription: ConfigurationTypeProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the configuration type',
		displayOptions: {
			show: {
				resource: ['configurationType'],
				operation: ['create'],
			},
		},
	},
];