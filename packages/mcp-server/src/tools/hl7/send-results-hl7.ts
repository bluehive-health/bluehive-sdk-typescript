// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'hl7',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/hl7/results',
  operationId: 'sendHL7Results',
};

export const tool: Tool = {
  name: 'send_results_hl7',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend lab results or documents via HL7\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hl7_send_results_response',\n  $defs: {\n    hl7_send_results_response: {\n      type: 'string',\n      description: 'Result of HL7 message send'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      employeeId: {
        type: 'string',
        description: 'Employee ID to send results for',
      },
      file: {
        type: 'object',
        description: 'File containing the results',
        properties: {
          base64: {
            type: 'string',
            description: 'Base64 encoded file content',
          },
          name: {
            type: 'string',
            description: 'File name',
          },
          type: {
            type: 'string',
            description: 'MIME type of the file',
          },
        },
        required: ['base64', 'name', 'type'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['employeeId', 'file'],
  },
  annotations: {},
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hl7.sendResults(body)));
  } catch (error) {
    if (error instanceof BlueHive.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
