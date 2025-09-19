import { IDataObject, IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { itglueRequest } from "../../../transport";

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
	} catch (error) {
		throw new Error('Invalid JSON format for organizations data');
	}

	if (!Array.isArray(organizationsData)) {
		throw new Error('Organizations data must be an array');
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