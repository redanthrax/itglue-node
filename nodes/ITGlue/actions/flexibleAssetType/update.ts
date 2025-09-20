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
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the flexible asset type to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['flexibleAssetType'],
				operation: ['update'],
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
				operation: ['update'],
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
				operation: ['update'],
			},
		},
		default: '',
		description: 'Icon for the flexible asset type',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const flexibleAssetTypeId = this.getNodeParameter('flexibleAssetTypeId', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	const description = this.getNodeParameter('description', index) as string;
	const icon = this.getNodeParameter('icon', index) as string;

	const body: IDataObject = {
		data: {
			type: 'flexible_asset_types',
			attributes: {},
		},
	};

	if (name) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			name: name,
		};
	}

	if (description) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			description: description,
		};
	}

	if (icon) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			icon: icon,
		};
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`flexible_asset_types/${flexibleAssetTypeId}`,
		body,
	);

	return responseData;
}