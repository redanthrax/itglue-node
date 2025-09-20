import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Location ID',
		name: 'locationId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['location'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'ID of the location to update',
	},
	{
		displayName: 'Location Name',
		name: 'locationName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['location'],
				operation: ['update'],
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
				operation: ['update'],
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
				operation: ['update'],
			},
		},
		default: '',
		description: 'City of the location',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const locationId = this.getNodeParameter('locationId', index) as number;
	const locationName = this.getNodeParameter('locationName', index) as string;
	const address = this.getNodeParameter('address', index) as string;
	const city = this.getNodeParameter('city', index) as string;

	const body: IDataObject = {
		data: {
			type: 'locations',
			attributes: {},
		},
	};

	if (locationName) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			name: locationName,
		};
	}

	if (address) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			address: address,
		};
	}

	if (city) {
		(body.data as IDataObject).attributes = {
			...((body.data as IDataObject).attributes as IDataObject),
			city: city,
		};
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'PATCH',
		`locations/${locationId}`,
		body,
	);

	return responseData;
}