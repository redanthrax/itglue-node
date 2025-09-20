import { ContactTypeProperties } from "../../interfaces";

export const contactTypeGetByIdDescription: ContactTypeProperties = [
	{
		displayName: 'Contact Type ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the contact type to retrieve',
		displayOptions: {
			show: {
				resource: ['contactType'],
				operation: ['getById'],
			},
		},
	},
];