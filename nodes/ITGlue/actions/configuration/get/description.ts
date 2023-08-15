import { ConfigurationProperties } from "../../interfaces";

export const configurationGetDescription: ConfigurationProperties = [
	{
		displayName: 'All Configurations',
		name: 'allconfigs',
		type: 'boolean',
		description: 'Whether to get all organizations or just one',
		default: true,
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add field',
		default: {},
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['get'],
				allconfigs: [
					true,
				],
			},
		},
		options: [
			{
				displayName: 'Configuration ID',
				name: 'id',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
		],
	},
];