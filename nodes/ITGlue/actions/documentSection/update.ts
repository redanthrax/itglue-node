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
				displayName: 'Body',
				name: 'body',
				type: 'string',
				typeOptions: {
					rows: 5,
				},
				default: '',
				description: 'Body content of the document section',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the document section',
			},
		],
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;
	const sectionId = this.getNodeParameter('sectionId', index) as number;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const attributes: IDataObject = {};

	if (updateFields.name) {
		attributes.name = updateFields.name;
	}

	if (updateFields.body !== undefined) {
		attributes.body = updateFields.body;
	}

	const body: IDataObject = {
		data: {
			type: 'document_sections',
			attributes,
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`documents/${documentId}/relationships/document_sections/${sectionId}`,
		body,
	);

	return responseData;
}
