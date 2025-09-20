import * as get from './get';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as bulkUpdate from './bulkUpdate';
import * as destroy from './destroy';

export { get, getById, create, update, bulkUpdate, destroy };

export const descriptions = [
	...get.description,
	...getById.description,
	...create.description,
	...update.description,
	...bulkUpdate.description,
	...destroy.description,
];