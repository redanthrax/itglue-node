import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as bulkUpdate from './bulkUpdate';
import * as bulkDestroy from './bulkDestroy';
import * as deleteContact from './delete';

import { INodeProperties } from 'n8n-workflow';

export { get, getById, create, update, bulkUpdate, bulkDestroy, deleteContact };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
	options: [
		{
			name: 'Bulk Delete',
			value: 'bulkDestroy',
			action: 'Bulk delete contacts',
			description: 'Delete multiple contacts at once',
		},
		{
			name: 'Bulk Update',
			value: 'bulkUpdate',
			action: 'Bulk update contacts',
			description: 'Update multiple contacts at once',
		},
		{
			name: 'Create',
			value: 'create',
			action: 'Create a contact',
			description: 'Create a new contact',
		},
		{
			name: 'Delete',
			value: 'delete',
			action: 'Delete a contact',
			description: 'Delete a contact',
		},
		{
			name: 'Get',
			value: 'getById',
			action: 'Get a contact',
			description: 'Retrieve a single contact',
		},
		{
			name: 'Get Many',
			value: 'get',
			action: 'Get many contacts',
			description: 'Retrieve multiple contacts',
		},
		{
			name: 'Update',
			value: 'update',
			action: 'Update a contact',
			description: 'Update an existing contact',
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
	...deleteContact.description,
];