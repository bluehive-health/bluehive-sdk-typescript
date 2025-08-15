// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@bluehive/sdk/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    req.headers['x-blue-hive-api-key'] instanceof Array ?
      req.headers['x-blue-hive-api-key'][0]
    : req.headers['x-blue-hive-api-key'];
  return { apiKey };
};
