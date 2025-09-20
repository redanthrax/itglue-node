import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Configuration Interface ID',
		name: 'configurationInterfaceId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'ID of the configuration interface to delete',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const configurationInterfaceId = this.getNodeParameter('configurationInterfaceId', index) as number;

	const responseData = await itglueRequest.call(
		this,
		index,
		'DELETE',
		`configuration_interfaces/${configurationInterfaceId}`,
	);

	return responseData;
}