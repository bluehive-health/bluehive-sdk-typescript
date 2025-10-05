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
  httpPath: '/v1/integrations/{name}',
  operationId: 'checkIntegration',
};

export const tool: Tool = {
  name: 'check_active_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns true if the named integration is active for the given brand (brand resolved via x-brand-id header).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    active: {\n      type: 'boolean'\n    }\n  },\n  required: [    'active'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
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
    required: ['name', 'x-brand-id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { name, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.integrations.checkActive(name, body)));
};

export default { metadata, tool, handler };
