import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = 'flexible_asset_fields';
	
	const name = this.getNodeParameter('name', index) as string;
	const flexibleAssetTypeId = this.getNodeParameter('flexibleAssetTypeId', index) as string;
	const fieldType = this.getNodeParameter('fieldType', index) as string;
	
	const body = {
		data: {
			type: 'flexible_asset_fields',
			attributes: {
				name: name,
				'flexible-asset-type-id': flexibleAssetTypeId,
				'field-type': fieldType
			}
		}
	} as IDataObject;

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}