import * as get from './get';
import * as getById from './getById';

export { get, getById };

export const descriptions = [
	...get.description,
	...getById.description,
];
