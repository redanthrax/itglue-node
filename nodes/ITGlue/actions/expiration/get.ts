import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['expiration'],
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
				resource: ['expiration'],
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
				resource: ['expiration'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Organization ID',
				name: 'organization_id',
				type: 'number',
				default: '',
				description: 'Filter by organization ID',
			},
			{
				displayName: 'Resource Type',
				name: 'resource_type',
				type: 'string',
				default: '',
				description: 'Filter by resource type (e.g., domains, ssl_certificates)',
			},
			{
				displayName: 'Expiring After',
				name: 'expires_at_from',
				type: 'dateTime',
				default: '',
				description: 'Filter by items expiring after this date',
			},
			{
				displayName: 'Expiring Before',
				name: 'expires_at_to',
				type: 'dateTime',
				default: '',
				description: 'Filter by items expiring before this date',
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

	if (filters.organization_id) {
		qs['filter[organization_id]'] = filters.organization_id;
	}
	if (filters.resource_type) {
		qs['filter[resource_type]'] = filters.resource_type;
	}
	if (filters.expires_at_from) {
		qs['filter[expires_at]'] = filters.expires_at_from;
	}
	if (filters.expires_at_to) {
		qs['filter[expires_at_to]'] = filters.expires_at_to;
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		'expirations',
		{},
		qs,
	);

	return responseData;
}
