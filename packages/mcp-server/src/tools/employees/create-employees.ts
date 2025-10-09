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
  httpPath: '/v1/employees',
  operationId: 'createEmployee',
};

export const tool: Tool = {
  name: 'create_employees',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new employee in the system.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/employee_create_response',\n  $defs: {\n    employee_create_response: {\n      type: 'object',\n      description: 'Employee created successfully',\n      properties: {\n        employeeId: {\n          type: 'string',\n          description: 'ID of the created employee'\n        },\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'employeeId',\n        'message',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      activeAccount: {
        type: 'string',
        enum: ['Active', 'Inactive'],
      },
      address: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
          },
          postalCode: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
          street1: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          county: {
            type: 'string',
          },
          street2: {
            type: 'string',
          },
        },
        required: ['city', 'postalCode', 'state', 'street1'],
      },
      blurb: {
        type: 'string',
      },
      departments: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      dob: {
        type: 'string',
      },
      employer_id: {
        type: 'string',
      },
      extendedFields: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
          required: ['name', 'value'],
        },
      },
      phone: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            number: {
              type: 'string',
            },
            type: {
              type: 'string',
              enum: ['Cell', 'Home', 'Work', 'Other'],
            },
          },
          required: ['number', 'type'],
        },
      },
      title: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email', 'firstName', 'lastName'],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.employees.create(body)));
};

export default { metadata, tool, handler };
