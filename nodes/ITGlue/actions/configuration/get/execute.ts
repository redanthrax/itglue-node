import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = 'configurations';
	const body = {} as IDataObject;

	// Filter parameters
	const filterParams = [
		'id', 'name', 'organization_id', 'configuration_type_id', 'configuration_status_id',
		'contact_id', 'serial_number', 'asset_tag', 'hostname', 'primary_ip', 'mac_address',
		'manufacturer_id', 'model_id', 'operating_system_id', 'location_id', 'archived'
	];

	filterParams.forEach(param => {
		const value = this.getNodeParameter(`filters.${param}`, index, '') as string | number | boolean;
		if (value !== '' && value !== null && value !== undefined) {
			qs[`filter[${param}]`] = value;
		}
	});

	const limit = this.getNodeParameter('filters.limit', index, 50) as number;
	if (limit && limit > 0) {
		qs["page[size]"] = limit;
	}

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
