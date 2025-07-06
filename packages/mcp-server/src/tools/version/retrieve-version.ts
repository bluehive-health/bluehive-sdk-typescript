// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'version',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/version',
  operationId: 'getApiVersion',
};

export const tool: Tool = {
  name: 'retrieve_version',
  description: 'Retrieve the current version of the BlueHive API.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.version.retrieve());
};

export default { metadata, tool, handler };
