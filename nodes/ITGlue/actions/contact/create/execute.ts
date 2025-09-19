import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function contactCreate(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const organizationId = this.getNodeParameter('organizationId', index) as string;
	const firstName = this.getNodeParameter('firstName', index) as string;
	const lastName = this.getNodeParameter('lastName', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;
	
	const body: IDataObject = {
		data: {
			type: 'contacts',
			attributes: {
				'first-name': firstName,
				'last-name': lastName,
				'organization-id': organizationId,
			},
		},
	};
	
	const data = body.data as IDataObject;
	const attributes = data.attributes as IDataObject;
	
	Object.keys(additionalFields).forEach((key) => {
		if (key === 'contact_emails' || key === 'contact_phones') {
			attributes[key.replace('_', '-')] = JSON.parse(additionalFields[key] as string);
		} else {
			attributes[key.replace('_', '-')] = additionalFields[key];
		}
	});
	
	const responseData = await apiRequest.call(this, 'POST', '/contacts', body);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}
