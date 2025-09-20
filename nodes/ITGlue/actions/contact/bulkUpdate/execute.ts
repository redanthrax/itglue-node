import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function bulkUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	const endpoint = 'contacts';
	
	const updates = this.getNodeParameter('updates', index) as Array<{
		id: string,
		firstName?: string,
		lastName?: string,
		title?: string,
		contactTypeId?: string,
		notes?: string,
		email?: string,
		phone?: string
	}>;
	
	const body = {
		data: updates.map(update => {
			const attributes = {} as IDataObject;
			
			if (update.firstName) attributes['first-name'] = update.firstName;
			if (update.lastName) attributes['last-name'] = update.lastName;
			if (update.title) attributes.title = update.title;
			if (update.contactTypeId) attributes['contact-type-id'] = update.contactTypeId;
			if (update.notes) attributes.notes = update.notes;
			if (update.email) attributes.email = update.email;
			if (update.phone) attributes.phone = update.phone;
			
			return {
				type: 'contacts',
				id: update.id,
				attributes: attributes
			};
		})
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}