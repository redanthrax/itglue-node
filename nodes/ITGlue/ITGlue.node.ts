import * as configuration from './actions/configuration';
import * as domain from './actions/domain';
import * as organization from './actions/organization';
import * as password from './actions/password';
import * as flexibleAsset from './actions/flexibleAsset';
import * as contact from './actions/contact';
import * as attachment from './actions/attachment';
import * as configurationStatus from './actions/configurationStatus';
import * as configurationType from './actions/configurationType';
import * as contactType from './actions/contactType';
import * as country from './actions/country';
import * as document from './actions/document';
import * as expiration from './actions/expiration';
import * as group from './actions/group';
import * as location from './actions/location';
import * as log from './actions/log';
import * as operatingSystem from './actions/operatingSystem';
import * as organizationStatus from './actions/organizationStatus';
import * as organizationType from './actions/organizationType';
import * as passwordCategory from './actions/passwordCategory';
import * as platform from './actions/platform';
import * as region from './actions/region';
import * as user from './actions/user';
import * as userMetric from './actions/userMetric';
import * as configurationInterface from './actions/configurationInterface';
import * as exportResource from './actions/export';
import * as flexibleAssetField from './actions/flexibleAssetField';
import * as manufacturer from './actions/manufacturer';
import * as flexibleAssetType from './actions/flexibleAssetType';
import * as model from './actions/model';
import * as relatedItem from './actions/relatedItem';

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
		documentationUrl: 'https://github.com/redanthrax/itglue-node',
		subtitle: '={{$parameter["resource"] ? ($parameter["operation"] + ": " + $parameter["resource"]) : "IT Glue"}}',
		description: 'Utilize the IT Glue API',
		defaults: {
			name: 'IT Glue',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'itglueApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Attachment',
						value: 'attachment',
					},
					{
						name: 'Configuration',
						value: 'configuration',
					},
					{
						name: 'Configuration Interface',
						value: 'configurationInterface',
					},
					{
						name: 'Configuration Status',
						value: 'configurationStatus',
					},
					{
						name: 'Configuration Type',
						value: 'configurationType',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Contact Type',
						value: 'contactType',
					},
					{
						name: 'Country',
						value: 'country',
					},
					{
						name: 'Document',
						value: 'document',
					},
					{
						name: 'Domain',
						value: 'domain',
					},
					{
						name: 'Expiration',
						value: 'expiration',
					},
					{
						name: 'Export',
						value: 'export',
					},
					{
						name: 'Flexible Asset',
						value: 'flexibleAsset',
					},
					{
						name: 'Flexible Asset Field',
						value: 'flexibleAssetField',
					},
					{
						name: 'Flexible Asset Type',
						value: 'flexibleAssetType',
					},
					{
						name: 'Group',
						value: 'group',
					},
					{
						name: 'Location',
						value: 'location',
					},
					{
						name: 'Log',
						value: 'log',
					},
					{
						name: 'Manufacturer',
						value: 'manufacturer',
					},
					{
						name: 'Model',
						value: 'model',
					},
					{
						name: 'Operating System',
						value: 'operatingSystem',
					},
					{
						name: 'Organization',
						value: 'organization',
					},
					{
						name: 'Organization Status',
						value: 'organizationStatus',
					},
					{
						name: 'Organization Type',
						value: 'organizationType',
					},
					{
						name: 'Password',
						value: 'password',
					},
					{
						name: 'Password Category',
						value: 'passwordCategory',
					},
					{
						name: 'Platform',
						value: 'platform',
					},
					{
						name: 'Region',
						value: 'region',
					},
					{
						name: 'Related Item',
						value: 'relatedItem',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'User Metric',
						value: 'userMetric',
					},
				],
				default: 'organization',
			},
			...attachment.descriptions,
			...configuration.description,
			...configurationInterface.descriptions,
			...configurationStatus.descriptions,
			...configurationType.descriptions,
			...contact.descriptions,
			...contactType.descriptions,
			...country.descriptions,
			...document.descriptions,
			...domain.description,
			...exportResource.descriptions,
			...expiration.descriptions,
			...flexibleAsset.descriptions,
			...flexibleAssetField.descriptions,
			...flexibleAssetType.descriptions,
			...group.descriptions,
			...location.descriptions,
			...log.descriptions,
			...manufacturer.descriptions,
			...model.descriptions,
			...operatingSystem.descriptions,
			...organization.description,
			...organizationStatus.descriptions,
			...organizationType.descriptions,
			...password.descriptions,
			...passwordCategory.descriptions,
			...platform.descriptions,
			...region.descriptions,
			...relatedItem.descriptions,
			...user.descriptions,
			...userMetric.descriptions,
		],
	};

	methods = { loadOptions };

	async execute(this: IExecuteFunctions) {
		return await router.call(this);
	}
}
