import { CountryProperties } from "../../interfaces";

export const countryGetByIdDescription: CountryProperties = [
	{
		displayName: 'Country ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the country to retrieve',
		displayOptions: {
			show: {
				resource: ['country'],
				operation: ['getById'],
			},
		},
	},
];