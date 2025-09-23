import { OrganizationProperties } from "../../interfaces";

export const organizationUpdateDescription: OrganizationProperties = [
	{
		displayName: 'Organization Name or ID',
		name: 'id',
		type: 'options',
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getOrganizations',
		},
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['update'],
			},
		},
		required: true,
	},
	{
		displayName: 'Attributes',
		name: 'attributes',
		type: 'collection',
		default: {},
		placeholder: 'Update Attribute',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Alert',
				name: 'alert',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: 'Organization Name',
			},
			{
				displayName: 'Organization Status Name or ID',
				name: 'organization_status_id',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				default: '',
				typeOptions: {
					loadOptionsMethod: 'getOrgStatuses',
				},
			},
			{
				displayName: 'Organization Type Name or ID',
				name: 'organization_type_id',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				default: '',
				typeOptions: {
					loadOptionsMethod: 'getOrgTypes',
				},
			},
			{
				displayName: 'Quick Notes',
				name: 'quick_notes',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Short Name',
				name: 'short_name',
				type: 'string',
				default: '',
			},
		],
	},
];