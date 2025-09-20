import { PlatformProperties } from "../../interfaces";

export const platformGetByIdDescription: PlatformProperties = [
	{
		displayName: 'Platform ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the platform to retrieve',
		displayOptions: {
			show: {
				resource: ['platform'],
				operation: ['getById'],
			},
		},
	},
];