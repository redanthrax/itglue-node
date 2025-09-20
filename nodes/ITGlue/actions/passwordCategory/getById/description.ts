import { PasswordCategoryProperties } from "../../interfaces";

export const passwordCategoryGetByIdDescription: PasswordCategoryProperties = [
	{
		displayName: 'Password Category ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the password category to retrieve',
		displayOptions: {
			show: {
				resource: ['passwordCategory'],
				operation: ['getById'],
			},
		},
	},
];