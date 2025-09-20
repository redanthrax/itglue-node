import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	
	const id = this.getNodeParameter('id', index) as string;
	const endpoint = `configurations/${id}`;
	
	const body = {
		data: {
			type: 'configurations',
			id: id,
			attributes: {}
		}
	} as IDataObject;

	// Add optional fields
	const optionalFields = [
		'name', 'hostname', 'primaryIp', 'macAddress', 'serialNumber', 'assetTag',
		'locationId', 'contactId', 'manufacturerId', 'modelId', 'operatingSystemId',
		'configurationStatusId', 'notes', 'installedBy', 'warrantyExpiresAt',
		'purchasedAt', 'installedAt'
	];

	optionalFields.forEach(field => {
		const dashField = field.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
		const value = this.getNodeParameter(field, index, '') as string;
		if (value) {
			((body.data as IDataObject).attributes as IDataObject)[dashField] = value;
		}
	});

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}