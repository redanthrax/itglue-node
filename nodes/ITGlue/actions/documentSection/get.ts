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
				resource: ['documentSection'],
				operation: ['get'],
			},
		},
		default: 0,
		description: 'ID of the document to get sections for',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['get'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['get'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Section ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Filter by section ID',
			},
		],
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;
	const returnAll = this.getNodeParameter('returnAll', index);
	const limit = this.getNodeParameter('limit', index, 50) as number;

	const qs: IDataObject = {};

	if (!returnAll) {
		qs['page[size]'] = limit;
	}

	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;

	if (filters.id) {
		qs['filter[id]'] = filters.id;
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		`documents/${documentId}/relationships/document_sections`,
		{},
		qs,
	);

	return responseData;
}
