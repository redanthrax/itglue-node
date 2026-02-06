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
				resource: ['documentSection'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the parent document',
	},
	{
		displayName: 'Section ID',
		name: 'sectionId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the document section to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;
	const sectionId = this.getNodeParameter('sectionId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`documents/${documentId}/relationships/sections/${sectionId}`,
	);

	return responseData;
}
