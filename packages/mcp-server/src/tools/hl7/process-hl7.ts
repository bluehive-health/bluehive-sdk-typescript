// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'hl7',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hl7/',
  operationId: 'processHL7Message',
};

export const tool: Tool = {
  name: 'process_hl7',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProcess incoming HL7 messages from EHR systems\n\n# Response Schema\n```json\n{\n  type: 'string',\n  description: 'HL7 ACK message'\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          body: {
            type: 'string',
            description: 'Raw HL7 message content (for text/plain)',
          },
        },
        required: [],
      },
      {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'HL7 message content',
          },
        },
        required: ['message'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.hl7.process(body)));
};

export default { metadata, tool, handler };
