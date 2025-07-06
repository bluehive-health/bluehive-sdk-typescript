// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'fax',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/fax/providers',
};

export const tool: Tool = {
  name: 'list_providers_fax',
  description: 'Get list of available fax providers and their configuration status',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.fax.listProviders());
};

export default { metadata, tool, handler };
