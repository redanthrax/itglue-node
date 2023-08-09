import { IExecuteFunctions } from "n8n-core";
import { IDataObject, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	let endpoint = 'organizations';
	const body = {} as IDataObject;
	const allorgs = this.getNodeParameter('allorgs', index, {}) as IDataObject;
	if(!allorgs) {
		const orgid = this.getNodeParameter('orgid', index, 0) as IDataObject;
		endpoint = `organizations/${orgid}`
	}

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
