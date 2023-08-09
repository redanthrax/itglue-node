import { IExecuteFunctions } from 'n8n-core';

import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { router } from './actions/router';

export class ITGlue implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'IT Glue',
		name: 'iTGlue',
		icon: 'file:itglue.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Utilize the ITGlue API',
		defaults: {
			name: 'ITGlue',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'itglueApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/vnd.api+json'
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [],
				default: '',
			},
		]
	};

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
