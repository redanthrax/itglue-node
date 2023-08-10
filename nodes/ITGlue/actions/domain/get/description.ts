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
]