// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employees',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/employees/{employeeId}',
  operationId: 'deleteEmployee',
};

export const tool: Tool = {
  name: 'delete_employees',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete an employee from the system. Cannot delete employees with existing orders.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Employee deleted successfully',\n  properties: {\n    message: {\n      type: 'string'\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'message',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      employeeId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['employeeId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { employeeId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.employees.delete(employeeId)));
};

export default { metadata, tool, handler };
