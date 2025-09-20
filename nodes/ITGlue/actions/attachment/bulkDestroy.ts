import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Attachment IDs',
		name: 'attachmentIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['bulkDestroy'],
			},
		},
		default: '',
		description: 'Comma-separated list of attachment IDs to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const attachmentIds = this.getNodeParameter('attachmentIds', index) as string;
	const idsArray = attachmentIds.split(',').map(id => parseInt(id.trim(), 10));

	const body: IDataObject = {
		data: idsArray.map(id => ({
			type: 'attachments',
			attributes: {
				id,
			},
		})),
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		'attachments',
		body,
	);

	return responseData;
}