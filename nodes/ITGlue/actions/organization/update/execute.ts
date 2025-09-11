import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function update(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	const body = {} as IDataObject;
	const data = {} as IDataObject;

	//get the org
	const orgid = this.getNodeParameter('orgid', index, 0) as IDataObject;
	const endpoint = `organizations/${orgid}`;

	//construct the patch
	data.type = "organizations";

	//get attributes
	const attributes = this.getNodeParameter('attributes', index, {}) as IDataObject;
	if (Object.keys(attributes).length > 0) {
		data.attributes = {} as IDataObject;
		Object.keys(attributes).map(k => {
			(data.attributes as IDataObject)[k] = attributes[k];
		});
	}

	body.data = data;
	const responseData =
		await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
