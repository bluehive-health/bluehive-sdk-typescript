// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'health',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/health',
  operationId: 'healthCheck',
};

export const tool: Tool = {
  name: 'check_health',
  description: 'Check the service health and ensure the API is running properly.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.health.check());
};

export default { metadata, tool, handler };
