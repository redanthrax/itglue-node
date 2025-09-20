import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Related Item ID',
		name: 'relatedItemId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the related item to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const relatedItemId = this.getNodeParameter('relatedItemId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		`related_items/${relatedItemId}`,
	);

	return responseData;
}