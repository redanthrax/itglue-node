import { DomainProperties } from "../../interfaces";

export const domainGetDescription: DomainProperties = [
	{
		displayName: 'All Domains',
		name: 'alldomains',
		type: 'boolean',
		description: 'Whether to get all domains or just one',
		default: true,
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
				alldomains: [
					true,
				],
			},
		},
		typeOptions: {
			minValue: 1,
		},
	},
];
