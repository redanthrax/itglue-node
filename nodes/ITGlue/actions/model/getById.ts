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
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'ID of the model to retrieve',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const modelId = this.getNodeParameter('modelId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`models/${modelId}`,
	);

	return responseData;
}