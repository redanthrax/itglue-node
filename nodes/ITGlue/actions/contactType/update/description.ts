import { ContactTypeProperties } from "../../interfaces";

export const contactTypeUpdateDescription: ContactTypeProperties = [
	{
		displayName: 'Contact Type ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the contact type to update',
		displayOptions: {
			show: {
				resource: ['contactType'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The new name for the contact type',
		displayOptions: {
			show: {
				resource: ['contactType'],
				operation: ['update'],
			},
		},
	},
];