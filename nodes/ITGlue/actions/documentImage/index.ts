import { INodeProperties } from 'n8n-workflow';

import * as getById from './getById';
import * as create from './create';
import * as deleteResource from './delete';

export { getById, create, deleteResource as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['documentImage'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Upload a new document image',
				action: 'Create a document image',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document image',
				action: 'Delete a document image',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a specific document image by ID',
				action: 'Get document image by ID',
			},
		],
		default: 'getById',
	},
	...getById.description,
	...create.description,
	...deleteResource.description,
];
