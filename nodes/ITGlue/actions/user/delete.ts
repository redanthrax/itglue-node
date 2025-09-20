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
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the user to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const userId = this.getNodeParameter('userId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		`users/${userId}`,
	);

	return responseData;
}