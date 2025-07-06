// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@bluehive/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BlueHive from '@bluehive/sdk';

export const metadata: Metadata = {
  resource: 'fax',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/fax/send',
  operationId: 'sendFax',
};

export const tool: Tool = {
  name: 'send_fax',
  description: 'Send a fax document to a specified number using the configured fax provider.',
  inputSchema: {
    type: 'object',
    properties: {
      document: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'Base64 encoded document content',
          },
          contentType: {
            type: 'string',
            description: 'MIME type of the document',
            enum: [
              'application/pdf',
              'image/tiff',
              'image/tif',
              'image/jpeg',
              'image/jpg',
              'image/png',
              'text/plain',
            ],
          },
          filename: {
            type: 'string',
            description: 'Optional filename for the document',
          },
        },
        required: ['content', 'contentType'],
      },
      to: {
        type: 'string',
        description: 'Recipient fax number (E.164 format preferred)',
      },
      from: {
        type: 'string',
        description: 'Sender fax number (optional, uses default if not provided)',
      },
      provider: {
        type: 'string',
        description: 'Optional provider override (uses default if not specified)',
      },
      subject: {
        type: 'string',
        description: 'Subject line for the fax',
      },
    },
  },
};

export const handler = async (client: BlueHive, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.fax.send(body));
};

export default { metadata, tool, handler };
