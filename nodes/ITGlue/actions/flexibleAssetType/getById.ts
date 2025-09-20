import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Flexible Asset Type ID',
		name: 'flexibleAssetTypeId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['flexibleAssetType'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the flexible asset type to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const flexibleAssetTypeId = this.getNodeParameter('flexibleAssetTypeId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`flexible_asset_types/${flexibleAssetTypeId}`,
	);

	return responseData;
}