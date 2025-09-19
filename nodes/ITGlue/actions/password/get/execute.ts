import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest, apiRequestAllItems } from '../../../transport';

export async function passwordGet(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index) as IDataObject;
	const options = this.getNodeParameter('options', index) as IDataObject;

	const endpoint = '/passwords';
	const qs: IDataObject = {};

	if (filters) {
		Object.assign(qs, filters);
	}

	if (options.include) {
		qs.include = (options.include as string[]).join(',');
	}

	if (options.sort) {
		qs.sort = options.sort;
	}

	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, 'GET', endpoint, {}, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const limit = this.getNodeParameter('limit', index);
	qs['page[size]'] = limit;

	const responseData = await apiRequest.call(this, 'GET', endpoint, {}, qs);
	return this.helpers.returnJsonArray(responseData.data ? responseData.data as IDataObject[] : []);
}