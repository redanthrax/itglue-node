import {
		IDataObject,
		IExecuteFunctions,
		INodeExecutionData,
} from 'n8n-workflow';

import { ITGlue } from './interfaces';

import * as configuration from './configuration';
import * as domain from './domain';
import * as organization from './organization';
import * as password from './password';
import * as flexibleAsset from './flexibleAsset';
import * as contact from './contact';
import * as attachment from './attachment';
import * as configurationStatus from './configurationStatus';
import * as configurationType from './configurationType';
import * as contactType from './contactType';
import * as country from './country';
import * as document from './document';
import * as documentSection from './documentSection';
import * as documentImage from './documentImage';
import * as expiration from './expiration';
import * as group from './group';
import * as location from './location';
import * as log from './log';
import * as operatingSystem from './operatingSystem';
import * as organizationStatus from './organizationStatus';
import * as organizationType from './organizationType';
import * as passwordCategory from './passwordCategory';
import * as platform from './platform';
import * as region from './region';
import * as user from './user';
import * as userMetric from './userMetric';
import * as configurationInterface from './configurationInterface';
import * as exportResource from './export';
import * as flexibleAssetField from './flexibleAssetField';
import * as manufacturer from './manufacturer';
import * as flexibleAssetType from './flexibleAssetType';
import * as model from './model';
import * as relatedItem from './relatedItem';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<ITGlue>('resource', i);
		const operation = this.getNodeParameter('operation', i);
		const itglue = {
				resource,
				operation,
		} as ITGlue;

		try {
			switch(itglue.resource) {
				case 'attachment':
					responseData = await attachment[itglue.operation].execute.call(this, i);
					break;
				case 'configuration':
					responseData = await configuration[itglue.operation].execute.call(this, i);
					break;
				case 'configurationInterface':
					responseData = await configurationInterface[itglue.operation].execute.call(this, i);
					break;
				case 'configurationStatus':
					responseData = await configurationStatus[itglue.operation].execute.call(this, i);
					break;
				case 'configurationType':
					responseData = await configurationType[itglue.operation].execute.call(this, i);
					break;
				case 'contactType':
					responseData = await contactType[itglue.operation].execute.call(this, i);
					break;
				case 'country':
					responseData = await country[itglue.operation].execute.call(this, i);
					break;
				case 'document':
				switch (itglue.operation) {
					case 'get':
						responseData = await document.get.execute.call(this, i);
						break;
					case 'getById':
						responseData = await document.getById.execute.call(this, i);
						break;
					case 'create':
						responseData = await document.create.execute.call(this, i);
						break;
					case 'update':
						responseData = await document.update.execute.call(this, i);
						break;
					case 'bulkUpdate':
						responseData = await document.bulkUpdate.execute.call(this, i);
						break;
					case 'publish':
						responseData = await document.publish.execute.call(this, i);
						break;
					case 'delete':
						responseData = await document.delete.execute.call(this, i);
						break;
				}
				break;
				case 'documentSection':
				switch (itglue.operation) {
					case 'get':
						responseData = await documentSection.get.execute.call(this, i);
						break;
					case 'getById':
						responseData = await documentSection.getById.execute.call(this, i);
						break;
					case 'create':
						responseData = await documentSection.create.execute.call(this, i);
						break;
					case 'update':
						responseData = await documentSection.update.execute.call(this, i);
						break;
					case 'delete':
						responseData = await documentSection.delete.execute.call(this, i);
						break;
				}
				break;
				case 'documentImage':
				switch (itglue.operation) {
					case 'getById':
						responseData = await documentImage.getById.execute.call(this, i);
						break;
					case 'create':
						responseData = await documentImage.create.execute.call(this, i);
						break;
					case 'delete':
						responseData = await documentImage.delete.execute.call(this, i);
						break;
				}
				break;
				case 'domain':
					responseData = await domain[itglue.operation].execute.call(this, i);
					break;
				case 'export':
					responseData = await exportResource[itglue.operation].execute.call(this, i);
					break;
				case 'expiration':
					responseData = await expiration[itglue.operation].execute.call(this, i);
					break;
				case 'group':
					responseData = await group[itglue.operation].execute.call(this, i);
					break;
				case 'flexibleAssetField':
					responseData = await flexibleAssetField[itglue.operation].execute.call(this, i);
					break;
				case 'flexibleAssetType':
					responseData = await flexibleAssetType[itglue.operation].execute.call(this, i);
					break;
				case 'location':
					responseData = await location[itglue.operation].execute.call(this, i);
					break;
				case 'manufacturer':
					responseData = await manufacturer[itglue.operation].execute.call(this, i);
					break;
				case 'model':
					responseData = await model[itglue.operation].execute.call(this, i);
					break;
				case 'log':
					responseData = await log[itglue.operation].execute.call(this, i);
					break;
				case 'operatingSystem':
					responseData = await operatingSystem[itglue.operation].execute.call(this, i);
					break;
				case 'organizationStatus':
					responseData = await organizationStatus[itglue.operation].execute.call(this, i);
					break;
				case 'organizationType':
					responseData = await organizationType[itglue.operation].execute.call(this, i);
					break;
				case 'passwordCategory':
					responseData = await passwordCategory[itglue.operation].execute.call(this, i);
					break;
				case 'platform':
					responseData = await platform[itglue.operation].execute.call(this, i);
					break;
				case 'region':
					responseData = await region[itglue.operation].execute.call(this, i);
					break;
				case 'relatedItem':
					responseData = await relatedItem[itglue.operation].execute.call(this, i);
					break;
				case 'user':
					responseData = await user[itglue.operation].execute.call(this, i);
					break;
				case 'userMetric':
					responseData = await userMetric[itglue.operation].execute.call(this, i);
					break;
			case 'organization':
				switch (itglue.operation) {
					case 'deleteOrganization':
						responseData = await organization.deleteOrganization.execute.call(this, i);
						break;
					case 'get':
						responseData = await organization.get.execute.call(this, i);
						break;
					case 'getById':
						responseData = await organization.getById.execute.call(this, i);
						break;
					case 'create':
						responseData = await organization.create.execute.call(this, i);
						break;
					case 'update':
						responseData = await organization.update.execute.call(this, i);
						break;
					case 'bulkUpdate':
						responseData = await organization.bulkUpdate.execute.call(this, i);
						break;
					case 'bulkDestroy':
						responseData = await organization.bulkDestroy.execute.call(this, i);
						break;
				}
				break;
			case 'password':
				switch (itglue.operation) {
					case 'get':
						responseData = await password.get.execute.call(this, i);
						break;
					case 'getById':
						responseData = await password.getById.execute.call(this, i);
						break;
					case 'create':
						responseData = await password.create.execute.call(this, i);
						break;
					case 'update':
						responseData = await password.update.execute.call(this, i);
						break;
					case 'bulkUpdate':
						responseData = await password.bulkUpdate.execute.call(this, i);
						break;
					case 'bulkDestroy':
						responseData = await password.bulkDestroy.execute.call(this, i);
						break;
				case 'delete':
						responseData = await password.deletePassword.execute.call(this, i);
						break;
				}
				break;
			case 'flexibleAsset':
				switch (itglue.operation) {
					case 'get':
						responseData = await flexibleAsset.get.execute.call(this, i);
						break;
					case 'getById':
						responseData = await flexibleAsset.getById.execute.call(this, i);
						break;
					case 'create':
						responseData = await flexibleAsset.create.execute.call(this, i);
						break;
					case 'update':
						responseData = await flexibleAsset.update.execute.call(this, i);
						break;
					case 'bulkDestroy':
						responseData = await flexibleAsset.bulkDestroy.execute.call(this, i);
						break;
				case 'delete':
						responseData = await flexibleAsset.deleteFlexibleAsset.execute.call(this, i);
						break;
				}
				break;
			case 'contact':
				switch (itglue.operation) {
					case 'get':
						responseData = await contact.get.execute.call(this, i);
						break;
					case 'getById':
						responseData = await contact.getById.execute.call(this, i);
						break;
					case 'create':
						responseData = await contact.create.execute.call(this, i);
						break;
					case 'update':
						responseData = await contact.update.execute.call(this, i);
						break;
					case 'bulkUpdate':
						responseData = await contact.bulkUpdate.execute.call(this, i);
						break;
					case 'bulkDestroy':
						responseData = await contact.bulkDestroy.execute.call(this, i);
						break;
					case 'delete':
						responseData = await contact.deleteContact.execute.call(this, i);
						break;
				}
				break;
				default:
					break;
			}

			const executionData = this.helpers.returnJsonArray(responseData);
			operationResult.push(...executionData);
		}
		catch (err) {
				if (this.continueOnFail()) {
						operationResult.push({ json: this.getInputData(i)[0].json, error: err, pairedItem: i });
				} else {
						if (err.context) err.context.itemIndex = i;
						throw err;
				}
		}
	}

	return [operationResult];
}
