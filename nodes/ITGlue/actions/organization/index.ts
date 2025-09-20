import { INodeProperties } from "n8n-workflow";

import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as bulkUpdate from './bulkUpdate';
import * as bulkDestroy from './bulkDestroy';
import * as deleteOrganization from './delete';

export { get, getById, create, update, bulkUpdate, bulkDestroy, deleteOrganization };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['organization'],
			},
		},
	options: [
		{
			name: 'Bulk Delete',
			value: 'bulkDestroy',
			description: 'Delete multiple organizations at once',
			action: 'Bulk delete organizations',
		},
		{
			name: 'Bulk Update',
			value: 'bulkUpdate',
			description: 'Update multiple organizations at once',
			action: 'Bulk update organizations',
		},
		{
			name: 'Create',
			value: 'create',
			description: 'Create an organization using the Organizations endpoint',
			action: 'Create organizations data',
		},
		{
			name: 'Delete',
			value: 'deleteOrganization',
			description: 'Delete an organization',
			action: 'Delete an organization',
		},
		{
			name: 'Get',
			value: 'get',
			description: 'Get data from the Organizations endpoint',
			action: 'Get organizations data',
		},
		{
			name: 'Get by ID',
			value: 'getById',
			description: 'Get a specific organization by ID',
			action: 'Get organization by ID',
		},
		{
			name: 'Update',
			value: 'update',
			description: 'Update an organization using the Organizations endpoint',
			action: 'Update organizations data',
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
	...deleteOrganization.description,
];