import {
		IAuthenticateGeneric,
		ICredentialTestRequest,
		ICredentialType,
		INodeProperties,
		type Icon,
	} from 'n8n-workflow';

export class ITGlueApi implements ICredentialType {
	name = 'itglueApi';
	displayName = 'IT Glue API';
	icon: Icon = {
		light: 'file:itglue.svg',
		dark: 'file:itglue-dark.svg',
	};
	documentationUrl = 'https://github.com/redanthrax/itglue-node';
	properties: INodeProperties[] = [
		{
			displayName: 'Region',
			name: 'region',
			type: 'options',
			default: 'api',
			description: 'Select the IT Glue API region (for example api.itglue.com for US)',
			noDataExpression: true,
			options: [
				{
					name: 'US',
					value: 'api',
				},
				{
					name: 'Europe',
					value: 'api.eu',
				},
				{
					name: 'Australia',
					value: 'api.au',
				},
			],

		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
				'Content-Type': 'application/vnd.api+json',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{"https://" + $credentials.region + ".itglue.com"}}',
			url: '/organizations',
			method: 'GET',
		},
	};
}
