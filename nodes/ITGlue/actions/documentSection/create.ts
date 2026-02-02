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
		displayName: 'Section Name',
		name: 'sectionName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentSection'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the document section',
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
				displayName: 'Body',
				name: 'body',
				type: 'string',
				typeOptions: {
					rows: 5,
				},
				default: '',
				description: 'Body content of the document section',
			},
		],
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const documentId = this.getNodeParameter('documentId', index) as number;
	const sectionName = this.getNodeParameter('sectionName', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const attributes: IDataObject = {
		name: sectionName,
	};

	if (additionalFields.body !== undefined) {
		attributes.body = additionalFields.body;
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
		'POST',
		`documents/${documentId}/relationships/document_sections`,
		body,
	);

	return responseData;
}
