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

async function parseData(this: ILoadOptionsFunctions,
	responseData: IDataObject[]): Promise<INodePropertyOptions[]> {
	if (responseData === undefined) {
		throw new NodeOperationError(this.getNode(), 'No data got returned');
	}

	const returnData: INodePropertyOptions[] = [];
	for (const data of responseData) {
		returnData.push({
			name:  (data.attributes as any).name as string,
			value: data.id as number,
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