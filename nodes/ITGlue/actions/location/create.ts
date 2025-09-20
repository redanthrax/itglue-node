import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['location'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Organization ID to create location for',
	},
	{
		displayName: 'Location Name',
		name: 'locationName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['location'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the location',
	},
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['location'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Address of the location',
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['location'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'City of the location',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const organizationId = this.getNodeParameter('organizationId', index) as number;
	const locationName = this.getNodeParameter('locationName', index) as string;
	const address = this.getNodeParameter('address', index) as string;
	const city = this.getNodeParameter('city', index) as string;

	const body: IDataObject = {
		data: {
			type: 'locations',
			attributes: {
				name: locationName,
				address: address || undefined,
				city: city || undefined,
			},
			relationships: {
				organization: {
					data: {
						type: 'organizations',
						id: organizationId,
					},
				},
			},
		},
	};

	const responseData = await itglueRequest.call(
		this,
		index,
		'POST',
		'locations',
		body,
	);

	return responseData;
}