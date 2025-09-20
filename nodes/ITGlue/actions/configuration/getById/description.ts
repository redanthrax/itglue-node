import { ConfigurationProperties } from "../../interfaces";

export const configurationGetByIdDescription: ConfigurationProperties = [
	{
		displayName: 'Configuration ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the configuration to retrieve',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['getById'],
			},
		},
	},
];