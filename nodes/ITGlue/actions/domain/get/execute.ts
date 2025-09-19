import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const body = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = 'domains';
	const alldomains = this.getNodeParameter('alldomains', index, true) as boolean;

	const limit = this.getNodeParameter('limit', index, 50) as number;
	if (alldomains && limit) {
		qs["page[size]"] = limit;
	}
	
	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}