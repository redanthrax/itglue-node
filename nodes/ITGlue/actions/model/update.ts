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
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the model to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['model'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Name of the model',
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: {
				resource: ['model'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Notes about the model',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const modelId = this.getNodeParameter('modelId', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	const notes = this.getNodeParameter('notes', index) as string;

	const body: IDataObject = {
		data: {
			type: 'models',
			attributes: {},
		},
	};

	if (name) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			name: name,
		};
	}

	if (notes) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			notes: notes,
		};
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`models/${modelId}`,
		body,
	);

	return responseData;
}