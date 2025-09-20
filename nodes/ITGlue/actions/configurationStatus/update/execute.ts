import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	
	const id = this.getNodeParameter('id', index) as string;
	const endpoint = `configuration_statuses/${id}`;
	
	const name = this.getNodeParameter('name', index) as string;
	
	const body = {
		data: {
			type: 'configuration_statuses',
			id: id,
			attributes: {
				name: name
			}
		}
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}