// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'database',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/database/health',
  operationId: 'checkDatabaseHealth',
};

export const tool: Tool = {
  name: 'check_health_database',
  description: 'Check MongoDB database connectivity and retrieve health statistics.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.database.checkHealth());
};

export default { metadata, tool, handler };
