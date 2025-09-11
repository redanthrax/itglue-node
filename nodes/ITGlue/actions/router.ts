import {
		IDataObject,
		IExecuteFunctions,
		INodeExecutionData,
} from 'n8n-workflow';

import { ITGlue } from './interfaces';

import * as configuration from './configuration';
import * as domain from './domain';
import * as organization from './organization';

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
					responseData = await organization[itglue.operation].execute.call(this, i);
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