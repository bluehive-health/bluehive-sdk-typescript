// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck MongoDB database connectivity and retrieve health statistics.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    status: {\n      type: 'string',\n      description: 'Database health status',\n      enum: [        'ok',\n        'error'\n      ]\n    },\n    timestamp: {\n      type: 'string',\n      description: 'Health check timestamp'\n    },\n    database: {\n      type: 'string',\n      description: 'Database name (hidden in production)'\n    },\n    error: {\n      type: 'string',\n      description: 'Error message if status is error'\n    },\n    stats: {\n      type: 'object',\n      description: 'Database statistics (not available in production)',\n      properties: {\n        collections: {\n          type: 'number',\n          description: 'Number of collections'\n        },\n        dataSize: {\n          type: 'number',\n          description: 'Total data size in bytes'\n        },\n        documents: {\n          type: 'number',\n          description: 'Total number of documents'\n        }\n      }\n    }\n  },\n  required: [    'status',\n    'timestamp'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.database.checkHealth()));
};

export default { metadata, tool, handler };
