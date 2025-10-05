// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employers.service_bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/employers/{employerId}/service-bundles/{id}',
  operationId: 'deleteEmployerServiceBundle',
};

export const tool: Tool = {
  name: 'delete_employers_service_bundles',
  description: 'Delete Service Bundle',
  inputSchema: {
    type: 'object',
    properties: {
      employerId: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
    },
    required: ['employerId', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.employers.serviceBundles.delete(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
