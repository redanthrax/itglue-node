import { INodeProperties } from 'n8n-workflow';

import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';

export { get, getById, create, update };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['configurationType'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new record',
				action: 'Create a record',
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
];