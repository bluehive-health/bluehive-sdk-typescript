// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@bluehive/sdk';

export const parseAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  const apiKey =
    Array.isArray(req.headers['x-blue-hive-api-key']) ?
      req.headers['x-blue-hive-api-key'][0]
    : req.headers['x-blue-hive-api-key'];
  return { apiKey };
};
