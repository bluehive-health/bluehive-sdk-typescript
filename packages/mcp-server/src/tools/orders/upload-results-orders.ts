// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/orders/{orderId}/upload-results',
};

export const tool: Tool = {
  name: 'upload_results_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload test results for a specific order item. Supports both existing fileIds and base64 encoded files. Requires order access code and employee verification.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_upload_results_response',\n  $defs: {\n    order_upload_results_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'string',
      },
      captchaToken: {
        type: 'string',
      },
      orderAccessCode: {
        type: 'string',
      },
      serviceId: {
        type: 'string',
      },
      dob: {
        type: 'string',
        description: 'Date of birth in YYYY-MM-DD format',
      },
      fileIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      files: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            base64: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
          },
          required: ['base64', 'name', 'type'],
        },
      },
      lastName: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['orderId', 'captchaToken', 'orderAccessCode', 'serviceId'],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { orderId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.orders.uploadResults(orderId, body)));
};

export default { metadata, tool, handler };
