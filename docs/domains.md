# Domains Operations

## Get

Retrieve domain data from IT Glue.

**Parameters:**
- **All Domains**: Whether to get all domains or apply specific filtering (default: true)
- **Limit**: Maximum number of domains to return when "All Domains" is enabled (default: 50, min: 1)

### Get All Domains
When "All Domains" is enabled, retrieve all domain records available in the IT Glue instance with optional limit control.

### Get Specific Domains
When "All Domains" is disabled, additional filtering options may be applied for more targeted domain retrieval.

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