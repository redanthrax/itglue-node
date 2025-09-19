import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function flexibleAssetUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const flexibleAssetId = this.getNodeParameter('flexibleAssetId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {
		data: {
			type: 'flexible_assets',
			attributes: {},
		},
	};

	const data = body.data as IDataObject;
	const attributes = data.attributes as IDataObject;

	if (updateFields.name) {
		attributes.name = updateFields.name;
	}

	if (updateFields.notes) {
		attributes.notes = updateFields.notes;
	}

	if (updateFields.restricted !== undefined) {
		attributes.restricted = updateFields.restricted;
	}

	if (updateFields.traits) {
		attributes.traits = JSON.parse(updateFields.traits as string);
	}

	const responseData = await apiRequest.call(this, 'PATCH', `/flexible_assets/${flexibleAssetId}`, body);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}