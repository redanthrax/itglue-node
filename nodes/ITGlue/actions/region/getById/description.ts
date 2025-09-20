import { RegionProperties } from "../../interfaces";

export const regionGetByIdDescription: RegionProperties = [
	{
		displayName: 'Region ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the region to retrieve',
		displayOptions: {
			show: {
				resource: ['region'],
				operation: ['getById'],
			},
		},
	},
];