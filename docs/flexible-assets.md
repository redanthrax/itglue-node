# Flexible Assets Operations

## Get Many

Retrieve multiple flexible assets from IT Glue with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of flexible assets to return (if Return All is false)
- **Filters**: Various filtering options including:
  - Organization ID, Flexible Asset Type ID
  - Name filtering
  - Date range (Created At/Updated At)
- **Options**: Additional settings including:
  - **Include**: Related resources (flexible_asset_type, organization, attachments)
  - **Sort**: Sort order by name or date (ascending/descending)


## Get by ID

Retrieve a specific flexible asset by its ID.

**Parameters:**
- **Flexible Asset ID**: The ID of the flexible asset to retrieve
- **Options**: Additional data to include in the response:
  - **Include**: Related resources (flexible_asset_type, organization, attachments)

## Create

Create a new flexible asset in IT Glue.

**Required Parameters:**
- **Organization ID**: The organization to create the flexible asset for
- **Flexible Asset Type ID**: The asset type that defines the structure
- **Name**: Descriptive name for the flexible asset

**Optional Parameters:**
- **Traits**: Dynamic field values based on the flexible asset type (JSON format)
- **Additional Fields**: Collection including:
  - Notes and documentation
  - Restricted access settings


## Update

Update an existing flexible asset using PATCH methodology - only specify the fields you want to change.

**Required Parameters:**
- **Flexible Asset ID**: The ID of the flexible asset to update

**Update Fields** (Optional Collection):
Add only the fields you want to update:
- **Name**: The name of the flexible asset
- **Notes**: Additional notes for the flexible asset
- **Restricted**: Whether the flexible asset is restricted
- **Traits**: JSON object containing the flexible asset traits/fields to update (e.g., `{"field_name": "new_value", "another_field": "updated_value"}`)

## Delete

Delete a flexible asset from IT Glue.

**Required Parameters:**
- **Flexible Asset ID**: The ID of the flexible asset to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access flexible asset data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Flexible asset ID or asset type does not exist
- **422 Unprocessable Entity**: Validation errors in traits or field data

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that flexible asset IDs exist and are accessible
2. Verify permissions for flexible asset operations
3. Ensure organization IDs are valid when creating assets
4. Validate flexible asset type IDs are correct
5. Check that traits match the asset type field structure
6. Ensure JSON formatting is correct for traits field

## Response Format

### Get Many Response
Returns a collection of flexible assets with record count and asset details including ID, name, organization relationships, asset type information, and traits data.

### Get by ID Response
Returns a single flexible asset object with full details when additional options are included, including comprehensive asset information, organization and asset type relationships, traits data, and attachment information.