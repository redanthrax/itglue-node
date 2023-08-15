import { INodeProperties } from "n8n-workflow";

import * as get from './get';
import * as update from './update';
import * as create from './create';

export { get, update, create };

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
			{
				name: 'Create',
				value: 'create',
				description: 'Create an organization using the Organizations endpoint',
				action: 'Create organizations data',
			},
		],
		default: 'get',
	},
	...get.description,
	...update.description,
	...create.description,
];