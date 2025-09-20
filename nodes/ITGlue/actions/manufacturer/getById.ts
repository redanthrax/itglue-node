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
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the manufacturer to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const manufacturerId = this.getNodeParameter('manufacturerId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`manufacturers/${manufacturerId}`,
	);

	return responseData;
}