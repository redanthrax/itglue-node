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
				operation: ['create'],
			},
		},
		default: 0,
		description: 'ID of the parent document',
	},
	{
		displayName: 'Resource Type',
		name: 'resourceType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Text',
				value: 'Document::Text',
			},
			{
				name: 'Heading',
				value: 'Document::Heading',
			},
			{
				name: 'Gallery',
				value: 'Document::Gallery',
			},
			{
				name: 'Step',
				value: 'Document::Step',
			},
		],
		default: 'Document::Text',
		description: 'Type of document section to create',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['create'],
				resourceType: ['Document::Text', 'Document::Heading', 'Document::Step'],
			},
		},
		default: '',
		description: 'Content of the section (HTML for Text/Step, plain text for Heading)',
	},
	{
		displayName: 'Level',
		name: 'level',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['create'],
				resourceType: ['Document::Heading'],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 6,
		},
		default: 1,
		description: 'Heading level (1-6)',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: 0,
				description: 'Duration in minutes (for Step sections)',
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
	const resourceType = this.getNodeParameter('resourceType', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const attributes: IDataObject = {
		'resource-type': resourceType,
	};

	if (resourceType !== 'Document::Gallery') {
		const content = this.getNodeParameter('content', index, '') as string;
		if (content) {
			attributes.content = content;
		}
	}

	if (resourceType === 'Document::Heading') {
		const level = this.getNodeParameter('level', index, 1) as number;
		attributes.level = level;
	}

	if (additionalFields.duration !== undefined) {
		attributes.duration = additionalFields.duration;
	}

	if (additionalFields.resetCount !== undefined) {
		attributes['reset-count'] = additionalFields.resetCount;
	}

	if (additionalFields.sort !== undefined) {
		attributes.sort = additionalFields.sort;
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
		'POST',
		`documents/${documentId}/relationships/sections`,
		body,
	);

	return responseData;
}
