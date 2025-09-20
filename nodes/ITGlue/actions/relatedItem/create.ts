import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Resource Type',
		name: 'resourceType',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Type of the resource to relate',
	},
	{
		displayName: 'Resource ID',
		name: 'resourceId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'ID of the resource to relate',
	},
	{
		displayName: 'Related Resource Type',
		name: 'relatedResourceType',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Type of the related resource',
	},
	{
		displayName: 'Related Resource ID',
		name: 'relatedResourceId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'ID of the related resource',
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: {
				resource: ['relatedItem'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Notes about the relationship',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const resourceType = this.getNodeParameter('resourceType', index) as string;
	const resourceId = this.getNodeParameter('resourceId', index) as number;
	const relatedResourceType = this.getNodeParameter('relatedResourceType', index) as string;
	const relatedResourceId = this.getNodeParameter('relatedResourceId', index) as number;
	const notes = this.getNodeParameter('notes', index) as string;

	const body: IDataObject = {
		data: {
			type: 'related_items',
			attributes: {
				notes: notes || undefined,
			},
			relationships: {
				resource: {
					data: {
						type: resourceType,
						id: resourceId,
					},
				},
				related_resource: {
					data: {
						type: relatedResourceType,
						id: relatedResourceId,
					},
				},
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'related_items',
		body,
	);

	return responseData;
}