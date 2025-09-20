import { DocumentProperties } from "../../interfaces";

export const documentBulkUpdateDescription: DocumentProperties = [
	{
		displayName: 'Updates',
		name: 'updates',
		type: 'fixedCollection' as const,
		default: {},
		placeholder: 'Add Update',
		typeOptions: {
			multipleValues: true,
		},
		description: 'The documents to update',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['bulkUpdate'],
			},
		},
		options: [
			{
				displayName: 'Update',
				name: 'update',
				values: [
					{
						displayName: 'Document ID',
						name: 'id',
						type: 'string' as const,
						default: '',
						required: true,
						description: 'The ID of the document to update',
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string' as const,
						default: '',
						description: 'The new name for the document',
					},
					{
						displayName: 'Content',
						name: 'content',
						type: 'string' as const,
						default: '',
						description: 'The new content for the document',
					},
					{
						displayName: 'Notes',
						name: 'notes',
						type: 'string' as const,
						default: '',
						description: 'Additional notes about the document',
					},
				],
			},
		],
	},
];