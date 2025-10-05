// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/orders/{orderId}/results',
};

export const tool: Tool = {
  name: 'retrieve_results_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve results for an order. Supports filtering by serviceId, status, date window, and pagination.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    meta: {\n      type: 'object',\n      properties: {\n        orderId: {\n          type: 'string'\n        },\n        page: {\n          type: 'number'\n        },\n        pageSize: {\n          type: 'number'\n        },\n        returned: {\n          type: 'number'\n        },\n        totalServices: {\n          type: 'number'\n        },\n        employeeId: {\n          type: 'string'\n        },\n        orderNumber: {\n          type: 'string'\n        },\n        providerId: {\n          type: 'string'\n        }\n      },\n      required: [        'orderId',\n        'page',\n        'pageSize',\n        'returned',\n        'totalServices'\n      ]\n    },\n    services: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          serviceId: {\n            type: 'string'\n          },\n          status: {\n            type: 'string'\n          },\n          altTxt: {\n            type: 'string'\n          },\n          completed_datetime: {\n            type: 'string',\n            format: 'date-time'\n          },\n          contacts: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          drawn_datetime: {\n            type: 'string',\n            format: 'date-time'\n          },\n          fileIds: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          message: {\n            type: 'string'\n          },\n          result: {\n            type: 'string'\n          },\n          resultsPosted: {\n            type: 'string',\n            format: 'date-time'\n          }\n        },\n        required: [          'serviceId',\n          'status'\n        ]\n      }\n    }\n  },\n  required: [    'meta',\n    'services'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'string',
      },
      page: {
        type: 'integer',
      },
      pageSize: {
        type: 'integer',
      },
      serviceId: {
        type: 'string',
      },
      since: {
        type: 'string',
        format: 'date-time',
      },
      status: {
        type: 'string',
      },
      until: {
        type: 'string',
        format: 'date-time',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { orderId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.orders.retrieveResults(orderId, body)),
  );
};

export default { metadata, tool, handler };
