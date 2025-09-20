import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function bulkDestroy(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'DELETE';
	const endpoint = 'passwords';
	
	const ids = this.getNodeParameter('ids', index) as string[];
	
	const body = {
		data: ids.map(id => ({
			type: 'passwords',
			id: id
		}))
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}