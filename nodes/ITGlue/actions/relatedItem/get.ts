import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['relatedItem'],
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
				resource: ['relatedItem'],
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
				resource: ['relatedItem'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Related Item ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Filter by related item ID',
			},
			{
				displayName: 'Resource ID',
				name: 'resource_id',
				type: 'number',
				default: '',
				description: 'Filter by resource ID',
			},
			{
				displayName: 'Resource Type',
				name: 'resource_type',
				type: 'string',
				default: '',
				description: 'Filter by resource type (e.g., configurations, documents)',
			},
		],
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const limit = this.getNodeParameter('limit', index) as number;

	const qs: IDataObject = {};

	if (!returnAll) {
		qs['page[size]'] = limit;
	}

	// Add filters
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;

	if (filters.id) {
		qs['filter[id]'] = filters.id;
	}
	if (filters.resource_id) {
		qs['filter[resource_id]'] = filters.resource_id;
	}
	if (filters.resource_type) {
		qs['filter[resource_type]'] = filters.resource_type;
	}

	const responseData = await itglueRequest.call(this, index, 'GET', 'related_items', {}, qs, {
		paginate: returnAll,
	});

	return responseData;
}
