import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function passwordDelete(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const passwordId = this.getNodeParameter('passwordId', index) as string;

	await apiRequest.call(this, 'DELETE', `/passwords/${passwordId}`);
	
	return this.helpers.returnJsonArray([{ success: true }]);
}