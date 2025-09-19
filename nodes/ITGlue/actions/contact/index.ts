import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteContact from './delete';

import { INodeProperties } from 'n8n-workflow';

export { get, getById, create, update, deleteContact };

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
	...deleteContact.description,
];