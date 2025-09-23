import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest, apiRequestAllItems } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index) as IDataObject;
	const options = this.getNodeParameter('options', index) as IDataObject;

	const endpoint = 'organizations';
	const qs: IDataObject = {};

	// Apply filters with proper API parameter names
	if (filters) {
		if (filters.id) {
			qs['filter[id]'] = filters.id;
		}
		if (filters.organization_status_id) {
			qs['filter[organization_status_id]'] = filters.organization_status_id;
		}
		if (filters.organization_type_id) {
			qs['filter[organization_type_id]'] = filters.organization_type_id;
		}
	}

	// Apply options
	if (options.include) {
		qs.include = (options.include as string[]).join(',');
	}

	if (options.sort) {
		qs.sort = options.sort;
	}

	// Handle pagination
	if (returnAll) {
		const responseData = await apiRequestAllItems.call(this, 'GET', endpoint, {}, qs);
		return this.helpers.returnJsonArray(responseData);
	}

	const limit = this.getNodeParameter('limit', index);
	const pageNumber = this.getNodeParameter('pageNumber', index, 1);
	
	qs['page[size]'] = limit;
	qs['page[number]'] = pageNumber;

	const responseData = await apiRequest.call(this, 'GET', endpoint, {}, qs);
	return this.helpers.returnJsonArray(responseData.data ? responseData.data as IDataObject[] : []);
}
