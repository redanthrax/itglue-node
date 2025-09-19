import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function contactUpdate(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const contactId = this.getNodeParameter('contactId', index) as string;
	const body: IDataObject = { data: { type: 'contacts', attributes: {} } };
	const responseData = await apiRequest.call(this, 'PATCH', `/contacts/${contactId}`, body);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}
