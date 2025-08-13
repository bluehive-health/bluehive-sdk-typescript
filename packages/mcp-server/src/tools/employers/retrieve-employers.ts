// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/employers/{employerId}',
  operationId: 'getEmployer',
};

export const tool: Tool = {
  name: 'retrieve_employers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve an employer by their unique ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _id: {\n      type: 'string',\n      description: 'Unique identifier for the employer'\n    },\n    address: {\n      type: 'object',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        street1: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        street2: {\n          type: 'string'\n        },\n        zipCode: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'state',\n        'street1'\n      ]\n    },\n    email: {\n      type: 'string'\n    },\n    name: {\n      type: 'string',\n      description: 'The name of the employer'\n    },\n    phones: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          number: {\n            type: 'string'\n          },\n          primary: {\n            type: 'boolean'\n          },\n          type: {\n            type: 'string'\n          }\n        },\n        required: [          'number'\n        ]\n      }\n    },\n    billingAddress: {\n      type: 'object',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        street1: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        street2: {\n          type: 'string'\n        },\n        zipCode: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'state',\n        'street1'\n      ]\n    },\n    checkr: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    },\n    createdAt: {\n      type: 'string',\n      format: 'date-time'\n    },\n    createdBy: {\n      type: 'string'\n    },\n    demo: {\n      type: 'boolean'\n    },\n    employeeConsent: {\n      type: 'boolean'\n    },\n    onsiteClinic: {\n      type: 'boolean'\n    },\n    website: {\n      type: 'string'\n    }\n  },\n  required: [    '_id',\n    'address',\n    'email',\n    'name',\n    'phones'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      employerId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['employerId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { employerId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.employers.retrieve(employerId)));
};

export default { metadata, tool, handler };
