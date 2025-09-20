import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['flexibleAssetType'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the flexible asset type',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: {
				resource: ['flexibleAssetType'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Description of the flexible asset type',
	},
	{
		displayName: 'Icon',
		name: 'icon',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAssetType'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Icon for the flexible asset type',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const name = this.getNodeParameter('name', index) as string;
	const description = this.getNodeParameter('description', index) as string;
	const icon = this.getNodeParameter('icon', index) as string;

	const body: IDataObject = {
		data: {
			type: 'flexible_asset_types',
			attributes: {
				name: name,
				description: description || undefined,
				icon: icon || undefined,
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'flexible_asset_types',
		body,
	);

	return responseData;
}