// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/orders',
};

export const tool: Tool = {
  name: 'create_orders',
  description:
    'Create orders for consumers (self-pay or employer-sponsored), employers, or bulk orders. Consolidates functionality from legacy Order.createOrder and Order.SendOrder methods.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          paymentMethod: {
            type: 'string',
            enum: ['self-pay', 'employer-sponsored'],
          },
          person: {
            type: 'object',
            properties: {
              city: {
                type: 'string',
              },
              dob: {
                type: 'string',
                description: 'Date of birth in YYYY-MM-DD format',
              },
              email: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
              phone: {
                type: 'string',
              },
              state: {
                type: 'string',
              },
              street: {
                type: 'string',
              },
              zipcode: {
                type: 'string',
                description: 'US ZIP code in 12345 or 12345-6789 format',
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
            required: [
              'city',
              'dob',
              'email',
              'firstName',
              'lastName',
              'phone',
              'state',
              'street',
              'zipcode',
            ],
          },
          providerId: {
            type: 'string',
          },
          services: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                },
                quantity: {
                  type: 'integer',
                },
                autoAccept: {
                  type: 'boolean',
                },
              },
              required: ['_id', 'quantity'],
            },
          },
          _id: {
            type: 'string',
          },
          brandId: {
            type: 'string',
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
          },
          dueDates: {
            type: 'array',
            items: {
              type: 'string',
              format: 'date-time',
            },
          },
          employeeId: {
            type: 'string',
          },
          employeeIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          employerId: {
            type: 'string',
          },
          metadata: {
            type: 'object',
            description: 'Optional arbitrary metadata (<=10KB when JSON stringified)',
            additionalProperties: true,
          },
          providerCreated: {
            type: 'boolean',
          },
          providersIds: {
            type: 'array',
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
          quantities: {
            type: 'object',
            additionalProperties: true,
          },
          reCaptchaToken: {
            type: 'string',
          },
          servicesIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          tokenId: {
            type: 'string',
          },
        },
        required: ['paymentMethod', 'person', 'providerId', 'services'],
      },
      {
        type: 'object',
        properties: {
          employeeId: {
            type: 'string',
          },
          employerId: {
            type: 'string',
          },
          services: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                },
                quantity: {
                  type: 'integer',
                },
                autoAccept: {
                  type: 'boolean',
                },
              },
              required: ['_id', 'quantity'],
            },
          },
          _id: {
            type: 'string',
          },
          brandId: {
            type: 'string',
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
          },
          dueDates: {
            type: 'array',
            items: {
              type: 'string',
              format: 'date-time',
            },
          },
          employeeIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          metadata: {
            type: 'object',
            description: 'Optional arbitrary metadata (<=10KB when JSON stringified)',
            additionalProperties: true,
          },
          paymentMethod: {
            type: 'string',
            enum: ['self-pay', 'employer-sponsored'],
          },
          person: {
            type: 'object',
            properties: {
              city: {
                type: 'string',
              },
              dob: {
                type: 'string',
                description: 'Date of birth in YYYY-MM-DD format',
              },
              email: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
              phone: {
                type: 'string',
              },
              state: {
                type: 'string',
              },
              street: {
                type: 'string',
              },
              zipcode: {
                type: 'string',
                description: 'US ZIP code in 12345 or 12345-6789 format',
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
            required: [
              'city',
              'dob',
              'email',
              'firstName',
              'lastName',
              'phone',
              'state',
              'street',
              'zipcode',
            ],
          },
          providerCreated: {
            type: 'boolean',
          },
          providerId: {
            type: 'string',
          },
          providersIds: {
            type: 'array',
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
          quantities: {
            type: 'object',
            additionalProperties: true,
          },
          reCaptchaToken: {
            type: 'string',
          },
          servicesIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          tokenId: {
            type: 'string',
          },
        },
        required: ['employeeId', 'employerId', 'services'],
      },
      {
        type: 'object',
        properties: {
          employeeId: {
            type: 'string',
          },
          employerId: {
            type: 'string',
          },
          providersIds: {
            type: 'array',
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
            items: {
              type: 'string',
            },
          },
          _id: {
            type: 'string',
          },
          brandId: {
            type: 'string',
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
          },
          dueDates: {
            type: 'array',
            items: {
              type: 'string',
              format: 'date-time',
            },
          },
          employeeIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          metadata: {
            type: 'object',
            description: 'Optional arbitrary metadata (<=10KB when JSON stringified)',
            additionalProperties: true,
          },
          paymentMethod: {
            type: 'string',
            enum: ['self-pay', 'employer-sponsored'],
          },
          person: {
            type: 'object',
            properties: {
              city: {
                type: 'string',
              },
              dob: {
                type: 'string',
                description: 'Date of birth in YYYY-MM-DD format',
              },
              email: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
              phone: {
                type: 'string',
              },
              state: {
                type: 'string',
              },
              street: {
                type: 'string',
              },
              zipcode: {
                type: 'string',
                description: 'US ZIP code in 12345 or 12345-6789 format',
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
            required: [
              'city',
              'dob',
              'email',
              'firstName',
              'lastName',
              'phone',
              'state',
              'street',
              'zipcode',
            ],
          },
          providerCreated: {
            type: 'boolean',
          },
          providerId: {
            type: 'string',
          },
          quantities: {
            type: 'object',
            additionalProperties: true,
          },
          reCaptchaToken: {
            type: 'string',
          },
          services: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                },
                quantity: {
                  type: 'integer',
                },
                autoAccept: {
                  type: 'boolean',
                },
              },
              required: ['_id', 'quantity'],
            },
          },
          tokenId: {
            type: 'string',
          },
        },
        required: ['employeeId', 'employerId', 'providersIds', 'servicesIds'],
      },
      {
        type: 'object',
        properties: {
          employeeIds: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          employerId: {
            type: 'string',
          },
          providersIds: {
            type: 'array',
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
            items: {
              type: 'string',
            },
          },
          _id: {
            type: 'string',
          },
          brandId: {
            type: 'string',
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
          },
          dueDates: {
            type: 'array',
            items: {
              type: 'string',
              format: 'date-time',
            },
          },
          employeeId: {
            type: 'string',
          },
          metadata: {
            type: 'object',
            description: 'Optional arbitrary metadata (<=10KB when JSON stringified)',
            additionalProperties: true,
          },
          paymentMethod: {
            type: 'string',
            enum: ['self-pay', 'employer-sponsored'],
          },
          person: {
            type: 'object',
            properties: {
              city: {
                type: 'string',
              },
              dob: {
                type: 'string',
                description: 'Date of birth in YYYY-MM-DD format',
              },
              email: {
                type: 'string',
              },
              firstName: {
                type: 'string',
              },
              lastName: {
                type: 'string',
              },
              phone: {
                type: 'string',
              },
              state: {
                type: 'string',
              },
              street: {
                type: 'string',
              },
              zipcode: {
                type: 'string',
                description: 'US ZIP code in 12345 or 12345-6789 format',
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
            required: [
              'city',
              'dob',
              'email',
              'firstName',
              'lastName',
              'phone',
              'state',
              'street',
              'zipcode',
            ],
          },
          providerCreated: {
            type: 'boolean',
          },
          providerId: {
            type: 'string',
          },
          quantities: {
            type: 'object',
            additionalProperties: true,
          },
          reCaptchaToken: {
            type: 'string',
          },
          services: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                },
                quantity: {
                  type: 'integer',
                },
                autoAccept: {
                  type: 'boolean',
                },
              },
              required: ['_id', 'quantity'],
            },
          },
          tokenId: {
            type: 'string',
          },
        },
        required: ['employeeIds', 'employerId', 'providersIds', 'servicesIds'],
      },
    ],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.orders.create(body));
};

export default { metadata, tool, handler };
