import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteResource from './delete';

export { get, getById, create, update, deleteResource as delete };

export const descriptions = [
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteResource.description,
];
