import { ContactTypeProperties } from "../../interfaces";

export const contactTypeCreateDescription: ContactTypeProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the contact type',
		displayOptions: {
			show: {
				resource: ['contactType'],
				operation: ['create'],
			},
		},
	},
];