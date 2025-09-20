import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';

export { get, getById, create, update };

export const descriptions = [
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
];