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
	{
		displayName: 'Include Related Data',
		name: 'include',
		type: 'multiOptions',
		default: [],
		options: [
			{
				name: 'Adapters',
				value: 'adapters',
			},
			{
				name: 'Attachments',
				value: 'attachments',
			},
			{
				name: 'Configuration Interfaces',
				value: 'configuration_interfaces',
			},
			{
				name: 'Configuration Status',
				value: 'configuration_status',
			},
			{
				name: 'Configuration Type',
				value: 'configuration_type',
			},
			{
				name: 'Contact',
				value: 'contact',
			},
			{
				name: 'Location',
				value: 'location',
			},
			{
				name: 'Manufacturer',
				value: 'manufacturer',
			},
			{
				name: 'Model',
				value: 'model',
			},
			{
				name: 'Operating System',
				value: 'operating_system',
			},
			{
				name: 'Organization',
				value: 'organization',
			},
			{
				name: 'Related Items',
				value: 'related_items',
			},
		],
		description: 'Include related configuration data in the response',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['getById'],
			},
		},
	},
];
