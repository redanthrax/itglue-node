# n8n-nodes-itglue

An n8n community node for integrating with IT Glue API.

IT Glue is award-winning IT documentation software designed to help you maximize the efficiency, transparency and consistency of your team.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

```bash
npm install n8n-nodes-itglue
```

## Prerequisites

- IT Glue account with API access
- API Key from IT Glue
- Your IT Glue base URL (e.g., https://your-subdomain.itglue.com)

## Setup

### Setting up API Key in IT Glue

1. Log into your IT Glue instance
2. Navigate to Account > Settings > API Keys
3. Create a new API key
4. Note down the API Key for use in n8n

### Configuring Credentials in n8n

1. **Base API URL**: Your IT Glue instance URL (e.g., https://your-subdomain.itglue.com)
2. **API Key**: The API key from IT Glue

## Supported Operations

### [Organizations](./docs/organizations.md)
Manage organization records with comprehensive CRUD operations including creation, updates, deletion, and retrieval with filtering capabilities.

### [Passwords](./docs/passwords.md)
Securely manage password entries with full CRUD operations including creation, updates, retrieval, and deletion with advanced filtering.

### [Flexible Assets](./docs/flexible-assets.md)
Manage custom flexible asset types with dynamic field structures, supporting creation, updates, retrieval, and deletion.

### [Contacts](./docs/contacts.md)
Manage contact records with full CRUD operations including creation, updates, retrieval, and deletion with contact information.

### [Configurations](./docs/configurations.md)
Retrieve configuration item information with comprehensive filtering options for IT asset management.

### [Domains](./docs/domains.md)
Manage domain records and DNS-related information with retrieval operations.

## Resources

- [IT Glue API Documentation](https://api.itglue.com/developer/)
- [n8n Documentation](https://docs.n8n.io)
- [Repository](https://github.com/redanthrax/itglue-node)

## Compatibility

- n8n Version 0.199.0+
- IT Glue API v1

## License

MIT
