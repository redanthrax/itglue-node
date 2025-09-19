import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function get(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	let endpoint = 'organizations';
	const body = {} as IDataObject;

	//handle scenarios
	const allorgs = this.getNodeParameter('allorgs', index, {}) as IDataObject;
	if(!allorgs) {
		const orgid = this.getNodeParameter('orgid', index, 0) as IDataObject;
		endpoint = `organizations/${orgid}`;
	}

	//filtering
	const forgid = this.getNodeParameter('filters.forgid', index, {}) as IDataObject;
	qs["filter[id]"] = forgid;

	const forgname = this.getNodeParameter('filters.forgname', index, {}) as IDataObject;
	qs["filter[name]"] = forgname;

	const orgtype = this.getNodeParameter('filters.forgtype', index, {}) as IDataObject;
	qs["filter[organization_type_id]"] = orgtype;

	const orgstatus = this.getNodeParameter('filters.forgstatus', index, {}) as IDataObject;
	qs["filter[organization_status_id]"] = orgstatus;

	const limit = this.getNodeParameter('filters.limit', index, 50) as number;
	if (allorgs && limit) {
		qs["page[size]"] = limit;
	}

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
