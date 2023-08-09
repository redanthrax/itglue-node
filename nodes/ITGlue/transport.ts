import { OptionsWithUri } from 'request';

import { IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions } from 'n8n-core';

import {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestMethods,
	IPollFunctions,
} from 'n8n-workflow';

export async function itglueRequest(
	this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions,
	index: number,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
):Promise<IDataObject[]> {
	//TODO: add sorting here

	//make request and return data
	const responseData = await apiRequestAllItems.call(this, method, endpoint, body, qs);
	return responseData;
}

export async function apiRequest(
	this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
):Promise<IDataObject> {
	const creds = await this.getCredentials('itglueApi');
	const options: OptionsWithUri = {
		headers: {
				Accept: 'application/json',
				'Content-Type': 'application/vnd.api+json',
		},
		method,
		qs,
		uri: `https://${creds.region}.itglue.com/${endpoint}`,
				qsStringifyOptions: {
				arrayFormat: 'repeat',
		},
		json: true,
	};

	if(Object.keys(body).length > 0) {
		options.body = body
	}

	(options.headers as IDataObject)['X-API-KEY'] = `${creds.apiKey}`;
	//short delay to take it easy
	await delay(200);

	//@ts-ignore
	const responseData = (await this.helpers.request(options)) as IDataObject;
	return responseData;
}

export async function apiRequestAllItems(
	this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject[]> {
	qs["page[number]"] = 1;
	qs["page[size]"] = 1000;
	let returnData: IDataObject[] = [];
	let responseData: IDataObject[];
	do {
		const resp = await apiRequest.call(this, method, endpoint, body, qs);
		responseData = resp['data'] as IDataObject[];
		returnData = returnData.concat(responseData);
		if(responseData.length < qs["page[size]"]) {
			break;
		}

		qs["page[number]"]++;
	}
	while(responseData.length > 0);

	return returnData;
}

function delay(ms: number){
		return new Promise(resolve => setTimeout(resolve, ms));
}