import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function bulkUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	const endpoint = 'documents';
	
	const updates = this.getNodeParameter('updates', index) as Array<{
		id: string,
		name?: string,
		content?: string,
		notes?: string
	}>;
	
	const body = {
		data: updates.map(update => {
			const attributes = {} as IDataObject;
			
			if (update.name) attributes.name = update.name;
			if (update.content) attributes.content = update.content;
			if (update.notes) attributes.notes = update.notes;
			
			return {
				type: 'documents',
				id: update.id,
				attributes: attributes
			};
		})
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
