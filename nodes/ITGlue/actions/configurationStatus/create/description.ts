import { ConfigurationStatusProperties } from "../../interfaces";

export const configurationStatusCreateDescription: ConfigurationStatusProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the configuration status',
		displayOptions: {
			show: {
				resource: ['configurationStatus'],
				operation: ['create'],
			},
		},
	},
];