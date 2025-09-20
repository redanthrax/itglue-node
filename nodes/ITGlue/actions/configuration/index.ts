import { INodeProperties } from "n8n-workflow";

import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as bulkUpdate from './bulkUpdate';
import * as bulkDestroy from './bulkDestroy';

export { get, getById, create, update, bulkUpdate, bulkDestroy };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['configuration'],
			},
		},
	options: [
		{
			name: 'Bulk Delete',
			value: 'bulkDestroy',
			description: 'Delete multiple configurations at once',
			action: 'Bulk delete configurations',
		},
		{
			name: 'Bulk Update',
			value: 'bulkUpdate',
			description: 'Update multiple configurations at once',
			action: 'Bulk update configurations',
		},
		{
			name: 'Create',
			value: 'create',
			description: 'Create a new configuration',
			action: 'Create a configuration',
		},
		{
			name: 'Get',
			value: 'get',
			description: 'Get data from the Configurations endpoint',
			action: 'Get configurations data',
		},
		{
			name: 'Get by ID',
			value: 'getById',
			description: 'Get a specific configuration by ID',
			action: 'Get configuration by ID',
		},
		{
			name: 'Update',
			value: 'update',
			description: 'Update an existing configuration',
			action: 'Update a configuration',
		},
	],
		default: 'get',
	},
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...bulkUpdate.description,
	...bulkDestroy.description,
];