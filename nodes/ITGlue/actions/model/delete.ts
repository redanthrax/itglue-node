import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Model ID',
		name: 'modelId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['model'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the model to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const modelId = this.getNodeParameter('modelId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		`models/${modelId}`,
	);

	return responseData;
}