import { IExecuteFunctions } from 'n8n-core';

import * as organization from './actions/organization';

import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { loadOptions } from './methods';
import { router } from './actions/router';

export class ITGlue implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'IT Glue',
		name: 'iTGlue',
		icon: 'file:itglue.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Utilize the IT Glue API',
		defaults: {
			name: 'IT Glue',
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
				'Content-Type': 'application/vnd.api+json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Organization',
						value: 'organization',
					},
				],
				default: 'organization',
			},
			...organization.description,
		],
	};

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
