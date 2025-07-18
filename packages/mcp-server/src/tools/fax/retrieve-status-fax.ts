// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'fax',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/fax/status/{id}',
  operationId: 'getFaxStatus',
};

export const tool: Tool = {
  name: 'retrieve_status_fax',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the current status and details of a fax by its ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Fax identifier'\n    },\n    createdAt: {\n      type: 'string',\n      description: 'ISO timestamp when fax was created'\n    },\n    from: {\n      type: 'string',\n      description: 'Sender fax number'\n    },\n    provider: {\n      type: 'string',\n      description: 'Provider used to send the fax'\n    },\n    status: {\n      type: 'string',\n      description: 'Current fax status',\n      enum: [        'queued',\n        'dialing',\n        'sending',\n        'delivered',\n        'failed',\n        'cancelled',\n        'retrying'\n      ]\n    },\n    to: {\n      type: 'string',\n      description: 'Recipient fax number'\n    },\n    updatedAt: {\n      type: 'string',\n      description: 'ISO timestamp when status was last updated'\n    },\n    cost: {\n      type: 'number',\n      description: 'Cost of the fax'\n    },\n    deliveredAt: {\n      type: 'string',\n      description: 'ISO timestamp when fax was delivered'\n    },\n    duration: {\n      type: 'number',\n      description: 'Call duration in seconds'\n    },\n    errorMessage: {\n      type: 'string',\n      description: 'Error message if fax failed'\n    },\n    pageCount: {\n      type: 'number',\n      description: 'Number of pages in the fax'\n    },\n    providerData: {\n      type: 'object',\n      description: 'Provider-specific additional data'\n    }\n  },\n  required: [    'id',\n    'createdAt',\n    'from',\n    'provider',\n    'status',\n    'to',\n    'updatedAt'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.fax.retrieveStatus(id)));
};

export default { metadata, tool, handler };
