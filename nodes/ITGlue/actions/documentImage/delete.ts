import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Image ID',
		name: 'imageId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentImage'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the document image to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const imageId = this.getNodeParameter('imageId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		`document_images/${imageId}`,
	);

	return responseData;
}
