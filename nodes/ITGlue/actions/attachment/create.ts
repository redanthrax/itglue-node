import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Organization ID to create attachment for',
	},
	{
		displayName: 'Attachment Name',
		name: 'attachmentName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the attachment',
	},
	{
		displayName: 'File Data',
		name: 'fileData',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Base64 encoded file data',
	},
	{
		displayName: 'Filename',
		name: 'filename',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Original filename',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const organizationId = this.getNodeParameter('organizationId', index) as number;
	const attachmentName = this.getNodeParameter('attachmentName', index) as string;
	const fileData = this.getNodeParameter('fileData', index) as string;
	const filename = this.getNodeParameter('filename', index) as string;

	const body: IDataObject = {
		data: {
			type: 'attachments',
			attributes: {
				name: attachmentName,
				attachment_file_name: filename,
				attachment: fileData,
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		`organizations/${organizationId}/relationships/attachments`,
		body,
	);

	return responseData;
}