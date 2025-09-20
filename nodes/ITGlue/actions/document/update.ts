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
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the document to update',
	},
	{
		displayName: 'Document Name',
		name: 'documentName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Name of the document',
	},
	{
		displayName: 'Document Content',
		name: 'documentContent',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Content of the document',
	},
	{
		displayName: 'Folder ID',
		name: 'folderId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the folder to place the document in',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;
	const documentName = this.getNodeParameter('documentName', index) as string;
	const documentContent = this.getNodeParameter('documentContent', index) as string;
	const folderId = this.getNodeParameter('folderId', index) as number;

	const body: IDataObject = {
		data: {
			type: 'documents',
			attributes: {},
		},
	};

	if (documentName) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			name: documentName,
		};
	}

	if (documentContent) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			content: documentContent,
		};
	}

	if (folderId) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			folder_id: folderId,
		};
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`documents/${documentId}`,
		body,
	);

	return responseData;
}