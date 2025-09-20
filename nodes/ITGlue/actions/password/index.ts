import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as bulkUpdate from './bulkUpdate';
import * as bulkDestroy from './bulkDestroy';
import * as deletePassword from './delete';

import { INodeProperties } from 'n8n-workflow';

export { get, getById, create, update, bulkUpdate, bulkDestroy, deletePassword };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['password'],
			},
		},
	options: [
		{
			name: 'Bulk Delete',
			value: 'bulkDestroy',
			action: 'Bulk delete passwords',
			description: 'Delete multiple passwords at once',
		},
		{
			name: 'Bulk Update',
			value: 'bulkUpdate',
			action: 'Bulk update passwords',
			description: 'Update multiple passwords at once',
		},
		{
			name: 'Create',
			value: 'create',
			action: 'Create a password',
			description: 'Create a new password',
		},
		{
			name: 'Delete',
			value: 'delete',
			action: 'Delete a password',
			description: 'Delete a password',
		},
		{
			name: 'Get',
			value: 'getById',
			action: 'Get a password',
			description: 'Retrieve a single password',
		},
		{
			name: 'Get Many',
			value: 'get',
			action: 'Get many passwords',
			description: 'Retrieve multiple passwords',
		},
		{
			name: 'Update',
			value: 'update',
			action: 'Update a password',
			description: 'Update an existing password',
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
	...deletePassword.description,
];