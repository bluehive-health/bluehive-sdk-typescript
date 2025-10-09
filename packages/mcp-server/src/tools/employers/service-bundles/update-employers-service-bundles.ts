// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'employers.service_bundles',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1/employers/{employerId}/service-bundles/{id}',
  operationId: 'updateEmployerServiceBundle',
};

export const tool: Tool = {
  name: 'update_employers_service_bundles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Service Bundle\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/service_bundle_update_response',\n  $defs: {\n    service_bundle_update_response: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string'\n        },\n        bundleName: {\n          type: 'string'\n        },\n        employerId: {\n          type: 'string'\n        },\n        serviceIds: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        createdAt: {\n          type: 'string'\n        },\n        createdBy: {\n          type: 'string'\n        },\n        roles: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        updatedAt: {\n          type: 'string'\n        },\n        updatedBy: {\n          type: 'string'\n        }\n      },\n      required: [        '_id',\n        'bundleName',\n        'employerId',\n        'serviceIds'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      employerId: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      bundleName: {
        type: 'string',
      },
      serviceIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      _id: {
        type: 'string',
      },
      roles: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['employerId', 'id', 'bundleName', 'serviceIds'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.employers.serviceBundles.update(id, body)),
  );
};

export default { metadata, tool, handler };
