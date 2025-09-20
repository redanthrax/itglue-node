# Domains Operations

## Get

Retrieve domain data from IT Glue.

**Parameters:**
- **Return All**: Whether to return all results or only up to a given limit (default: false)
- **Limit**: Maximum number of domains to return when "Return All" is disabled (default: 50, min: 1)
- **Filters**: Available filter options:
  - **Domain ID**: Filter by specific domain ID
  - **Organization ID**: Filter by organization ID
- **Sort**: Sort results by creation date or update date (ascending/descending)

### Available Filters
The IT Glue domains API has limited filtering capabilities. Only the following filters are supported:
- Domain ID (exact match)
- Organization ID (exact match)

**Note**: Domain name filtering is NOT supported by the IT Glue API. To find domains by name, retrieve all domains and filter client-side.

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access domain data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Domain ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that domain records exist and are accessible
2. Verify permissions for domain operations
3. Ensure the IT Glue instance has domain records available
4. Validate that any filtering parameters are correctly formatted

## Response Format

### Get Response
Returns domain data with details including domain name, organization relationships, DNS information, expiration dates, and other domain management details.

### Get All Response
Returns a collection of domain records with pagination information and comprehensive domain details for DNS and domain management.