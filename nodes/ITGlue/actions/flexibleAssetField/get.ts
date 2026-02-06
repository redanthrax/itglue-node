import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['get'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['get'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Flexible Asset Type ID',
		name: 'flexibleAssetTypeId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['flexibleAssetField'],
				operation: ['get'],
			},
		},
		default: 0,
		description: 'Filter fields by flexible asset type ID',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const limit = this.getNodeParameter('limit', index, 50) as number;
	const flexibleAssetTypeId = this.getNodeParameter('flexibleAssetTypeId', index) as number;

	const qs: IDataObject = {};

	if (!returnAll) {
		qs['page[size]'] = limit;
	}

	if (flexibleAssetTypeId) {
		qs['filter[flexible_asset_type_id]'] = flexibleAssetTypeId;
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		'flexible_asset_fields',
		{},
		qs,
		{ paginate: returnAll },
	);

	return responseData;
}
