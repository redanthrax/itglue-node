import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function flexibleAssetDelete(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const flexibleAssetId = this.getNodeParameter('flexibleAssetId', index) as string;

	await apiRequest.call(this, 'DELETE', `/flexible_assets/${flexibleAssetId}`);
	
	return this.helpers.returnJsonArray([{ success: true }]);
}