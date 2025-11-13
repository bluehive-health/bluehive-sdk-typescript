// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employees',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/employees/unlink-user',
  operationId: 'unlinkEmployeeUser',
};

export const tool: Tool = {
  name: 'unlink_user_employees',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove the link between an employee and a user account\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/employee_unlink_user_response',\n  $defs: {\n    employee_unlink_user_response: {\n      type: 'object',\n      description: 'Employee unlinked successfully',\n      properties: {\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'message',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      employeeId: {
        type: 'string',
        description: 'ID of the employee to unlink',
      },
      userId: {
        type: 'string',
        description: 'ID of the user to unlink from',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['employeeId', 'userId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.employees.unlinkUser(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
