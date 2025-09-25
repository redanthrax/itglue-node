# Passwords Operations

## Get Many

Retrieve multiple password entries from IT Glue with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of passwords to return (if Return All is false)
- **Filters**: Various filtering options including:
  - Organization ID, Password Category ID
  - Name, Username, URL, Notes
  - Date range (Created At/Updated At)
- **Options**: Additional settings including:
  - **Include**: Related resources (password_category, organization, attachments)
  - **Sort**: Sort order by name or date (ascending/descending)


## Get by ID

Retrieve a specific password by its ID.

**Parameters:**
- **Password ID**: The ID of the password to retrieve
- **Options**: Additional data to include in the response:
  - **Include**: Related resources (password_category, organization, attachments)

## Create

Create a new password entry in IT Glue.

**Required Parameters:**
- **Organization ID**: The organization to create the password for
- **Name**: Descriptive name for the password entry

**Optional Parameters:**
- **Username**: Username associated with the password
- **Password**: The actual password value (securely handled)
- **Additional Fields**: Comprehensive collection including:
  - Password Category ID
  - URL and Notes
  - Restricted access settings
  - Show Password visibility


## Update

Update an existing password entry using PATCH methodology - only specify the fields you want to change.

**Required Parameters:**
- **Password ID**: The ID of the password to update

**Update Fields** (Optional Collection):
Add only the fields you want to update:
- **Name**: The name of the password entry
- **Notes**: Additional notes for the password
- **Password**: The actual password value (securely handled)
- **Password Category ID**: The password category identifier
- **Restricted**: Whether the password is restricted
- **Show Password**: Whether to show the password in plain text
- **URL**: The URL associated with the password
- **Username**: The username associated with the password

## Delete

Delete a password entry from IT Glue.

**Required Parameters:**
- **Password ID**: The ID of the password to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access password data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Password ID does not exist
- **422 Unprocessable Entity**: Validation errors in password data

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that password IDs exist and are accessible
2. Verify permissions for password operations
3. Ensure organization IDs are valid when creating passwords
4. Validate password category IDs are correct
5. Check that required fields are properly populated

## Response Format

### Get Many Response
Returns a collection of passwords with record count and password details including ID, name, username, URL, organization relationships, and category information.

### Get by ID Response
Returns a single password object with full details when additional options are included, including comprehensive password information, organization and category relationships, and attachment data.
