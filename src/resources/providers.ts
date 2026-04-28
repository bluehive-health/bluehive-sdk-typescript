// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Providers extends APIResource {
  /**
   * Search for healthcare providers by NPI number, name, or location proximity.
   */
  lookup(
    query: ProviderLookupParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProviderLookupResponse> {
    return this._client.get('/v1/providers/lookup', { query, ...options });
  }
}

export interface ProviderLookupResponse {
  /**
   * Number of providers found
   */
  count: number;

  /**
   * List of matching providers
   */
  providers: Array<ProviderLookupResponse.Provider>;
}

export namespace ProviderLookupResponse {
  export interface Provider {
    /**
     * Primary address line
     */
    address_1: string;

    /**
     * Secondary address line (suite, unit, etc.)
     */
    address_2: string;

    /**
     * City
     */
    city: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Distance in miles from the provided ZIP code
     */
    distance: number;

    /**
     * Fax number
     */
    fax_number: string;

    /**
     * Provider first name
     */
    firstname: string;

    /**
     * Provider last name or organization name
     */
    lastname: string;

    /**
     * National Provider Identifier (NPI) number
     */
    npi: string;

    /**
     * Postal/ZIP code
     */
    postal_code: string;

    /**
     * State or province code
     */
    state_province: string;

    /**
     * Work phone number
     */
    work_phone: string;
  }
}

export interface ProviderLookupParams {
  /**
   * Provider first name
   */
  firstname?: string;

  /**
   * Provider last name
   */
  lastname?: string;

  /**
   * Provider NPI number
   */
  npi?: string;

  /**
   * ZIP code to filter results by proximity
   */
  zipcode?: string;
}

export declare namespace Providers {
  export {
    type ProviderLookupResponse as ProviderLookupResponse,
    type ProviderLookupParams as ProviderLookupParams,
  };
}
