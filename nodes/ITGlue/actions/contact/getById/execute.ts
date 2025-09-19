import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function contactGetById(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const contactId = this.getNodeParameter('contactId', index) as string;
	const responseData = await apiRequest.call(this, 'GET', `/contacts/${contactId}`);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}
