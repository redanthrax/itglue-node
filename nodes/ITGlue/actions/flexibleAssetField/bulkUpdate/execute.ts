import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function bulkUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	const endpoint = 'flexible_asset_fields';
	
	const updates = this.getNodeParameter('updates', index) as Array<{id: string, name: string}>;
	
	const body = {
		data: updates.map(update => ({
			type: 'flexible_asset_fields',
			id: update.id,
			attributes: {
				name: update.name
			}
		}))
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}