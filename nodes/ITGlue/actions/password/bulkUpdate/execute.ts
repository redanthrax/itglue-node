import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function bulkUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	const endpoint = 'passwords';
	
	const updates = this.getNodeParameter('updates', index) as Array<{
		id: string,
		name?: string,
		username?: string,
		password?: string,
		url?: string,
		notes?: string,
		passwordCategoryId?: string,
		organizationId?: string,
		resourceId?: string,
		resourceType?: string
	}>;
	
	const body = {
		data: updates.map(update => {
			const attributes = {} as IDataObject;
			
			if (update.name) attributes.name = update.name;
			if (update.username) attributes.username = update.username;
			if (update.password) attributes.password = update.password;
			if (update.url) attributes.url = update.url;
			if (update.notes) attributes.notes = update.notes;
			if (update.passwordCategoryId) attributes['password-category-id'] = update.passwordCategoryId;
			if (update.organizationId) attributes['organization-id'] = update.organizationId;
			if (update.resourceId) attributes['resource-id'] = update.resourceId;
			if (update.resourceType) attributes['resource-type'] = update.resourceType;
			
			return {
				type: 'passwords',
				id: update.id,
				attributes: attributes
			};
		})
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}