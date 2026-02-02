import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteResource from './delete';

export { get, getById, create, update, deleteResource as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['documentSection'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new document section',
				action: 'Create a document section',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document section',
				action: 'Delete a document section',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get all document sections for a document',
				action: 'Get document sections',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a specific document section by ID',
				action: 'Get document section by ID',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing document section',
				action: 'Update a document section',
			},
		],
		default: 'get',
	},
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteResource.description,
];
