# n8n-nodes-itglue

An n8n community node for integrating with IT Glue API.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

```bash
npm install n8n-nodes-itglue
```

## Prerequisites

- IT Glue account with API access
- API Key from IT Glue
- Your IT Glue region (US, Europe, or Australia)

## Setup

### Setting up API Key in IT Glue

1. Log into your IT Glue instance
2. Navigate to Account > Settings > API Keys
3. Create a new API key
4. Note down the API Key for use in n8n

### Configuring Credentials in n8n

1. **Region**: Select your IT Glue region (api, api.eu, or api.au)
2. **API Key**: The API key from IT Glue

## Supported Operations

### [Attachments](./docs/attachments.md)
Manage file attachments with create, update, and bulk destroy operations for document management.

### [Configurations](./docs/configurations.md)
Complete configuration item management with CRUD operations, bulk updates, and comprehensive filtering for IT asset management.

### [Configuration Interfaces](./docs/configuration-interfaces.md)
Manage network interfaces and connections with full CRUD operations and bulk update capabilities.

### [Configuration Statuses](./docs/configuration-statuses.md)
Manage configuration status definitions with complete CRUD operations for asset lifecycle tracking.

### [Configuration Types](./docs/configuration-types.md)
Manage configuration type definitions with CRUD operations for asset categorization.

### [Contacts](./docs/contacts.md)
Manage contact records with full CRUD operations, bulk updates, and comprehensive contact information management.

### [Contact Types](./docs/contact-types.md)
Manage contact type definitions with CRUD operations for contact categorization.

### [Countries](./docs/countries.md)
Retrieve country information and geographical data with filtering capabilities.

### [Documents](./docs/documents.md)
Complete document management with CRUD operations, bulk updates, and comprehensive document handling.

### [Domains](./docs/domains.md)
Retrieve domain records and DNS-related information with filtering options.

### [Expirations](./docs/expirations.md)
Track asset and license expirations with retrieval and filtering capabilities.

### [Flexible Assets](./docs/flexible-assets.md)
Manage custom flexible asset types with dynamic field structures, supporting full CRUD operations and bulk destroy.

### [Flexible Asset Fields](./docs/flexible-asset-fields.md)
Manage flexible asset field definitions with complete CRUD operations and bulk update capabilities.

### [Flexible Asset Types](./docs/flexible-asset-types.md)
Manage flexible asset type definitions with full CRUD operations for custom asset management.

### [Logs](./docs/logs.md)
Retrieve system logs and audit trail information for monitoring and compliance.

### [Operating Systems](./docs/operating-systems.md)
Retrieve operating system information and specifications with filtering capabilities.

### [Organizations](./docs/organizations.md)
Manage organization records with comprehensive CRUD operations including creation, updates, bulk operations, and deletion with filtering capabilities.

### [Organization Statuses](./docs/organization-statuses.md)
Manage organization status definitions with CRUD operations for organizational lifecycle tracking.

### [Organization Types](./docs/organization-types.md)
Manage organization type definitions with CRUD operations for organizational categorization.

### [Passwords](./docs/passwords.md)
Securely manage password entries with full CRUD operations including creation, updates, retrieval, deletion, and bulk operations with advanced filtering.

### [Password Categories](./docs/password-categories.md)
Manage password category definitions with CRUD operations for password organization.

### [Platforms](./docs/platforms.md)
Retrieve platform and technology information with filtering capabilities.

### [Regions](./docs/regions.md)
Retrieve regional information and geographical data with filtering options.

### [Related Items](./docs/related-items.md)
Manage relationships between different IT Glue resources with CRUD operations and bulk destroy capabilities.

### [Users](./docs/users.md)
Manage user accounts with CRUD operations for user administration.

### [User Metrics](./docs/user-metrics.md)
Retrieve user activity metrics and analytics for monitoring user engagement.

## Resources

- [IT Glue API Documentation](https://api.itglue.com/developer/)
- [n8n Documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/itglue-node)

## License

MIT
