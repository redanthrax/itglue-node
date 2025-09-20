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
	const returnAll = this.getNodeParameter('returnAll', index, false) as boolean;

	const limit = this.getNodeParameter('limit', index, 50) as number;
	if (!returnAll && limit) {
		qs["page[size]"] = limit;
	}

	// Add filters - only ID and organization_id are supported by the IT Glue domains API
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;

	if (filters.id) {
		qs['filter[id]'] = filters.id;
	}
	if (filters.organization_id) {
		qs['filter[organization_id]'] = filters.organization_id;
	}

	// Add sorting
	const sort = this.getNodeParameter('sort', index, '') as string;
	if (sort) {
		qs['sort'] = sort;
	}
	
	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
