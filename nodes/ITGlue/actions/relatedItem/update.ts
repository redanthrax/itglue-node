import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Related Item ID',
		name: 'relatedItemId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the related item to update',
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
				resource: ['relatedItem'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Notes about the relationship',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const relatedItemId = this.getNodeParameter('relatedItemId', index) as number;
	const notes = this.getNodeParameter('notes', index) as string;

	const body: IDataObject = {
		data: {
			type: 'related_items',
			attributes: {},
		},
	};

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
		`related_items/${relatedItemId}`,
		body,
	);

	return responseData;
}