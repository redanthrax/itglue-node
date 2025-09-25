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
			attributes: {}
		}
	} as IDataObject;

	// Get the update fields collection
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	// Map camelCase to dash-case for API attributes
	const fieldMapping: { [key: string]: string } = {
		archived: 'archived',
		assetTag: 'asset_tag',
		configurationStatusId: 'configuration_status_id',
		configurationTypeId: 'configuration_type_id',
		contactId: 'contact_id',
		defaultGateway: 'default_gateway',
		hostname: 'hostname',
		installedAt: 'installed_at',
		installedBy: 'installed_by',
		locationId: 'location_id',
		macAddress: 'mac_address',
		manufacturerId: 'manufacturer_id',
		mitpDeviceExpirationDate: 'mitp_device_expiration_date',
		mitpEndOfLifeDate: 'mitp_end_of_life_date',
		modelId: 'model_id',
		name: 'name',
		notes: 'notes',
		operatingSystemId: 'operating_system_id',
		operatingSystemNotes: 'operating_system_notes',
		organizationId: 'organization_id',
		position: 'position',
		primaryIp: 'primary_ip',
		purchasedAt: 'purchased_at',
		purchasedBy: 'purchased_by',
		restricted: 'restricted',
		serialNumber: 'serial_number',
		warrantyExpiresAt: 'warranty_expires_at'
	};

	// Only add fields that are specified in updateFields
	Object.entries(updateFields).forEach(([camelField, value]) => {
		if (value !== '' && value !== null && value !== undefined) {
			const apiField = fieldMapping[camelField];
			if (apiField) {
				((body.data as IDataObject).attributes as IDataObject)[apiField] = value;
			}
		}
	});

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
