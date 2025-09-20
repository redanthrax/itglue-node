import { ConfigurationStatusProperties } from "../../interfaces";

export const configurationStatusGetByIdDescription: ConfigurationStatusProperties = [
	{
		displayName: 'Configuration Status ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the configuration status to retrieve',
		displayOptions: {
			show: {
				resource: ['configurationStatus'],
				operation: ['getById'],
			},
		},
	},
];