import { IDataObject } from 'n8n-workflow';

/**
 * Converts IT Glue API response to n8n-friendly format
 */
export function formatITGlueResponse(data: IDataObject[]): IDataObject[] {
	return data.map((item) => {
		const formatted = {
			id: item.id,
			type: item.type,
			...item.attributes as IDataObject,
		};
		
		// Include relationships if present
		if (item.relationships) {
			(formatted as any).relationships = item.relationships;
		}
		
		return formatted;
	});
}

/**
 * Validates required parameters for IT Glue operations
 */
export function validateRequiredParams(params: IDataObject, requiredFields: string[]): void {
	const missingFields = requiredFields.filter(field => !params[field]);
	if (missingFields.length > 0) {
		throw new Error(`Missing required parameters: ${missingFields.join(', ')}`);
	}
}

/**
 * Sanitizes and prepares data for IT Glue API
 */
export function prepareITGlueData(data: IDataObject, type: string): IDataObject {
	return {
		data: {
			type: type,
			attributes: data,
		},
	};
}

/**
 * Converts camelCase to kebab-case for IT Glue API compatibility
 */
export function camelToKebab(str: string): string {
	return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * Converts kebab-case to camelCase for JavaScript compatibility  
 */
export function kebabToCamel(str: string): string {
	return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}