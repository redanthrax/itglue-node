import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the document to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		`documents/${documentId}`,
	);

	return responseData;
}