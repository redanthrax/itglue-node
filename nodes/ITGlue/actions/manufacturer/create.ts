import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Manufacturer Name',
		name: 'manufacturerName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['manufacturer'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the manufacturer',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const manufacturerName = this.getNodeParameter('manufacturerName', index) as string;

	const body: IDataObject = {
		data: {
			type: 'manufacturers',
			attributes: {
				name: manufacturerName,
			},
		},
	};

	const responseData = await itglueRequest.call(this, index, 'POST', 'manufacturers', body);

	return responseData;
}