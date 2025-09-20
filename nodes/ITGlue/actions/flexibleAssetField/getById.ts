import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Flexible Asset Field ID',
		name: 'flexibleAssetFieldId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the flexible asset field to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const flexibleAssetFieldId = this.getNodeParameter('flexibleAssetFieldId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`flexible_asset_fields/${flexibleAssetFieldId}`,
	);

	return responseData;
}