// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
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
  operationId: 'listFaxProviders',
};

export const tool: Tool = {
  name: 'list_providers_fax',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of available fax providers and their configuration status.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    providers: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          configured: {\n            type: 'boolean',\n            description: 'Whether the provider is properly configured'\n          },\n          isDefault: {\n            type: 'boolean',\n            description: 'Whether this is the default provider'\n          },\n          name: {\n            type: 'string',\n            description: 'Provider name'\n          }\n        },\n        required: [          'configured',\n          'isDefault',\n          'name'\n        ]\n      }\n    }\n  },\n  required: [    'providers'\n  ]\n}\n```",
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
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.fax.listProviders()));
};

export default { metadata, tool, handler };
