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
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		description: 'Fields to update (only specified fields will be changed)',
		displayOptions: {
			show: {
				resource: ['contactType'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the contact type',
			},
		],
	},
];
