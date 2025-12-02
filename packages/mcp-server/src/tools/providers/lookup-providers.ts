// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@bluehive/sdk-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/providers/lookup',
  operationId: 'searchProviders',
};

export const tool: Tool = {
  name: 'lookup_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for healthcare providers by NPI number, name, or location proximity.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/provider_lookup_response',\n  $defs: {\n    provider_lookup_response: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Number of providers found'\n        },\n        providers: {\n          type: 'array',\n          description: 'List of matching providers',\n          items: {\n            type: 'object',\n            properties: {\n              address_1: {\n                type: 'string',\n                description: 'Primary address line'\n              },\n              address_2: {\n                type: 'string',\n                description: 'Secondary address line (suite, unit, etc.)'\n              },\n              city: {\n                type: 'string',\n                description: 'City'\n              },\n              country: {\n                type: 'string',\n                description: 'Country code'\n              },\n              distance: {\n                type: 'number',\n                description: 'Distance in miles from the provided ZIP code'\n              },\n              fax_number: {\n                type: 'string',\n                description: 'Fax number'\n              },\n              firstname: {\n                type: 'string',\n                description: 'Provider first name'\n              },\n              lastname: {\n                type: 'string',\n                description: 'Provider last name or organization name'\n              },\n              npi: {\n                type: 'string',\n                description: 'National Provider Identifier (NPI) number'\n              },\n              postal_code: {\n                type: 'string',\n                description: 'Postal/ZIP code'\n              },\n              state_province: {\n                type: 'string',\n                description: 'State or province code'\n              },\n              work_phone: {\n                type: 'string',\n                description: 'Work phone number'\n              }\n            },\n            required: [              'address_1',\n              'address_2',\n              'city',\n              'country',\n              'distance',\n              'fax_number',\n              'firstname',\n              'lastname',\n              'npi',\n              'postal_code',\n              'state_province',\n              'work_phone'\n            ]\n          }\n        }\n      },\n      required: [        'count',\n        'providers'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firstname: {
        type: 'string',
        description: 'Provider first name',
      },
      lastname: {
        type: 'string',
        description: 'Provider last name',
      },
      npi: {
        type: 'string',
        description: 'Provider NPI number',
      },
      zipcode: {
        type: 'string',
        description: 'ZIP code to filter results by proximity',
      },
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.providers.lookup(body)));
  } catch (error) {
    if (error instanceof BlueHive.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
