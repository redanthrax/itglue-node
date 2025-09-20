import { ConfigurationProperties } from "../../interfaces";

export const configurationBulkUpdateDescription: ConfigurationProperties = [
	{
		displayName: 'Updates',
		name: 'updates',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Update',
		typeOptions: {
			multipleValues: true,
		},
		description: 'The configurations to update',
		displayOptions: {
			show: {
				resource: ['configuration'],
				operation: ['bulkUpdate'],
			},
		},
		options: [
			{
				displayName: 'Update',
				name: 'update',
				values: [
					{
						displayName: 'Configuration ID',
						name: 'id',
						type: 'string',
						default: '',
							required:	true,
						description: 'The ID of the configuration to update',
					},
					{
						displayName: 'Hostname',
						name: 'hostname',
						type: 'string',
						default: '',
						description: 'The hostname of the configuration',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'The new name for the configuration',
					},
					{
						displayName: 'Notes',
						name: 'notes',
						type: 'string',
						default: '',
						description: 'Additional notes',
					},
					{
						displayName: 'Primary IP',
						name: 'primaryIp',
						type: 'string',
						default: '',
						description: 'The primary IP address',
					},
				],
			},
		],
	},
];