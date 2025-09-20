import { OperatingSystemProperties } from "../../interfaces";

export const operatingSystemGetByIdDescription: OperatingSystemProperties = [
	{
		displayName: 'Operating System ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the operating system to retrieve',
		displayOptions: {
			show: {
				resource: ['operatingSystem'],
				operation: ['getById'],
			},
		},
	},
];