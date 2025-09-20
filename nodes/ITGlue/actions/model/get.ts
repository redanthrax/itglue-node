import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['model'],
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
				resource: ['model'],
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
				resource: ['model'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Manufacturer ID',
				name: 'manufacturer_id',
				type: 'number',
				default: '',
				description: 'Filter by manufacturer ID',
			},
			{
				displayName: 'Model ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Filter by model ID',
			},
			{
				displayName: 'Model Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by model name',
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
	if (filters.name) {
		qs['filter[name]'] = filters.name;
	}
	if (filters.manufacturer_id) {
		qs['filter[manufacturer_id]'] = filters.manufacturer_id;
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		'models',
		{},
		qs,
	);

	return responseData;
}
