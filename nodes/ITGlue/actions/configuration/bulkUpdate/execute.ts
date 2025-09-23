import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function bulkUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	const endpoint = 'configurations';
	
	const updates = this.getNodeParameter('updates', index) as Array<{
		id: string,
		name?: string,
		hostname?: string,
		primaryIp?: string,
		macAddress?: string,
		serialNumber?: string,
		assetTag?: string,
		configurationStatusId?: number,
		contactId?: number,
		locationId?: number,
		notes?: string
	}>;
	
	const fieldMapping = {
		name: 'name',
		hostname: 'hostname',
		primaryIp: 'primary-ip',
		macAddress: 'mac-address',
		serialNumber: 'serial-number',
		assetTag: 'asset-tag',
		configurationStatusId: 'configuration-status-id',
		contactId: 'contact-id',
		locationId: 'location-id',
		notes: 'notes'
	};
	
	const body = {
		data: updates.map(update => {
			const attributes = {} as IDataObject;
			
			Object.entries(fieldMapping).forEach(([camelField, dashField]) => {
				const value = (update as any)[camelField];
				if (value !== undefined && value !== '' && value !== null) {
					attributes[dashField] = value;
				}
			});
			
			return {
				type: 'configurations',
				id: update.id,
				attributes: attributes
			};
		})
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}