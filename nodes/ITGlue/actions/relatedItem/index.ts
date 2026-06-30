import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteResource from './delete';
import * as bulkDestroy from './bulkDestroy';

export { get, getById, create, update, deleteResource as delete, bulkDestroy };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['relatedItem'],
			},
		},
		options: [
			{
				name: 'Bulk Delete',
				value: 'bulkDestroy',
				description: 'Delete multiple records',
				action: 'Bulk delete records',
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
	...deleteResource.description,
	...bulkDestroy.description,
];
