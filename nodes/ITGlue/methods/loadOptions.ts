import { IDataObject, ILoadOptionsFunctions, INodePropertyOptions,
	NodeOperationError } from "n8n-workflow";
import { apiRequestAllItems } from "../transport";


export async function getOrgTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'organization_types', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getOrgStatuses(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'organization_statuses', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getOrganizations(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	try {
		const qs = {
			sort: 'name',
			'page[size]': 1000
		};
		const responseData = await apiRequestAllItems.call(this, 'GET', 'organizations', {}, qs);
		const data = await parseData.call(this, responseData);
		return data;
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Failed to load organizations: ${error.message}`);
	}
}

export async function getConfigurationStatuses(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'configuration_statuses', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getConfigurationTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'configuration_types', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getContacts(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'contacts', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getLocations(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'locations', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getManufacturers(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'manufacturers', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getModels(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'models', {});
	const data = await parseData.call(this, responseData);
	return data;
}

export async function getOperatingSystems(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const responseData = await apiRequestAllItems.call(this, 'GET', 'operating_systems', {});
	const data = await parseData.call(this, responseData);
	return data;
}

async function parseData(this: ILoadOptionsFunctions,
	responseData: IDataObject[]): Promise<INodePropertyOptions[]> {
	if (responseData === undefined) {
		throw new NodeOperationError(this.getNode(), 'No data got returned');
	}

	const returnData: INodePropertyOptions[] = [];
	for (const data of responseData) {
	returnData.push({
		name:  (data.attributes as IDataObject).name as string,
		value: data.id as string,
	});
	}

	returnData.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}

		return 0;
	});

	return returnData;
}