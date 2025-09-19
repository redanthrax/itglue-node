import * as configuration from './actions/configuration';
import * as domain from './actions/domain';
import * as organization from './actions/organization';
import * as password from './actions/password';
import * as flexibleAsset from './actions/flexibleAsset';
import * as contact from './actions/contact';

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
						value: 'configuration',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Domain',
						value: 'domain',
					},
					{
						name: 'Flexible Asset',
						value: 'flexibleAsset',
					},
					{
						name: 'Organization',
						value: 'organization',
					},
					{
						name: 'Password',
						value: 'password',
					},
				],
				default: 'organization',
			},
			...configuration.description,
			...domain.description,
			...organization.description,
			...password.descriptions,
			...flexibleAsset.descriptions,
			...contact.descriptions,
		],
	};

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
