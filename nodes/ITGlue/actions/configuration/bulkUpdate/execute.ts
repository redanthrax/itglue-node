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
		notes?: string
	}>;
	
	const body = {
		data: updates.map(update => {
			const attributes = {} as IDataObject;
			
			if (update.name) attributes.name = update.name;
			if (update.hostname) attributes.hostname = update.hostname;
			if (update.primaryIp) attributes['primary-ip'] = update.primaryIp;
			if (update.notes) attributes.notes = update.notes;
			
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