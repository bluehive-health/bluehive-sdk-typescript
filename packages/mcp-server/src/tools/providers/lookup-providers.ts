// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/providers/lookup',
};

export const tool: Tool = {
  name: 'lookup_providers',
  description: 'Look up providers by NPI number, first name, or last name',
  inputSchema: {
    type: 'object',
    properties: {
      firstname: {
        type: 'string',
        description: 'Provider first name',
      },
      lastname: {
        type: 'string',
        description: 'Provider last name',
      },
      npi: {
        type: 'string',
        description: 'Provider NPI number',
      },
      zipcode: {
        type: 'string',
        description: 'ZIP code to filter results by proximity',
      },
    },
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.providers.lookup(body));
};

export default { metadata, tool, handler };
