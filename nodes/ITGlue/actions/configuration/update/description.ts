import { ConfigurationProperties } from "../../interfaces";

export const configurationUpdateDescription: ConfigurationProperties = [
	{
		displayName: 'Configuration ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the configuration to update',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'The new name for the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Hostname',
		name: 'hostname',
		type: 'string',
		default: '',
		description: 'The hostname of the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Primary IP',
		name: 'primaryIp',
		type: 'string',
		default: '',
		description: 'The primary IP address of the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		description: 'Additional notes for the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
];