import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function passwordGetById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const passwordId = this.getNodeParameter('passwordId', index) as string;
	const options = this.getNodeParameter('options', index) as IDataObject;

	const endpoint = `/passwords/${passwordId}`;
	const qs: IDataObject = {};

	if (options.include) {
		qs.include = (options.include as string[]).join(',');
	}

	const responseData = await apiRequest.call(this, 'GET', endpoint, {}, qs);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}