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
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the location to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const locationId = this.getNodeParameter('locationId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		`locations/${locationId}`,
	);

	return responseData;
}