// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { BlueHive } from '../client';

export abstract class APIResource {
  protected _client: BlueHive;

  constructor(client: BlueHive) {
    this._client = client;
  }
}
