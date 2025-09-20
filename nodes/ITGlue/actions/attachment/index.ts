import * as create from './create';
import * as update from './update';
import * as bulkDestroy from './bulkDestroy';

export { create, update, bulkDestroy };

export const descriptions = [
	...create.description,
	...update.description,
	...bulkDestroy.description,
];