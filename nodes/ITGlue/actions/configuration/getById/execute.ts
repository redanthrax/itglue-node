import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function getById(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	
	const id = this.getNodeParameter('id', index) as string;
	const endpoint = `configurations/${id}`;
	const body = {} as IDataObject;

	// Handle include parameter for related data
	const include = this.getNodeParameter('include', index, []) as string[];
	if (include.length > 0) {
		qs.include = include.join(',');
	}

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
