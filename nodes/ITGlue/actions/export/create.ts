import { IDataObject, IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { itglueRequest } from '../../transport';

export const description: INodeProperties[] = [
	{
		displayName: 'Export Type',
		name: 'exportType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['export'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Configurations',
				value: 'configurations',
			},
			{
				name: 'Contacts',
				value: 'contacts',
			},
			{
				name: 'Passwords',
				value: 'passwords',
			},
			{
				name: 'Flexible Assets',
				value: 'flexible_assets',
			},
		],
		default: 'configurations',
		description: 'Type of data to export',
	},
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['export'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Organization ID to export data for (leave empty for all organizations)',
	},
	{
		displayName: 'Export Format',
		name: 'exportFormat',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['export'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'CSV',
				value: 'csv',
			},
			{
				name: 'JSON',
				value: 'json',
			},
		],
		default: 'csv',
		description: 'Format of the export file',
	},
];

export async function execute(this: IExecuteFunctions, index: number): Promise<IDataObject[]> {
	const exportType = this.getNodeParameter('exportType', index) as string;
	const organizationId = this.getNodeParameter('organizationId', index) as number;
	const exportFormat = this.getNodeParameter('exportFormat', index) as string;

	const body: IDataObject = {
		data: {
			type: 'exports',
			attributes: {
				export_type: exportType,
				format: exportFormat,
				organization_id: organizationId || undefined,
			},
		},
	};

	const responseData = await itglueRequest.call(this, index, 'POST', 'exports', body);

	return responseData;
}