import {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { itglueRequest } from '../../../transport';

export async function bulkUpdateOrganizations(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'PATCH';
	const endpoint = 'organizations';

	const organizations = this.getNodeParameter('organizations', index) as string;
	let organizationsData;

	try {
		organizationsData = JSON.parse(organizations);
	} catch {
		throw new NodeOperationError(this.getNode(), 'Invalid JSON format for organizations data', {
			itemIndex: index,
		});
	}

	if (!Array.isArray(organizationsData)) {
		throw new NodeOperationError(this.getNode(), 'Organizations data must be an array', {
			itemIndex: index,
		});
	}

	// Transform the data to IT Glue API format
	const body = {
		data: organizationsData.map((org: any) => ({
			type: 'organizations',
			attributes: {
				id: org.id,
				...org,
			},
		})),
	};

	const responseData = await itglueRequest.call(this, index, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}