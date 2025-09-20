import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Interface IDs',
		name: 'interfaceIds',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['bulkUpdate'],
			},
		},
		default: '',
		description: 'Comma-separated list of configuration interface IDs to update',
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
				resource: ['configurationInterface'],
				operation: ['bulkUpdate'],
			},
		},
		default: '',
		description: 'Notes to apply to all interfaces',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const interfaceIds = this.getNodeParameter('interfaceIds', index) as string;
	const notes = this.getNodeParameter('notes', index) as string;

	const idsArray = interfaceIds.split(',').map((id) => parseInt(id.trim(), 10));

	const body: IDataObject = {
		data: idsArray.map((id) => ({
			type: 'configuration_interfaces',
			id: id,
			attributes: {
				notes: notes || undefined,
			},
		})),
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		'configuration_interfaces',
		body,
	);

	return responseData;
}