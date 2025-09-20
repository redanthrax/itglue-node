import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Export ID',
		name: 'exportId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['export'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the export to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const exportId = this.getNodeParameter('exportId', index) as number;

	const responseData = await itglueRequest.call(this, index, 'GET', `exports/${exportId}`);

	return responseData;
}