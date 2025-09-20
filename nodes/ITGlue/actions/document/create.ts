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
				resource: ['document'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Organization ID to create document for',
	},
	{
		displayName: 'Document Name',
		name: 'documentName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['create'],
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
				operation: ['create'],
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
				operation: ['create'],
			},
		},
		default: 0,
		description: 'ID of the folder to place the document in',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const organizationId = this.getNodeParameter('organizationId', index) as number;
	const documentName = this.getNodeParameter('documentName', index) as string;
	const documentContent = this.getNodeParameter('documentContent', index) as string;
	const folderId = this.getNodeParameter('folderId', index) as number;

	const body: IDataObject = {
		data: {
			type: 'documents',
			attributes: {
				name: documentName,
				content: documentContent,
				folder_id: folderId || undefined,
			},
			relationships: {
				organization: {
					data: {
						type: 'organizations',
						id: organizationId,
					},
				},
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'documents',
		body,
	);

	return responseData;
}