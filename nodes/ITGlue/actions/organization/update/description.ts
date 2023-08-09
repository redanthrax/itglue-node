import { OrganizationProperties } from "../../interfaces";

export const organizationUpdateDescription: OrganizationProperties = [
	{
		displayName: 'Organization ID',
		name: 'orgid',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['organization'],
				operation: ['update'],
			}
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: 'Organization Name'
			},
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
				displayName: 'Organization Type Name or ID',
				name: 'organization_type_id',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				default: '',
				typeOptions: {
					loadOptionsMethod: 'getOrgTypes',
				}
			},
			{
				displayName: 'Organization Status Name or ID',
				name: 'organization_status_id',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
				default: '',
				typeOptions: {
					loadOptionsMethod: 'getOrgStatuses',
				}
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
		]
	}
];