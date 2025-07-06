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
  httpPath: '/v1/fax/status/{id}',
  operationId: 'getFaxStatus',
};

export const tool: Tool = {
  name: 'retrieve_status_fax',
  description: 'Retrieve the current status and details of a fax by its ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.fax.retrieveStatus(id));
};

export default { metadata, tool, handler };
