import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as bulkUpdate from './bulkUpdate';
import * as publish from './publish';
import * as deleteResource from './delete';

export { get, getById, create, update, bulkUpdate, publish, deleteResource as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['document'],
			},
		},
		options: [
			{
				name: 'Bulk Update',
				value: 'bulkUpdate',
				description: 'Update multiple documents at once',
				action: 'Bulk update documents',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new document',
				action: 'Create a document',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document',
				action: 'Delete a document',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get all documents',
				action: 'Get documents',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a specific document by ID',
				action: 'Get document by ID',
			},
			{
				name: 'Publish',
				value: 'publish',
				description: 'Publish a document',
				action: 'Publish a document',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing document',
				action: 'Update a document',
			},
		],
		default: 'get',
	},
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...bulkUpdate.description,
	...publish.description,
	...deleteResource.description,
];
