import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the parent document',
	},
	{
		displayName: 'Section ID',
		name: 'sectionId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the document section to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: {
					rows: 5,
				},
				default: '',
				description: 'Content of the section (HTML for Text/Step, plain text for Heading)',
			},
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: 0,
				description: 'Duration in minutes (for Step sections)',
			},
			{
				displayName: 'Level',
				name: 'level',
				type: 'number',
				default: 1,
				description: 'Heading level 1-6 (for Heading sections)',
			},
			{
				displayName: 'Reset Count',
				name: 'resetCount',
				type: 'boolean',
				default: false,
				description: 'Whether to reset count (for Step sections)',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'number',
				default: 0,
				description: 'Sort order of the section',
			},
		],
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;
	const sectionId = this.getNodeParameter('sectionId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const attributes: IDataObject = {};

	if (updateFields.content !== undefined) {
		attributes.content = updateFields.content;
	}

	if (updateFields.level !== undefined) {
		attributes.level = updateFields.level;
	}

	if (updateFields.duration !== undefined) {
		attributes.duration = updateFields.duration;
	}

	if (updateFields.resetCount !== undefined) {
		attributes['reset-count'] = updateFields.resetCount;
	}

	if (updateFields.sort !== undefined) {
		attributes.sort = updateFields.sort;
	}

	const body: IDataObject = {
		data: {
			type: 'document-sections',
			attributes,
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`documents/${documentId}/relationships/sections/${sectionId}`,
		body,
	);

	return responseData;
}
