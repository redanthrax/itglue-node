import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Target Type',
		name: 'targetType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentImage'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Gallery',
				value: 'gallery',
			},
			{
				name: 'Document (Inline)',
				value: 'document',
			},
		],
		default: 'gallery',
		description: 'Whether the image is for a gallery section or inline in a document',
	},
	{
		displayName: 'Target ID',
		name: 'targetId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentImage'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'ID of the gallery or document to attach the image to',
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
	const targetType = this.getNodeParameter('targetType', index) as string;
	const targetId = this.getNodeParameter('targetId', index) as number;
	const imageContent = this.getNodeParameter('imageContent', index) as string;
	const fileName = this.getNodeParameter('fileName', index) as string;

	const body: IDataObject = {
		data: {
			type: 'document-images',
			attributes: {
				target: {
					type: targetType,
					id: targetId,
				},
				image: {
					content: imageContent,
					'file-name': fileName,
				},
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'document_images',
		body,
	);

	return responseData;
}
