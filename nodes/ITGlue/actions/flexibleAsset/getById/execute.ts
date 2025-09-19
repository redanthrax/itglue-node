import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function flexibleAssetGetById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const flexibleAssetId = this.getNodeParameter('flexibleAssetId', index) as string;
	const options = this.getNodeParameter('options', index) as IDataObject;

	const endpoint = `/flexible_assets/${flexibleAssetId}`;
	const qs: IDataObject = {};

	if (options.include) {
		qs.include = (options.include as string[]).join(',');
	}

	const responseData = await apiRequest.call(this, 'GET', endpoint, {}, qs);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}