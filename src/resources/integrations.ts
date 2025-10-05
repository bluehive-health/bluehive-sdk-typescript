// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Returns the current brand integrations object keyed by integration name (empty
   * object if none). Brand resolved via x-brand-id header.
   */
  list(params: IntegrationListParams, options?: RequestOptions): APIPromise<IntegrationListResponse> {
    const { 'x-brand-id': xBrandID } = params;
    return this._client.get('/v1/integrations', {
      ...options,
      headers: buildHeaders([{ 'x-brand-id': xBrandID }, options?.headers]),
    });
  }

  /**
   * Returns true if the named integration is active for the given brand (brand
   * resolved via x-brand-id header).
   */
  checkActive(
    name: string,
    params: IntegrationCheckActiveParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationCheckActiveResponse> {
    const { 'x-brand-id': xBrandID } = params;
    return this._client.get(path`/v1/integrations/${name}`, {
      ...options,
      headers: buildHeaders([{ 'x-brand-id': xBrandID }, options?.headers]),
    });
  }
}

export interface IntegrationListResponse {
  integrations: { [key: string]: IntegrationListResponse.Integrations };
}

export namespace IntegrationListResponse {
  export interface Integrations {
    active: boolean;

    displayName: string;

    config?: { [key: string]: unknown };
  }
}

export interface IntegrationCheckActiveResponse {
  active: boolean;
}

export interface IntegrationListParams {
  'x-brand-id': string;
}

export interface IntegrationCheckActiveParams {
  'x-brand-id': string;
}

export declare namespace Integrations {
  export {
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCheckActiveResponse as IntegrationCheckActiveResponse,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationCheckActiveParams as IntegrationCheckActiveParams,
  };
}
