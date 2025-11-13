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
  httpPath: '/v1/orders/send',
  operationId: 'sendOrderForEmployee',
};

export const tool: Tool = {
  name: 'send_for_employee_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend an order for a specific employee. Requires API key, login token, and user ID. This endpoint specifically handles employer-to-employee order sending.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_send_for_employee_response',\n  $defs: {\n    order_send_for_employee_response: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            orderId: {\n              type: 'string'\n            },\n            orderNumber: {\n              type: 'string'\n            },\n            success: {\n              type: 'string',\n              enum: [                true\n              ]\n            },\n            message: {\n              type: 'string'\n            }\n          },\n          required: [            'orderId',\n            'orderNumber',\n            'success'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            orderResults: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  orderId: {\n                    type: 'string'\n                  },\n                  orderNumber: {\n                    type: 'string'\n                  },\n                  providerId: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'orderId',\n                  'orderNumber',\n                  'providerId'\n                ]\n              }\n            },\n            status: {\n              type: 'string',\n              enum: [                'split'\n              ]\n            },\n            success: {\n              type: 'string',\n              enum: [                true\n              ]\n            },\n            message: {\n              type: 'string'\n            }\n          },\n          required: [            'orderResults',\n            'status',\n            'success'\n          ]\n        }\n      ],\n      description: 'Order sent successfully (single or split)'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      employeeId: {
        type: 'string',
        description: 'Employee ID to send order to',
      },
      employerId: {
        type: 'string',
        description: 'Employer ID sending the order',
      },
      providersIds: {
        type: 'array',
        description: 'Array mapping each service (by index) to a provider; serviceId optional',
        items: {
          type: 'object',
          properties: {
            providerId: {
              type: 'string',
            },
            serviceId: {
              type: 'string',
            },
          },
          required: ['providerId'],
        },
      },
      servicesIds: {
        type: 'array',
        description: 'Array of service IDs to include in the order',
        items: {
          type: 'string',
        },
      },
      'login-token': {
        type: 'string',
      },
      'user-id': {
        type: 'string',
      },
      brandId: {
        type: 'string',
        description: 'Brand ID for branded orders',
      },
      dueDate: {
        type: 'string',
        description: 'Due date for the order (date or date-time ISO string)',
      },
      dueDates: {
        type: 'array',
        description: 'Array of due dates per service',
        items: {
          type: 'string',
        },
      },
      metadata: {
        type: 'object',
        description:
          'Optional arbitrary metadata to store on the order (non-indexed passthrough, <=10KB when JSON stringified)',
        additionalProperties: true,
      },
      providerCreated: {
        type: 'boolean',
        description: 'Whether this order is being created by a provider (affects permission checking)',
      },
      providerId: {
        type: 'string',
        description: 'Single provider ID (shortcut when all services map to one provider)',
      },
      quantities: {
        type: 'object',
        description: 'Service ID to quantity mapping',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['employeeId', 'employerId', 'providersIds', 'servicesIds', 'login-token', 'user-id'],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.orders.sendForEmployee(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
