import * as create from './create';
import * as getById from './getById';

export { create, getById };

export const descriptions = [
	...create.description,
	...getById.description,
];