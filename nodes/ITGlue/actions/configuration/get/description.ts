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
					false,
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
				displayName: 'Configuration Type ID',
				name: 'configuration_type_id',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Organization ID',
				name: 'organization_id',
				type: 'number',
				default: '',
			},
		],
	},
];