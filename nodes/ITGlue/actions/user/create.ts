import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['create'],
			},
		},
		default: '',
		placeholder: 'name@email.com',
		description: 'Email address of the user',
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'First name of the user',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Last name of the user',
	},
	{
		displayName: 'Role Name',
		name: 'roleName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Role name for the user',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const email = this.getNodeParameter('email', index) as string;
	const firstName = this.getNodeParameter('firstName', index) as string;
	const lastName = this.getNodeParameter('lastName', index) as string;
	const roleName = this.getNodeParameter('roleName', index) as string;

	const body: IDataObject = {
		data: {
			type: 'users',
			attributes: {
				email: email,
				first_name: firstName,
				last_name: lastName,
				role_name: roleName || undefined,
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'users',
		body,
	);

	return responseData;
}