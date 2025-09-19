import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function deleteOrganization(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'DELETE';
	const body = {} as IDataObject;

	const orgid = this.getNodeParameter('orgid', index) as number;
	const endpoint = `organizations/${orgid}`;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}