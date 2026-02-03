import {
	IDataObject,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	IPollFunctions,
	NodeOperationError,
	NodeApiError,
} from 'n8n-workflow';

export async function itglueRequest(
	this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions,
	index: number,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	options: IDataObject = { paginate: true },
): Promise<IDataObject[]> {
	try {
		// Add sorting and additional query parameters
		if (!qs['sort']) {
			qs['sort'] = 'created-at'; // Default sorting
		}

		//make request and return data
		if (options.paginate) {
			const responseData = await apiRequestAllItems.call(this, method, endpoint, body, qs);
			return responseData;
		} else {
			const responseData = await apiRequest.call(this, method, endpoint, body, qs);
			const data = responseData['data'];
			if (Array.isArray(data)) {
				return data as IDataObject[];
			}
			return [data] as IDataObject[];
		}
	} catch (error) {
		// Wrap in n8n-specific error for better debugging
		if (error.response?.status === 401) {
			throw new NodeOperationError(
				this.getNode(),
				'Authentication failed. Please check your IT Glue API key and region settings.',
			);
		} else if (error.response?.status === 403) {
			throw new NodeOperationError(
				this.getNode(),
				'Access forbidden. Your API key may not have sufficient permissions for this operation.',
			);
		} else if (error.response?.status === 429) {
			throw new NodeOperationError(
				this.getNode(),
				'Rate limit exceeded. IT Glue is throttling requests. Please try again later.',
			);
		}
		throw error;
	}
}

export async function apiRequest(
	this:
		| IExecuteFunctions
		| IExecuteSingleFunctions
		| ILoadOptionsFunctions
		| IPollFunctions
		| IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject> {
	const creds = await this.getCredentials('itglueApi');
	const options: IHttpRequestOptions = {
		headers: {
			Accept: 'application/json',
			'User-Agent': 'n8n-itglue-node/0.3.0',
		},
		method,
		qs,
		url: `https://${creds.region}.itglue.com/${endpoint}`,
		json: true,
	};

	if (Object.keys(body).length > 0) {
		options.body = body;
	}

	try {
		const responseData = (await this.helpers.httpRequestWithAuthentication.call(
			this,
			'itglueApi',
			options,
		)) as IDataObject;
		return responseData;
	} catch (error) {
		// Enhanced error handling for n8n
		if (error.response) {
			const statusCode = error.response.status;
			const errorMessage = error.response.data?.errors?.[0]?.detail || error.message;

			throw new NodeApiError(this.getNode(), error, {
				message: `IT Glue API Error (${statusCode}): ${errorMessage}`,
				httpCode: String(statusCode),
			});
		}
		throw new NodeOperationError(this.getNode(), `Request failed: ${error.message}`);
	}
}

export async function apiRequestAllItems(
	this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject[]> {
	// Enhanced pagination with n8n-friendly options
	qs['page[number]'] = 1;
	qs['page[size]'] = qs['page[size]'] || 1000; // Allow user override

	let returnData: IDataObject[] = [];
	let responseData: IDataObject[];
	let currentPage = 1;
	const maxPages = 100; // Safety limit to prevent infinite loops

	do {
		if (currentPage > maxPages) {
			throw new NodeOperationError(
				this.getNode(),
				`Maximum page limit (${maxPages}) reached. Consider using filters to reduce the result set.`,
			);
		}

		const resp = await apiRequest.call(this, method, endpoint, body, qs);
		responseData = resp['data'] as IDataObject[];
		returnData = returnData.concat(responseData);

		// Continue pagination for large datasets

		if (responseData.length < (qs['page[size]'] as number)) {
			break;
		}

		qs['page[number]'] = ++currentPage;
	} while (responseData.length > 0);

	return returnData;
}
