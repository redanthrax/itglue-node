import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function flexibleAssetCreate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', index) as string;
	const flexibleAssetTypeId = this.getNodeParameter('flexibleAssetTypeId', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const traits = this.getNodeParameter('traits', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		data: {
			type: 'flexible_assets',
			attributes: {
				name,
				'organization-id': organizationId,
				'flexible-asset-type-id': flexibleAssetTypeId,
				traits: JSON.parse(traits),
			},
		},
	};

	const data = body.data as IDataObject;
	const attributes = data.attributes as IDataObject;

	if (additionalFields.notes) {
		attributes.notes = additionalFields.notes;
	}

	if (additionalFields.restricted !== undefined) {
		attributes.restricted = additionalFields.restricted;
	}

	const responseData = await apiRequest.call(this, 'POST', '/flexible_assets', body);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}