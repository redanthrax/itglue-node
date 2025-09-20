import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'locationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['location'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the location to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const locationId = this.getNodeParameter('locationId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`locations/${locationId}`,
	);

	return responseData;
}