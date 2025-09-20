import { ExpirationProperties } from "../../interfaces";

export const expirationGetByIdDescription: ExpirationProperties = [
	{
		displayName: 'Expiration ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the expiration to retrieve',
		displayOptions: {
			show: {
				resource: ['expiration'],
				operation: ['getById'],
			},
		},
	},
];