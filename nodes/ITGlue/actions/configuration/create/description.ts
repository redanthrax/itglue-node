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
		displayName: 'Configuration Status ID',
		name: 'configurationStatusId',
		type: 'number',
		default: '',
		description: 'The ID of the configuration status',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
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