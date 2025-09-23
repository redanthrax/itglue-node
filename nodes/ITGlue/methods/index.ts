import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { apiRequest } from '../transport';

export const loadOptions = {
	// Load organization options for dropdowns
	async getOrganizations(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const organizations = await apiRequest.call(this, 'GET', 'organizations');
		const data = organizations.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		const result = data.map((org) => ({
			name: org.attributes.name,
			value: org.id,
		}));
		
		// Sort alphabetically by name
		result.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		return result;
	},

	// Load configuration types for dropdowns
	async getConfigurationTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const configTypes = await apiRequest.call(this, 'GET', 'configuration_types');
		const data = configTypes.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		const result = data.map((type) => ({
			name: type.attributes.name,
			value: type.id,
		}));
		
		// Sort alphabetically by name
		result.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		return result;
	},

	// Load password categories for dropdowns
	async getPasswordCategories(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const passwordCategories = await apiRequest.call(this, 'GET', 'password_categories');
		const data = passwordCategories.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		const result = data.map((category) => ({
			name: category.attributes.name,
			value: category.id,
		}));
		
		// Sort alphabetically by name
		result.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		return result;
	},

	// Load contact types for dropdowns
	async getContactTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const contactTypes = await apiRequest.call(this, 'GET', 'contact_types');
		const data = contactTypes.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		const result = data.map((type) => ({
			name: type.attributes.name,
			value: type.id,
		}));
		
		// Sort alphabetically by name
		result.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		return result;
	},

	// Load flexible asset types for dropdowns
	async getFlexibleAssetTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const flexibleAssetTypes = await apiRequest.call(this, 'GET', 'flexible_asset_types');
		const data = flexibleAssetTypes.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		const result = data.map((type) => ({
			name: type.attributes.name,
			value: type.id,
		}));
		
		// Sort alphabetically by name
		result.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		return result;
	},

	// Load organization statuses for dropdowns
	async getOrgStatuses(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const orgStatuses = await apiRequest.call(this, 'GET', 'organization_statuses');
		const data = orgStatuses.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		const result = data.map((status) => ({
			name: status.attributes.name,
			value: status.id,
		}));
		
		// Sort alphabetically by name
		result.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		return result;
	},

	// Load organization types for dropdowns
	async getOrgTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const orgTypes = await apiRequest.call(this, 'GET', 'organization_types');
		const data = orgTypes.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		const result = data.map((type) => ({
			name: type.attributes.name,
			value: type.id,
		}));
		
		// Sort alphabetically by name
		result.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		
		return result;
	},
};