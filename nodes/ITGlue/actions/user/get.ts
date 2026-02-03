import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['user'],
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
				resource: ['user'],
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
				resource: ['user'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'name@email.com',
				description: 'Filter by email address',
			},
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				default: '',
				description: 'Filter by first name',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
				description: 'Filter by last name',
			},
			{
				displayName: 'Role Name',
				name: 'role_name',
				type: 'string',
				default: '',
				description: 'Filter by role name',
			},
			{
				displayName: 'User ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Filter by user ID',
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
	if (filters.email) {
		qs['filter[email]'] = filters.email;
	}
	if (filters.first_name) {
		qs['filter[first_name]'] = filters.first_name;
	}
	if (filters.last_name) {
		qs['filter[last_name]'] = filters.last_name;
	}
	if (filters.role_name) {
		qs['filter[role_name]'] = filters.role_name;
	}

	const responseData = await itglueRequest.call(this, index, 'GET', 'accounts/users', {}, qs, {
		paginate: returnAll,
	});

	return responseData;
}
