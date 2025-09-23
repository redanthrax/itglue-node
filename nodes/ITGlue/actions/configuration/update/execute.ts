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

	// Add optional fields with proper mapping
	const fieldMapping = {
		name: 'name',
		hostname: 'hostname',
		primaryIp: 'primary-ip',
		macAddress: 'mac-address',
		serialNumber: 'serial-number',
		assetTag: 'asset-tag',
		locationId: 'location-id',
		contactId: 'contact-id',
		manufacturerId: 'manufacturer-id',
		modelId: 'model-id',
		operatingSystemId: 'operating-system-id',
		configurationTypeId: 'configuration-type-id',
		configurationStatusId: 'configuration-status-id',
		notes: 'notes',
		installedBy: 'installed-by',
		warrantyExpiresAt: 'warranty-expires-at',
		purchasedAt: 'purchased-at',
		installedAt: 'installed-at'
	};

	Object.entries(fieldMapping).forEach(([camelField, dashField]) => {
		const value = this.getNodeParameter(camelField, index, '') as string | number;
		if (value !== '' && value !== null && value !== undefined) {
			((body.data as IDataObject).attributes as IDataObject)[dashField] = value;
		}
	});

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}