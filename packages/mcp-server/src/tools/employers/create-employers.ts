// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/employers',
  operationId: 'createEmployer',
};

export const tool: Tool = {
  name: 'create_employers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new employer in the system.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _id: {\n      type: 'string',\n      description: 'Unique identifier for the employer'\n    },\n    address: {\n      type: 'object',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        street1: {\n          type: 'string'\n        },\n        zipCode: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        street2: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'state',\n        'street1',\n        'zipCode'\n      ]\n    },\n    email: {\n      type: 'string'\n    },\n    name: {\n      type: 'string',\n      description: 'The name of the employer'\n    },\n    phones: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          number: {\n            type: 'string'\n          },\n          primary: {\n            type: 'boolean'\n          },\n          type: {\n            type: 'string'\n          }\n        },\n        required: [          'number'\n        ]\n      }\n    },\n    billingAddress: {\n      type: 'object',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        street1: {\n          type: 'string'\n        },\n        zipCode: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        street2: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'state',\n        'street1',\n        'zipCode'\n      ]\n    },\n    checkr: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    },\n    createdAt: {\n      type: 'string',\n      format: 'date-time'\n    },\n    createdBy: {\n      type: 'string'\n    },\n    demo: {\n      type: 'boolean'\n    },\n    employeeConsent: {\n      type: 'boolean'\n    },\n    onsiteClinic: {\n      type: 'boolean'\n    },\n    website: {\n      type: 'string'\n    }\n  },\n  required: [    '_id',\n    'address',\n    'email',\n    'name',\n    'phones'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'object',
        description: 'Primary address of the employer',
        properties: {
          city: {
            type: 'string',
            description: 'City',
          },
          state: {
            type: 'string',
            description: 'State or province',
          },
          street1: {
            type: 'string',
            description: 'Primary street address',
          },
          zipCode: {
            type: 'string',
            description: 'ZIP/postal code',
          },
          country: {
            type: 'string',
            description: 'Country',
          },
          street2: {
            type: 'string',
            description: 'Secondary street address',
          },
        },
        required: ['city', 'state', 'street1', 'zipCode'],
      },
      email: {
        type: 'string',
        description: 'Email address for the employer administrator',
      },
      name: {
        type: 'string',
        description: 'The name of the employer',
      },
      phones: {
        type: 'array',
        description: 'Phone numbers for the employer',
        items: {
          type: 'object',
          properties: {
            number: {
              type: 'string',
              description: 'Phone number',
            },
            primary: {
              type: 'boolean',
              description: 'Is this the primary phone number',
            },
            type: {
              type: 'string',
              description: 'Phone type (e.g., office, mobile)',
            },
          },
          required: ['number'],
        },
      },
      billingAddress: {
        type: 'object',
        description: 'Billing address of the employer (optional)',
        properties: {
          city: {
            type: 'string',
            description: 'City',
          },
          state: {
            type: 'string',
            description: 'State or province',
          },
          street1: {
            type: 'string',
            description: 'Primary street address',
          },
          zipCode: {
            type: 'string',
            description: 'ZIP/postal code',
          },
          country: {
            type: 'string',
            description: 'Country',
          },
          street2: {
            type: 'string',
            description: 'Secondary street address',
          },
        },
        required: ['city', 'state', 'street1', 'zipCode'],
      },
      checkr: {
        type: 'object',
        description: 'Checkr information (excluding sensitive token)',
        properties: {
          id: {
            type: 'string',
            description: 'Checkr Account ID',
          },
          status: {
            type: 'string',
            description: 'Checkr Account Status',
          },
        },
        required: ['id'],
      },
      demo: {
        type: 'boolean',
        description: 'Whether this is a demo employer',
      },
      employeeConsent: {
        type: 'boolean',
        description: 'Whether employee consent is required',
      },
      metadata: {
        type: 'object',
        description: 'Additional metadata for the employer',
        additionalProperties: true,
      },
      onsiteClinic: {
        type: 'boolean',
        description: 'Whether the employer has an onsite clinic',
      },
      website: {
        type: 'string',
        description: 'Website URL for the employer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['address', 'email', 'name', 'phones'],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.employers.create(body)));
};

export default { metadata, tool, handler };
