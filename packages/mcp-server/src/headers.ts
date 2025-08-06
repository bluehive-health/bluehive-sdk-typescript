// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@bluehive/sdk/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const apiKey =
    req.headers['x-blue-hive-api-key'] instanceof Array ?
      req.headers['x-blue-hive-api-key'][0]
    : req.headers['x-blue-hive-api-key'];
  return { apiKey };
};
