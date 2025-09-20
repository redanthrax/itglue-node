import { INodeProperties } from "n8n-workflow";

import * as get from './get';

export { get };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['domain'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get data from the Domains endpoint',
				action: 'Get domains data',
			},
		],
		default: 'get',
	},
	...get.description,
];
