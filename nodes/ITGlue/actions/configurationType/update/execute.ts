import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	
	const id = this.getNodeParameter('id', index) as string;
	const endpoint = `configuration_types/${id}`;
	
	const body = {
		data: {
			type: 'configuration_types',
			attributes: {}
		}
	} as IDataObject;

	// Get the update fields collection
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	// Only add fields that are specified in updateFields
	Object.entries(updateFields).forEach(([field, value]) => {
		if (value !== '' && value !== null && value !== undefined) {
			((body.data as IDataObject).attributes as IDataObject)[field] = value;
		}
	});

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
