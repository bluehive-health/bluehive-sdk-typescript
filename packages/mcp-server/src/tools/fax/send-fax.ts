// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'fax',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/fax/send',
  operationId: 'sendFax',
};

export const tool: Tool = {
  name: 'send_fax',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend a fax document to a specified number using the configured fax provider.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Unique fax identifier'\n    },\n    createdAt: {\n      type: 'string',\n      description: 'ISO timestamp when fax was created'\n    },\n    from: {\n      type: 'string',\n      description: 'Sender fax number'\n    },\n    provider: {\n      type: 'string',\n      description: 'Provider used to send the fax'\n    },\n    status: {\n      type: 'string',\n      description: 'Current fax status',\n      enum: [        'queued',\n        'dialing',\n        'sending',\n        'delivered',\n        'failed',\n        'cancelled',\n        'retrying'\n      ]\n    },\n    to: {\n      type: 'string',\n      description: 'Recipient fax number'\n    },\n    estimatedDelivery: {\n      type: 'string',\n      description: 'Estimated delivery time (ISO timestamp)'\n    }\n  },\n  required: [    'id',\n    'createdAt',\n    'from',\n    'provider',\n    'status',\n    'to'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      document: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'Base64 encoded document content',
          },
          contentType: {
            type: 'string',
            description: 'MIME type of the document',
            enum: [
              'application/pdf',
              'image/tiff',
              'image/tif',
              'image/jpeg',
              'image/jpg',
              'image/png',
              'text/plain',
            ],
          },
          filename: {
            type: 'string',
            description: 'Optional filename for the document',
          },
        },
        required: ['content', 'contentType'],
      },
      to: {
        type: 'string',
        description: 'Recipient fax number (E.164 format preferred)',
      },
      from: {
        type: 'string',
        description: 'Sender fax number (optional, uses default if not provided)',
      },
      provider: {
        type: 'string',
        description: 'Optional provider override (uses default if not specified)',
      },
      subject: {
        type: 'string',
        description: 'Subject line for the fax',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.fax.send(body)));
};

export default { metadata, tool, handler };
