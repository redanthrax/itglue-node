import { PasswordCategoryProperties } from "../../interfaces";

export const passwordCategoryCreateDescription: PasswordCategoryProperties = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the password category',
		displayOptions: {
			show: {
				resource: ['passwordCategory'],
				operation: ['create'],
			},
		},
	},
];