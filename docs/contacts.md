# Contacts Operations

## Get Many

Retrieve multiple contacts from IT Glue with optional filtering.

**Parameters:**
- **Return All**: Whether to return all results or limit
- **Limit**: Maximum number of contacts to return (if Return All is false)
- **Filters**: Various filtering options including:
  - Organization ID, Contact Type ID
  - First Name, Last Name, Title
  - Date range (Created At/Updated At)
- **Options**: Additional settings including:
  - **Include**: Related resources (contact_type, organization, passwords)
  - **Sort**: Sort order by name or date (ascending/descending)


## Get by ID

Retrieve a specific contact by their ID.

**Parameters:**
- **Contact ID**: The ID of the contact to retrieve
- **Options**: Additional data to include in the response:
  - **Include**: Related resources (contact_type, organization, passwords)

## Create

Create a new contact in IT Glue.

**Required Parameters:**
- **Organization ID**: The organization to create the contact for
- **First Name**: Contact's first name

**Optional Parameters:**
- **Last Name**: Contact's last name
- **Additional Fields**: Comprehensive collection including:
  - Contact Type ID
  - Email addresses (JSON format)
  - Phone numbers (JSON format)
  - Job title and notes


## Update

Update an existing contact.

**Required Parameters:**
- **Contact ID**: The ID of the contact to update

**Optional Parameters:**
- **Update Fields**: Collection of fields to update including name, contact information, type, and notes

## Delete

Delete a contact from IT Glue.

**Required Parameters:**
- **Contact ID**: The ID of the contact to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access contact data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Contact ID does not exist
- **422 Unprocessable Entity**: Validation errors in contact data

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that contact IDs exist and are accessible
2. Verify permissions for contact operations
3. Ensure organization IDs are valid when creating contacts
4. Validate contact type IDs are correct
5. Check that email and phone JSON formatting is correct
6. Ensure required fields are properly populated

## Response Format

### Get Many Response
Returns a collection of contacts with record count and contact details including ID, name, title, organization relationships, and contact information.

### Get by ID Response
Returns a single contact object with full details when additional options are included, including comprehensive contact information, organization and contact type relationships, and associated password data.