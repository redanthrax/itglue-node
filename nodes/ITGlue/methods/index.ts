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
		
		return data.map((org) => ({
			name: org.attributes.name,
			value: org.id,
		}));
	},

	// Load configuration types for dropdowns
	async getConfigurationTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const configTypes = await apiRequest.call(this, 'GET', 'configuration_types');
		const data = configTypes.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		return data.map((type) => ({
			name: type.attributes.name,
			value: type.id,
		}));
	},

	// Load password categories for dropdowns
	async getPasswordCategories(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const passwordCategories = await apiRequest.call(this, 'GET', 'password_categories');
		const data = passwordCategories.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		return data.map((category) => ({
			name: category.attributes.name,
			value: category.id,
		}));
	},

	// Load contact types for dropdowns
	async getContactTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const contactTypes = await apiRequest.call(this, 'GET', 'contact_types');
		const data = contactTypes.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		return data.map((type) => ({
			name: type.attributes.name,
			value: type.id,
		}));
	},

	// Load flexible asset types for dropdowns
	async getFlexibleAssetTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
		const flexibleAssetTypes = await apiRequest.call(this, 'GET', 'flexible_asset_types');
		const data = flexibleAssetTypes.data as Array<{
			id: string;
			attributes: { name: string };
		}>;
		
		return data.map((type) => ({
			name: type.attributes.name,
			value: type.id,
		}));
	},
};