import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteFlexibleAsset from './delete';
import * as bulkDestroy from './bulkDestroy';

import { INodeProperties } from 'n8n-workflow';

export { get, getById, create, update, deleteFlexibleAsset, bulkDestroy };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['flexibleAsset'],
			},
		},
	options: [
		{
			name: 'Bulk Destroy',
			value: 'bulkDestroy',
			action: 'Bulk delete flexible assets',
			description: 'Delete multiple flexible assets at once',
		},
		{
			name: 'Create',
			value: 'create',
			action: 'Create a flexible asset',
			description: 'Create a new flexible asset',
		},
		{
			name: 'Delete',
			value: 'delete',
			action: 'Delete a flexible asset',
			description: 'Delete a flexible asset',
		},
		{
			name: 'Get',
			value: 'getById',
			action: 'Get a flexible asset',
			description: 'Retrieve a single flexible asset',
		},
		{
			name: 'Get Many',
			value: 'get',
			action: 'Get many flexible assets',
			description: 'Retrieve multiple flexible assets',
		},
		{
			name: 'Update',
			value: 'update',
			action: 'Update a flexible asset',
			description: 'Update an existing flexible asset',
		},
	],
		default: 'get',
	},
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteFlexibleAsset.description,
	...bulkDestroy.description,
];