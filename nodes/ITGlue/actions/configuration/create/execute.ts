import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = 'configurations';
	
	const organizationId = this.getNodeParameter('organizationId', index) as string;
	const configurationTypeId = this.getNodeParameter('configurationTypeId', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	
	const body = {
		data: {
			type: 'configurations',
			attributes: {
				'organization-id': organizationId,
				'configuration-type-id': configurationTypeId,
				name: name
			}
		}
	} as IDataObject;

	// Add optional fields
	const optionalFields = [
		'hostname', 'primary-ip', 'mac-address', 'serial-number', 'asset-tag',
		'location-id', 'contact-id', 'manufacturer-id', 'model-id', 'operating-system-id',
		'configuration-status-id', 'notes', 'installed-by', 'warranty-expires-at',
		'purchased-at', 'installed-at'
	];

	optionalFields.forEach(field => {
		const camelCaseField = field.replace(/-./g, (match) => match[1].toUpperCase());
		const value = this.getNodeParameter(camelCaseField, index, '') as string;
		if (value) {
			((body.data as IDataObject).attributes as IDataObject)[field] = value;
		}
	});

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}