// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employees',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/employees/link-user',
  operationId: 'linkEmployeeUser',
};

export const tool: Tool = {
  name: 'link_user_employees',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLink an employee to a user account with specified roles\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/employee_link_user_response',\n  $defs: {\n    employee_link_user_response: {\n      type: 'object',\n      description: 'Employee linked successfully',\n      properties: {\n        linkId: {\n          type: 'string',\n          description: 'ID of the created link'\n        },\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'linkId',\n        'message',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      employeeId: {
        type: 'string',
      },
      userId: {
        type: 'string',
      },
      role: {
        type: 'array',
        items: {
          type: 'string',
        },
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
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.employees.linkUser(body)));
};

export default { metadata, tool, handler };
