import { INodeProperties } from "n8n-workflow";

import * as get from './get';
import * as update from './update';
import * as create from './create';
import * as deleteOrganization from './delete';
import * as bulkUpdate from './bulkUpdate';

export { get, update, create, deleteOrganization, bulkUpdate };

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
				name: 'Update',
				value: 'update',
				description: 'Update an organization using the Organizations endpoint',
				action: 'Update organizations data',
			},
		],
		default: 'get',
	},
	...get.description,
	...update.description,
	...create.description,
	...deleteOrganization.description,
	...bulkUpdate.description,
];