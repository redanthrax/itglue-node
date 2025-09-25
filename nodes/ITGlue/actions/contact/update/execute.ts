import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function contactUpdate(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const contactId = this.getNodeParameter('contactId', index) as string;
	
	const body: IDataObject = {
		data: {
			type: 'contacts',
			attributes: {}
		}
	};

	// Get the update fields collection
	const updateFields = this.getNodeParameter('updateFields', index) as IDataObject;

	// Map camelCase to snake_case for API attributes
	const fieldMapping: { [key: string]: string } = {
		contact_type_id: 'contact_type_id',
		first_name: 'first_name',
		last_name: 'last_name',
		title: 'title',
		primary_email: 'primary_email',
		phone: 'phone',
		mobile: 'mobile',
		notes: 'notes',
		important: 'important'
	};

	// Only add fields that are specified in updateFields
	Object.entries(updateFields).forEach(([camelField, value]) => {
		if (value !== '' && value !== null && value !== undefined) {
			const apiField = fieldMapping[camelField];
			if (apiField) {
				((body.data as IDataObject).attributes as IDataObject)[apiField] = value;
			}
		}
	});

	const responseData = await apiRequest.call(this, 'PATCH', `/contacts/${contactId}`, body);
	return this.helpers.returnJsonArray(responseData.data ? [responseData.data as IDataObject] : []);
}
