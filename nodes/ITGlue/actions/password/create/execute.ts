import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function passwordCreate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const username = this.getNodeParameter('username', index) as string;
	const password = this.getNodeParameter('password', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: IDataObject = {
		data: {
			type: 'passwords',
			attributes: {
				name,
				username,
				password,
				'organization-id': organizationId,
			},
		},
	};

	const data = body.data as IDataObject;
	const attributes = data.attributes as IDataObject;

	if (additionalFields.password_category_id) {
		attributes['password-category-id'] = additionalFields.password_category_id;
	}

	if (additionalFields.url) {
		attributes.url = additionalFields.url;
	}

	if (additionalFields.notes) {
		attributes.notes = additionalFields.notes;
	}

	if (additionalFields.restricted !== undefined) {
		attributes.restricted = additionalFields.restricted;
	}

	if (additionalFields.show_password !== undefined) {
		attributes['show-password'] = additionalFields.show_password;
	}

	const responseData = await apiRequest.call(this, 'POST', '/passwords', body);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}