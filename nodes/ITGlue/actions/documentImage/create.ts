import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Document Section ID',
		name: 'documentSectionId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentImage'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'ID of the document section to upload the image to',
	},
	{
		displayName: 'Image Content (Base64)',
		name: 'imageContent',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentImage'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Base64-encoded image content',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentImage'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'File name for the image (e.g. image.png)',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentSectionId = this.getNodeParameter('documentSectionId', index) as number;
	const imageContent = this.getNodeParameter('imageContent', index) as string;
	const fileName = this.getNodeParameter('fileName', index) as string;

	const body: IDataObject = {
		data: {
			type: 'document_images',
			attributes: {
				image: {
					content: imageContent,
					file_name: fileName,
				},
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		`document_sections/${documentSectionId}/relationships/document_images`,
		body,
	);

	return responseData;
}
