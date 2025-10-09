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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Employer\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/employer_create_response',\n  $defs: {\n    employer_create_response: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string'\n        },\n        address: {\n          type: 'object',\n          additionalProperties: true\n        },\n        email: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        phones: {\n          type: 'array',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        createdAt: {\n          type: 'string'\n        },\n        createdBy: {\n          type: 'string'\n        },\n        demo: {\n          type: 'boolean'\n        },\n        employeeConsent: {\n          type: 'boolean'\n        },\n        onsiteClinic: {\n          type: 'boolean'\n        },\n        website: {\n          type: 'string'\n        }\n      },\n      required: [        '_id',\n        'address',\n        'email',\n        'name',\n        'phones'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
          street1: {
            type: 'string',
          },
          zipCode: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          street2: {
            type: 'string',
          },
        },
        required: ['city', 'state', 'street1', 'zipCode'],
      },
      email: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      phones: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            number: {
              type: 'string',
            },
            primary: {
              type: 'boolean',
            },
            type: {
              type: 'string',
            },
          },
          required: ['number'],
        },
      },
      billingAddress: {
        type: 'object',
        additionalProperties: true,
      },
      checkr: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
        },
        required: ['id'],
      },
      demo: {
        type: 'boolean',
      },
      employeeConsent: {
        type: 'boolean',
      },
      metadata: {
        type: 'object',
        additionalProperties: true,
      },
      onsiteClinic: {
        type: 'boolean',
      },
      website: {
        type: 'string',
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
