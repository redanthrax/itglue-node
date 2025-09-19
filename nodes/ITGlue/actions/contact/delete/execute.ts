import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function contactDelete(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const contactId = this.getNodeParameter('contactId', index) as string;
	await apiRequest.call(this, 'DELETE', `/contacts/${contactId}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}
