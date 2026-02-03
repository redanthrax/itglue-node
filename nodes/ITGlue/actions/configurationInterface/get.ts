import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['get'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['get'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Configuration ID',
		name: 'configurationId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['configurationInterface'],
				operation: ['get'],
			},
		},
		default: 0,
		description: 'Filter interfaces by configuration ID',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const limit = this.getNodeParameter('limit', index, 50) as number;
	const configurationId = this.getNodeParameter('configurationId', index) as number;

	const qs: IDataObject = {};

	if (!returnAll) {
		qs['page[size]'] = limit;
	}

	if (configurationId) {
		qs['filter[configuration_id]'] = configurationId;
	}

	const responseData = await itglueRequest.call(
		this,
		index,
		'GET',
		'configuration_interfaces',
		{},
		qs,
		{ paginate: returnAll },
	);

	return responseData;
}
