import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Manufacturer ID',
		name: 'manufacturerId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['model'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Manufacturer ID for the model',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['model'],
				operation: ['create'],
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
				operation: ['create'],
			},
		},
		default: '',
		description: 'Notes about the model',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const manufacturerId = this.getNodeParameter('manufacturerId', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	const notes = this.getNodeParameter('notes', index) as string;

	const body: IDataObject = {
		data: {
			type: 'models',
			attributes: {
				name: name,
				notes: notes || undefined,
			},
			relationships: {
				manufacturer: {
					data: {
						type: 'manufacturers',
						id: manufacturerId,
					},
				},
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'models',
		body,
	);

	return responseData;
}