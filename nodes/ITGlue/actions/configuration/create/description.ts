import { ConfigurationProperties } from "../../interfaces";

export const configurationCreateDescription: ConfigurationProperties = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the organization this configuration belongs to',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Configuration Type ID',
		name: 'configurationTypeId',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the configuration type',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'MAC Address',
		name: 'macAddress',
		type: 'string',
		default: '',
		description: 'The MAC address of the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Serial Number',
		name: 'serialNumber',
		type: 'string',
		default: '',
		description: 'The serial number of the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Asset Tag',
		name: 'assetTag',
		type: 'string',
		default: '',
		description: 'The asset tag of the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['create'],
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
				operation: ['create'],
			},
		},
	},
];