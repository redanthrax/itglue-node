import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function passwordUpdate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const passwordId = this.getNodeParameter('passwordId', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	const body: IDataObject = {
		data: {
			type: 'passwords',
			attributes: {},
		},
	};

	const data = body.data as IDataObject;
	const attributes = data.attributes as IDataObject;

	if (updateFields.name) {
		attributes.name = updateFields.name;
	}

	if (updateFields.username) {
		attributes.username = updateFields.username;
	}

	if (updateFields.password) {
		attributes.password = updateFields.password;
	}

	if (updateFields.password_category_id) {
		attributes['password-category-id'] = updateFields.password_category_id;
	}

	if (updateFields.url) {
		attributes.url = updateFields.url;
	}

	if (updateFields.notes) {
		attributes.notes = updateFields.notes;
	}

	if (updateFields.restricted !== undefined) {
		attributes.restricted = updateFields.restricted;
	}

	if (updateFields.show_password !== undefined) {
		attributes['show-password'] = updateFields.show_password;
	}

	const responseData = await apiRequest.call(this, 'PATCH', `/passwords/${passwordId}`, body);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}