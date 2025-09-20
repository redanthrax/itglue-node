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
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the configuration interface to update',
	},
	{
		displayName: 'Interface Name',
		name: 'interfaceName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['update'],
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
				operation: ['update'],
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
				operation: ['update'],
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
				operation: ['update'],
			},
		},
		default: '',
		description: 'Notes about the interface',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const configurationInterfaceId = this.getNodeParameter('configurationInterfaceId', index) as number;
	const interfaceName = this.getNodeParameter('interfaceName', index) as string;
	const ipAddress = this.getNodeParameter('ipAddress', index) as string;
	const macAddress = this.getNodeParameter('macAddress', index) as string;
	const notes = this.getNodeParameter('notes', index) as string;

	const body: IDataObject = {
		data: {
			type: 'configuration_interfaces',
			attributes: {},
		},
	};

	if (interfaceName) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			name: interfaceName,
		};
	}

	if (ipAddress) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			ip_address: ipAddress,
		};
	}

	if (macAddress) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			mac_address: macAddress,
		};
	}

	if (notes) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			notes: notes,
		};
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`configuration_interfaces/${configurationInterfaceId}`,
		body,
	);

	return responseData;
}