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
		displayName: 'Configuration Type ID',
		name: 'configurationTypeId',
		type: 'number',
		default: '',
		description: 'The ID of the configuration type',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Configuration Status ID',
		name: 'configurationStatusId',
		type: 'number',
		default: '',
		description: 'The ID of the configuration status',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
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
				operation: ['update'],
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
				operation: ['update'],
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
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'number',
		default: '',
		description: 'The ID of the contact associated with this configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'locationId',
		type: 'number',
		default: '',
		description: 'The ID of the location where this configuration is located',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Manufacturer ID',
		name: 'manufacturerId',
		type: 'number',
		default: '',
		description: 'The ID of the manufacturer',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Model ID',
		name: 'modelId',
		type: 'number',
		default: '',
		description: 'The ID of the model',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Operating System ID',
		name: 'operatingSystemId',
		type: 'number',
		default: '',
		description: 'The ID of the operating system',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Installed By',
		name: 'installedBy',
		type: 'string',
		default: '',
		description: 'Who installed the configuration',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Purchased At',
		name: 'purchasedAt',
		type: 'dateTime',
		default: '',
		description: 'When the configuration was purchased',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Installed At',
		name: 'installedAt',
		type: 'dateTime',
		default: '',
		description: 'When the configuration was installed',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Warranty Expires At',
		name: 'warrantyExpiresAt',
		type: 'dateTime',
		default: '',
		description: 'When the warranty expires',
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