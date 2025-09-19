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
				case 'configuration':
					responseData = await configuration[itglue.operation].execute.call(this, i);
					break;
				case 'domain':
					responseData = await domain[itglue.operation].execute.call(this, i);
					break;
			case 'organization':
				switch (itglue.operation) {
					case 'deleteOrganization':
						responseData = await organization.deleteOrganization.execute.call(this, i);
						break;
					case 'get':
						responseData = await organization.get.execute.call(this, i);
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
						operationResult.push({ json: this.getInputData(i)[0].json, error: err });
				} else {
						if (err.context) err.context.itemIndex = i;
						throw err;
				}
		}
	}

	return [operationResult];
}