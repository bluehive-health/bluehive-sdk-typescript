// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/integrations',
  operationId: 'listIntegrations',
};

export const tool: Tool = {
  name: 'list_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the current brand integrations object keyed by integration name (empty object if none). Brand resolved via x-brand-id header.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/integration_list_response',\n  $defs: {\n    integration_list_response: {\n      type: 'object',\n      properties: {\n        integrations: {\n          type: 'object',\n          additionalProperties: true\n        }\n      },\n      required: [        'integrations'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'x-brand-id': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['x-brand-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.integrations.list(body)));
};

export default { metadata, tool, handler };
