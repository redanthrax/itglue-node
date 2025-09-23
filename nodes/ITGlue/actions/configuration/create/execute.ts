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

	// Add optional fields with proper mapping
	const fieldMapping = {
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