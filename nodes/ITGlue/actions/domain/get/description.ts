import { DomainProperties } from "../../interfaces";

export const domainGetDescription: DomainProperties = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		description: 'Whether to return all results or only up to a given limit',
		default: false,
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['get'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['get'],
			},
		},
		options: [
			{
				displayName: 'Domain ID',
				name: 'id',
				type: 'number',
				default: '',
				description: 'Filter by domain ID',
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
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: '',
		description: 'Sort the results',
		displayOptions: {
			show: {
				resource: ['domain'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Created (Ascending)',
				value: 'created_at',
				description: 'Sort by creation date, oldest first',
			},
			{
				name: 'Created (Descending)',
				value: '-created_at',
				description: 'Sort by creation date, newest first',
			},
			{
				name: 'None',
				value: '',
				description: 'No sorting',
			},
			{
				name: 'Updated (Ascending)',
				value: 'updated_at',
				description: 'Sort by update date, oldest first',
			},
			{
				name: 'Updated (Descending)',
				value: '-updated_at',
				description: 'Sort by update date, newest first',
			},
		],
	},
];
