import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['manufacturer'],
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
				resource: ['manufacturer'],
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
				resource: ['manufacturer'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Manufacturer ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Filter by manufacturer ID',
			},
			{
				displayName: 'Manufacturer Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by manufacturer name',
			},
		],
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index);
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

	const responseData = await itglueRequest.call(this, index, 'GET', 'manufacturers', {}, qs);

	return responseData;
}
