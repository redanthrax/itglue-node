import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the attachment to update',
	},
	{
		displayName: 'Attachment Name',
		name: 'attachmentName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Name of the attachment',
	},
	{
		displayName: 'File Data',
		name: 'fileData',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Base64 encoded file data',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const attachmentId = this.getNodeParameter('attachmentId', index) as number;
	const attachmentName = this.getNodeParameter('attachmentName', index) as string;
	const fileData = this.getNodeParameter('fileData', index) as string;

	const body: IDataObject = {
		data: {
			type: 'attachments',
			attributes: {},
		},
	};

	if (attachmentName) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			name: attachmentName,
		};
	}

	if (fileData) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			attachment: fileData,
		};
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`attachments/${attachmentId}`,
		body,
	);

	return responseData;
}