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
  httpPath: '/v1/orders/{orderId}/schedule-appointment',
};

export const tool: Tool = {
  name: 'schedule_appointment_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSchedule an appointment or walk-in for an existing order. Sends HL7 SIU^S12 message for appointment booking.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_schedule_appointment_response',\n  $defs: {\n    order_schedule_appointment_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'message',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'string',
      },
      appointment: {
        anyOf: [
          {
            type: 'object',
            properties: {
              date: {
                type: 'string',
                description: 'Required for appointment type',
              },
              dateTime: {
                type: 'string',
                description: 'Required for appointment type',
                format: 'date-time',
              },
              time: {
                type: 'string',
                description: 'Required for appointment type',
              },
              notes: {
                type: 'string',
                description: 'Optional for walkin type',
              },
              type: {
                type: 'string',
                enum: ['appointment'],
              },
            },
            required: ['date', 'dateTime', 'time'],
          },
          {
            type: 'object',
            properties: {
              date: {
                type: 'string',
                description: 'Required for appointment type',
              },
              dateTime: {
                type: 'string',
                description: 'Required for appointment type',
                format: 'date-time',
              },
              notes: {
                type: 'string',
                description: 'Optional for walkin type',
              },
              time: {
                type: 'string',
                description: 'Required for appointment type',
              },
              type: {
                type: 'string',
                enum: ['walkin'],
              },
            },
          },
        ],
      },
      orderAccessCode: {
        type: 'string',
        description: 'Order access code for authorization',
      },
      providerId: {
        type: 'string',
        description: 'Provider ID for authorization',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['orderId', 'appointment'],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { orderId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.orders.scheduleAppointment(orderId, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
