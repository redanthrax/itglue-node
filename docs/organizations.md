# Organizations Operations

## Get

Retrieve organization data from IT Glue with flexible filtering and pagination options.

**Parameters:**
- **Return All**: Whether to return all results or use pagination (default: false)
- **Limit**: Maximum number of results per page when not returning all (default: 50, min: 1)
- **Page Number**: Specific page for pagination (starts at 1)

### Filters
Optional collection of filter options:
- **Organization ID**: Filter by specific organization ID
- **Organization Name (Text Search)**: Filter by organization name using text search (supports partial matches)
- **Organization**: Choose from dropdown list of organizations
- **Organization Status Name or ID**: Choose from dropdown or specify ID
- **Organization Type Name or ID**: Choose from dropdown or specify ID

### Options
- **Include**: Related resources to include:
  - Organization Type
  - Organization Status
- **Sort**: Sort order options:
  - Created (Newest/Oldest First)
  - Name (A-Z, Z-A)
  - Updated (Newest/Oldest First)

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

Update an existing organization using PATCH methodology - only specify the fields you want to change.

**Required Parameters:**
- **Organization Name or ID**: Choose from dropdown or specify ID

**Attributes** (Optional Collection):
Add only the fields you want to update:
- **Alert**: Update the organization alert
- **Description**: Update the organization description
- **Name**: Update the organization name
- **Organization Status Name or ID**: Choose from available statuses
- **Organization Type Name or ID**: Choose from available types
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