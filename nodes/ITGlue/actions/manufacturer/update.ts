import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Manufacturer ID',
		name: 'manufacturerId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['manufacturer'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the manufacturer to update',
	},
	{
		displayName: 'Manufacturer Name',
		name: 'manufacturerName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['manufacturer'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Name of the manufacturer',
	},
	{
		displayName: 'Website',
		name: 'website',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['manufacturer'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Website of the manufacturer',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const manufacturerId = this.getNodeParameter('manufacturerId', index) as number;
	const manufacturerName = this.getNodeParameter('manufacturerName', index) as string;
	const website = this.getNodeParameter('website', index) as string;

	const body: IDataObject = {
		data: {
			type: 'manufacturers',
			attributes: {},
		},
	};

	if (manufacturerName) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			name: manufacturerName,
		};
	}

	if (website) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			website: website,
		};
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`manufacturers/${manufacturerId}`,
		body,
	);

	return responseData;
}