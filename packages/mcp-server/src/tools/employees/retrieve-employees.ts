// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employees',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/employees/{employeeId}',
  operationId: 'getEmployee',
};

export const tool: Tool = {
  name: 'retrieve_employees',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve an employee by their unique ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/employee_retrieve_response',\n  $defs: {\n    employee_retrieve_response: {\n      type: 'object',\n      description: 'Employee found successfully',\n      properties: {\n        employee: {\n          type: 'object',\n          description: 'Employee details',\n          properties: {\n            _id: {\n              type: 'string',\n              description: 'Unique identifier'\n            },\n            email: {\n              type: 'string',\n              description: 'Email address'\n            },\n            employer_id: {\n              type: 'string',\n              description: 'ID of associated employer'\n            },\n            firstName: {\n              type: 'string',\n              description: 'First name'\n            },\n            lastName: {\n              type: 'string',\n              description: 'Last name'\n            },\n            activeAccount: {\n              type: 'string',\n              description: 'Account status',\n              enum: [                'Active',\n                'Inactive'\n              ]\n            },\n            address: {\n              type: 'object',\n              description: 'Employee address',\n              properties: {\n                city: {\n                  type: 'string',\n                  description: 'City'\n                },\n                postalCode: {\n                  type: 'string',\n                  description: 'Postal code'\n                },\n                state: {\n                  type: 'string',\n                  description: 'State'\n                },\n                street1: {\n                  type: 'string',\n                  description: 'Street address line 1'\n                },\n                country: {\n                  type: 'string',\n                  description: 'Country'\n                },\n                county: {\n                  type: 'string',\n                  description: 'County'\n                },\n                street2: {\n                  type: 'string',\n                  description: 'Street address line 2'\n                }\n              },\n              required: [                'city',\n                'postalCode',\n                'state',\n                'street1'\n              ]\n            },\n            blurb: {\n              type: 'string',\n              description: 'Brief description or bio'\n            },\n            createdAt: {\n              type: 'string',\n              description: 'Creation timestamp',\n              format: 'date-time'\n            },\n            createdBy: {\n              type: 'string',\n              description: 'ID of user who created the employee'\n            },\n            departments: {\n              type: 'array',\n              description: 'List of department names',\n              items: {\n                type: 'string'\n              }\n            },\n            dob: {\n              type: 'string',\n              description: 'Date of birth'\n            },\n            extendedFields: {\n              type: 'array',\n              description: 'Additional custom fields',\n              items: {\n                type: 'object',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'Field name'\n                  },\n                  value: {\n                    type: 'string',\n                    description: 'Field value'\n                  }\n                },\n                required: [                  'name',\n                  'value'\n                ]\n              }\n            },\n            phone: {\n              type: 'array',\n              description: 'Contact phone numbers',\n              items: {\n                type: 'object',\n                properties: {\n                  number: {\n                    type: 'string',\n                    description: 'Phone number'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'Type of phone number',\n                    enum: [                      'Cell',\n                      'Home',\n                      'Work',\n                      'Other'\n                    ]\n                  }\n                },\n                required: [                  'number',\n                  'type'\n                ]\n              }\n            },\n            title: {\n              type: 'string',\n              description: 'Job title'\n            },\n            updatedAt: {\n              type: 'string',\n              description: 'Last update timestamp',\n              format: 'date-time'\n            },\n            updatedBy: {\n              type: 'string',\n              description: 'ID of user who last updated the employee'\n            }\n          },\n          required: [            '_id',\n            'email',\n            'employer_id',\n            'firstName',\n            'lastName'\n          ]\n        },\n        message: {\n          type: 'string'\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'employee',\n        'message',\n        'success'\n      ]\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { employeeId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.employees.retrieve(employeeId)));
};

export default { metadata, tool, handler };
