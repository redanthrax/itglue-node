import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['log'],
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
				resource: ['log'],
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
				resource: ['log'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Resource Type',
				name: 'resource_type',
				type: 'string',
				default: '',
				description: 'Filter by resource type (e.g., Configuration, Organization)',
			},
			{
				displayName: 'Organization ID',
				name: 'organization_id',
				type: 'number',
				default: '',
				description: 'Filter by organization ID',
			},
			{
				displayName: 'User ID',
				name: 'user_id',
				type: 'number',
				default: '',
				description: 'Filter by user ID',
			},
			{
				displayName: 'Created Since',
				name: 'created_at',
				type: 'dateTime',
				default: '',
				description: 'Filter by logs created since this date',
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

	if (filters.resource_type) {
		qs['filter[resource_type]'] = filters.resource_type;
	}
	if (filters.organization_id) {
		qs['filter[organization_id]'] = filters.organization_id;
	}
	if (filters.user_id) {
		qs['filter[user_id]'] = filters.user_id;
	}
	if (filters.created_at) {
		qs['filter[created_at]'] = filters.created_at;
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		'logs',
		{},
		qs,
	);

	return responseData;
}
