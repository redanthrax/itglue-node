import * as configuration from './actions/configuration';
import * as domain from './actions/domain';
import * as organization from './actions/organization';

import {
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
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
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
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
						name: 'Configuration',
						value: 'configuration'
					},
					{
						name: 'Domain',
						value: 'domain',
					},
					{
						name: 'Organization',
						value: 'organization',
					},
				],
				default: 'organization',
			},
			...configuration.description,
			...domain.description,
			...organization.description,
		],
	};

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
