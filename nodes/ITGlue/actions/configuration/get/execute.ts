import { IExecuteFunctions } from "n8n-core";
import { IDataObject, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	let endpoint = 'configurations';
	const body = {} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}