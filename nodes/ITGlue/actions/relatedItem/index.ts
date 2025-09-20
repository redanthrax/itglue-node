import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteResource from './delete';
import * as bulkDestroy from './bulkDestroy';

export { get, getById, create, update, deleteResource as delete, bulkDestroy };

export const descriptions = [
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteResource.description,
	...bulkDestroy.description,
];
