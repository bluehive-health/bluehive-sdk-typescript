// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/orders/{orderId}',
};

export const tool: Tool = {
  name: 'update_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate order details and associated order items. Allows updating order status, metadata, and modifying order item services.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_update_response',\n  $defs: {\n    order_update_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string'\n        },\n        orderId: {\n          type: 'string'\n        },\n        orderNumber: {\n          type: 'string'\n        },\n        success: {\n          type: 'string',\n          enum: [            true\n          ]\n        },\n        updatedFields: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'message',\n        'orderId',\n        'orderNumber',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description:
          'Arbitrary metadata to update on the order (non-indexed passthrough, <=10KB when JSON stringified)',
        additionalProperties: true,
      },
      services: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            serviceId: {
              type: 'string',
            },
            dueDate: {
              type: 'string',
              format: 'date-time',
            },
            results: {
              type: 'object',
              additionalProperties: true,
            },
            status: {
              type: 'string',
              enum: ['pending', 'in_progress', 'completed', 'cancelled', 'rejected'],
            },
          },
          required: ['serviceId'],
        },
      },
      status: {
        type: 'string',
        enum: [
          'order_sent',
          'order_accepted',
          'order_refused',
          'employee_confirmed',
          'order_fulfilled',
          'order_complete',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['orderId'],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { orderId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.orders.update(orderId, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
