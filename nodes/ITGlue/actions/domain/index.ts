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
				name: 'Get Many',
				value: 'get',
				description: 'Get domains',
				action: 'Get many domains',
			},
		],
		default: 'get',
	},
	...get.description,
];
