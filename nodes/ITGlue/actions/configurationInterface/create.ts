import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Configuration ID',
		name: 'configurationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Configuration ID to create interface for',
	},
	{
		displayName: 'Interface Name',
		name: 'interfaceName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the interface',
	},
	{
		displayName: 'IP Address',
		name: 'ipAddress',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'IP address of the interface',
	},
	{
		displayName: 'MAC Address',
		name: 'macAddress',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'MAC address of the interface',
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
				operation: ['create'],
			},
		},
		default: '',
		description: 'Notes about the interface',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const configurationId = this.getNodeParameter('configurationId', index) as number;
	const interfaceName = this.getNodeParameter('interfaceName', index) as string;
	const ipAddress = this.getNodeParameter('ipAddress', index) as string;
	const macAddress = this.getNodeParameter('macAddress', index) as string;
	const notes = this.getNodeParameter('notes', index) as string;

	const body: IDataObject = {
		data: {
			type: 'configuration_interfaces',
			attributes: {
				name: interfaceName,
				ip_address: ipAddress || undefined,
				mac_address: macAddress || undefined,
				notes: notes || undefined,
			},
			relationships: {
				configuration: {
					data: {
						type: 'configurations',
						id: configurationId,
					},
				},
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'configuration_interfaces',
		body,
	);

	return responseData;
}