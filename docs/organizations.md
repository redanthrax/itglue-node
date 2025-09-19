# Organizations Operations

## Get

Retrieve organization data from IT Glue with flexible filtering options.

**Parameters:**
- **All Organizations**: Whether to get all organizations or just one specific organization (default: true)

### Get All Organizations
When "All Organizations" is enabled, retrieve multiple organizations with optional filtering:

- **Filters**: Collection of filter options including:
  - **Limit**: Maximum number of organizations to return (default: 50, min: 1)
  - **Organization ID**: Filter by specific organization ID
  - **Organization Name**: Filter by organization name
  - **Organization Status Name or ID**: Filter by organization status (dynamically loaded from available statuses)
  - **Organization Type Name or ID**: Filter by organization type (dynamically loaded from available types)

### Get Single Organization
When "All Organizations" is disabled:

- **Organization**: Organization ID to retrieve with full notes and detailed information

## Create

Create a new organization in IT Glue.

**Required Parameters:**
- **Name**: The name of the organization
- **Organization Type Name or ID**: The type of organization (dynamically loaded from available types)
- **Organization Status Name or ID**: The status of the organization (dynamically loaded from available statuses)

**Optional Parameters:**
- **Alert**: Create an alert for the organization
- **Description**: Create a description for the organization

## Update

Update an existing organization in IT Glue.

**Required Parameters:**
- **Organization ID**: The ID of the organization to update

**Optional Parameters:**
- **Attributes**: Collection of attributes to update including:
  - **Alert**: Update the organization alert
  - **Description**: Update the organization description
  - **Name**: Update the organization name
  - **Organization Status Name or ID**: Update the organization status (dynamically loaded)
  - **Organization Type Name or ID**: Update the organization type (dynamically loaded)
  - **Quick Notes**: Add or update quick notes
  - **Short Name**: Update the organization short name

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access organization data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **422 Unprocessable Entity**: Data validation failed (e.g., duplicate organization name)
- **404 Not Found**: Organization ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that organization IDs exist and are accessible
2. Verify permissions for organization operations
3. Ensure organization types and statuses are valid
4. Validate that required fields are provided for create/update operations
5. Check for duplicate names when creating organizations

## Response Format

### Get Response
Returns organization data with details including ID, name, description, organization type, status, alerts, and relationship information.

### Get All Response
Returns a collection of organizations with pagination information and filtering results.

### Create/Update Response
Returns the created or updated organization object with all current attributes and IT Glue-generated metadata.