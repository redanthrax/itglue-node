import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the user to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const userId = this.getNodeParameter('userId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`users/${userId}`,
	);

	return responseData;
}