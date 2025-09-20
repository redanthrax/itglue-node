import { PasswordCategoryProperties } from "../../interfaces";

export const passwordCategoryUpdateDescription: PasswordCategoryProperties = [
	{
		displayName: 'Password Category ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the password category to update',
		displayOptions: {
			show: {
				resource: ['passwordCategory'],
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
		description: 'The new name for the password category',
		displayOptions: {
			show: {
				resource: ['passwordCategory'],
				operation: ['update'],
			},
		},
	},
];