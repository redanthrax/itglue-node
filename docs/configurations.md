# Configurations Operations

## Get

Retrieve configuration item data from IT Glue with comprehensive filtering and pagination options.

**Parameters:**
- **Return All**: Whether to return all results or use pagination (default: false)
- **Limit**: Maximum number of results per page when not returning all (default: 50, min: 1)
- **Page Number**: Specific page for pagination (starts at 1)

### Filters
Optional collection of filter options:
- **Configuration ID**: Filter by specific configuration ID
- **Configuration Name**: Filter by configuration name (text search)
- **Configuration Status Name or ID**: Choose from dropdown or specify ID
- **Configuration Type Name or ID**: Choose from dropdown or specify ID
- **Contact Name or ID**: Choose from dropdown or specify ID
- **MAC Address**: Filter by MAC address
- **Organization Name or ID**: Choose from dropdown or specify ID
- **Serial Number**: Filter by serial number
- **Asset Tag**: Filter by asset tag
- **Archived**: Filter by archived status (true/false)

### Advanced Integration Filters
- **PSA ID**: Filter by PSA system ID (requires PSA Integration Type)
- **PSA Integration Type**: Autotask, Kaseya BMS, Manage, Pulseway PSA, Tigerpaw, Vorex
- **RMM ID**: Filter by RMM system ID (requires RMM Integration Type)
- **RMM Integration Type**: 20+ supported RMM systems including Ninja RMM, ConnectWise Automate, Kaseya VSA, etc.

### Options
- **Include**: Related resources to include (adapters_resources, attachments, configuration_interfaces, passwords, rmm_records, tickets, etc.)
- **Sort**: Sort order options:
  - Created (Newest/Oldest First)
  - ID (Highest/Lowest First)
  - Name (A-Z, Z-A)
  - Updated (Newest/Oldest First)

## Get by ID

Retrieve a specific configuration by ID with optional related data inclusion.

**Parameters:**
- **Configuration ID**: The ID of the configuration to retrieve (required)
- **Include Related Data**: Select related data to include in the response:
  - Adapters
  - Attachments
  - Configuration Interfaces
  - Configuration Status
  - Configuration Type
  - Contact
  - Location
  - Manufacturer
  - Model
  - Operating System
  - Organization
  - Related Items

## Create

Create a new configuration item with comprehensive field support.

**Required Parameters:**
- **Organization ID**: The ID of the organization this configuration belongs to
- **Configuration Type ID**: The ID of the configuration type
- **Name**: The name of the configuration

**Optional Parameters:**
- **Configuration Status ID**: The ID of the configuration status
- **Contact ID**: The ID of the contact associated with this configuration
- **Location ID**: The ID of the location where this configuration is located
- **Manufacturer ID**: The ID of the manufacturer
- **Model ID**: The ID of the model
- **Operating System ID**: The ID of the operating system
- **Hostname**: The hostname of the configuration
- **Primary IP**: The primary IP address of the configuration
- **MAC Address**: The MAC address of the configuration
- **Serial Number**: The serial number of the configuration
- **Asset Tag**: The asset tag of the configuration
- **Installed By**: Who installed the configuration
- **Purchased At**: When the configuration was purchased
- **Installed At**: When the configuration was installed
- **Warranty Expires At**: When the warranty expires
- **Notes**: Additional notes for the configuration

## Update

Update an existing configuration using PATCH methodology - only specify the fields you want to change.

**Required Parameters:**
- **Configuration ID**: The ID of the configuration to update

**Update Fields** (Optional Collection):
Add only the fields you want to update:

### Basic Information
- **Name**: Configuration name
- **Hostname**: Device hostname
- **Notes**: Additional notes

### Network Information
- **Primary IP**: IPv4/IPv6 address
- **MAC Address**: Network MAC address (17 char limit)
- **Default Gateway**: Network gateway

### Asset Information
- **Serial Number**: Device serial number
- **Asset Tag**: Asset tracking tag
- **Position**: Physical position/location

### Relationships (with Dropdowns)
- **Configuration Status Name or ID**: Choose from available statuses
- **Configuration Type Name or ID**: Choose from available types
- **Contact Name or ID**: Choose from available contacts
- **Location Name or ID**: Choose from available locations
- **Manufacturer Name or ID**: Choose from available manufacturers
- **Model Name or ID**: Choose from available models
- **Operating System Name or ID**: Choose from available OS options

### Purchase/Installation Information
- **Purchased At**: Purchase date
- **Purchased By**: Who purchased it
- **Installed At**: Installation date
- **Installed By**: Who installed it
- **Warranty Expires At**: Warranty expiration

### MITP Information
- **MITP Device Expiration Date**: MITP device expiry
- **MITP End of Life Date**: MITP EOL date

### System Information
- **Operating System Notes**: OS-specific notes
- **Organization ID**: Parent organization (for nested routes)

### Status Flags
- **Archived**: Whether configuration is archived
- **Restricted**: Whether configuration is restricted

## Bulk Update

Update multiple configurations at once with comprehensive field support.

**Parameters:**
- **Updates**: Collection of configuration updates, each containing:
  - **Configuration ID**: The ID of the configuration to update (required)
  - **Name**: The new name for the configuration
  - **Hostname**: The hostname of the configuration
  - **Primary IP**: The primary IP address
  - **MAC Address**: The MAC address
  - **Serial Number**: The serial number
  - **Asset Tag**: The asset tag
  - **Configuration Status ID**: The configuration status ID
  - **Contact ID**: The contact ID
  - **Location ID**: The location ID
  - **Notes**: Additional notes

## Bulk Delete

Delete multiple configurations at once.

**Parameters:**
- **Configuration IDs**: Comma-separated list of configuration IDs to delete

## Error Handling

Common errors you may encounter:

### Authentication Errors
- **401 Unauthorized**: Invalid API credentials
- **403 Forbidden**: Insufficient permissions to access configuration data

### Validation Errors
- **400 Bad Request**: Invalid parameters or missing required fields
- **404 Not Found**: Configuration ID does not exist

### API Rate Limiting
- **429 Too Many Requests**: Rate limit exceeded, retry with exponential backoff

### Debugging Context
When debugging issues:
1. Check that configuration IDs exist and are accessible
2. Verify permissions for configuration operations
3. Ensure organization IDs are valid when filtering by organization
4. Validate that configuration type IDs exist when filtering by type
5. Check that the IT Glue instance has configuration items available

## Response Format

### Get Response
Returns configuration data with details including ID, name, organization relationship, configuration type, assets, and other IT asset management information.

### Get All Response
Returns a collection of configuration items with pagination information and comprehensive asset details for IT infrastructure management.