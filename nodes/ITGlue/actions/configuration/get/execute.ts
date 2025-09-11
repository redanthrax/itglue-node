import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	let endpoint = 'configurations';
	const body = {} as IDataObject;

	qs['filter[id]'] = this.getNodeParameter('filters.id', index, {}) as IDataObject;
	qs['filter[name]'] = this.getNodeParameter('filters.name', index, {}) as IDataObject;
	qs['filter[organization_id]'] = this.getNodeParameter('filters.organization_id', index, {}) as IDataObject;
	qs['filter[configuration_type_id]'] = this.getNodeParameter('filters.configuration_type_id', index, {}) as IDataObject;
	qs['filter[configuration_status_id]'] = this.getNodeParameter('filters.configuration_status_id', index, {}) as IDataObject;
	qs['filter[contact_id]'] = this.getNodeParameter('filters.contact_id', index, {}) as IDataObject;
	qs['filter[serial_number]'] = this.getNodeParameter('filters.serial_number', index, {}) as IDataObject;
	qs['filter[asset_tag]'] = this.getNodeParameter('filters.asset_tag', index, {}) as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}