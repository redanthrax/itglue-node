import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['location'],
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
				resource: ['location'],
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
				resource: ['location'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'Filter by city name',
			},
			{
				displayName: 'Location ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Filter by location ID',
			},
			{
				displayName: 'Location Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by location name',
			},
			{
				displayName: 'Organization ID',
				name: 'organization_id',
				type: 'number',
				default: '',
				description: 'Filter by organization ID',
			},
		],
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const limit = this.getNodeParameter('limit', index, 50) as number;

	const qs: IDataObject = {};

	if (!returnAll) {
		qs['page[size]'] = limit;
	}

	// Add filters
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;

	if (filters.id) {
		qs['filter[id]'] = filters.id;
	}
	if (filters.name) {
		qs['filter[name]'] = filters.name;
	}
	if (filters.organization_id) {
		qs['filter[organization_id]'] = filters.organization_id;
	}
	if (filters.city) {
		qs['filter[city]'] = filters.city;
	}

	const responseData = await itglueRequest.call(this, index, 'GET', 'locations', {}, qs, {
		paginate: returnAll,
	});

	return responseData;
}
