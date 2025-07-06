// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Bluehive } from '../client';

export abstract class APIResource {
  protected _client: Bluehive;

  constructor(client: Bluehive) {
    this._client = client;
  }
}
