import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { apiRequest, apiRequestAllItems } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index);
	const filters = this.getNodeParameter('filters', index) as IDataObject;
	const options = this.getNodeParameter('options', index) as IDataObject;

	const endpoint = 'configurations';
	const qs: IDataObject = {};

	// Apply filters with proper API parameter names
	if (filters) {
		if (filters.id) {
			qs['filter[id]'] = filters.id;
		}
		if (filters.name) {
			qs['filter[name]'] = filters.name;
		}
		if (filters.organization_id) {
			qs['filter[organization_id]'] = filters.organization_id;
		}
		if (filters.configuration_type_id) {
			qs['filter[configuration_type_id]'] = filters.configuration_type_id;
		}
		if (filters.configuration_status_id) {
			qs['filter[configuration_status_id]'] = filters.configuration_status_id;
		}
		if (filters.contact_id) {
			qs['filter[contact_id]'] = filters.contact_id;
		}
		if (filters.serial_number) {
			qs['filter[serial_number]'] = filters.serial_number;
		}
		if (filters.mac_address) {
			qs['filter[mac_address]'] = filters.mac_address;
		}
		if (filters.asset_tag) {
			qs['filter[asset_tag]'] = filters.asset_tag;
		}
		if (filters.psa_id) {
			qs['filter[psa_id]'] = filters.psa_id;
		}
		if (filters.psa_integration_type) {
			qs['filter[psa_integration_type]'] = filters.psa_integration_type;
		}
		if (filters.rmm_id) {
			qs['filter[rmm_id]'] = filters.rmm_id;
		}
		if (filters.rmm_integration_type) {
			qs['filter[rmm_integration_type]'] = filters.rmm_integration_type;
		}
		if (filters.archived !== undefined && filters.archived !== '') {
			qs['filter[archived]'] = filters.archived;
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
