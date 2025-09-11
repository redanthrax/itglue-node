import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	let endpoint = 'organizations';
	const body = {} as IDataObject;
	let data = {} as IDataObject;
	data.type = "organizations";

	//set attributes
	const attributes = {} as IDataObject;
	attributes.name = this.getNodeParameter('name', index) as string;
	attributes.alert = this.getNodeParameter('alert', index) as string;
	attributes.description = this.getNodeParameter('description', index) as string;
	attributes["organization-type-id"] = this.getNodeParameter('forgtype', index) as string;
	attributes["organization-status-id"] = this.getNodeParameter('forgstatus', index) as string;
	data.attributes = attributes;

	//set body data
	body.data = data;
	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}