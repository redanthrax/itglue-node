import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as bulkUpdate from './bulkUpdate';
import * as deleteResource from './delete';

export { get, getById, create, update, bulkUpdate, deleteResource as delete };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
			},
		},
		options: [
			{
				name: 'Bulk Update',
				value: 'bulkUpdate',
				description: 'Update multiple records',
				action: 'Bulk update records',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new record',
				action: 'Create a record',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a record',
				action: 'Delete a record',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get records',
				action: 'Get records',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a record by ID',
				action: 'Get record by ID',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a record',
				action: 'Update a record',
			},
		],
		default: 'get',
	},
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...bulkUpdate.description,
	...deleteResource.description,
];
