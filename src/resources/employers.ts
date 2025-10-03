// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Employers extends APIResource {
  /**
   * Create Employer
   */
  create(body: EmployerCreateParams, options?: RequestOptions): APIPromise<EmployerCreateResponse> {
    return this._client.post('/v1/employers', { body, ...options });
  }

  /**
   * Get Employer
   */
  retrieve(employerID: string, options?: RequestOptions): APIPromise<EmployerRetrieveResponse> {
    return this._client.get(path`/v1/employers/${employerID}`, options);
  }
}

export interface EmployerCreateResponse {
  _id: string;

  address: { [key: string]: unknown };

  email: string;

  name: string;

  phones: Array<{ [key: string]: unknown }>;

  createdAt?: string;

  createdBy?: string;

  demo?: boolean;

  employeeConsent?: boolean;

  onsiteClinic?: boolean;

  website?: string;
}

export type EmployerRetrieveResponse = { [key: string]: unknown };

export interface EmployerCreateParams {
  address: EmployerCreateParams.Address;

  email: string;

  name: string;

  phones: Array<EmployerCreateParams.Phone>;

  billingAddress?: { [key: string]: unknown };

  checkr?: EmployerCreateParams.Checkr;

  demo?: boolean;

  employeeConsent?: boolean;

  metadata?: { [key: string]: unknown };

  onsiteClinic?: boolean;

  website?: string;
}

export namespace EmployerCreateParams {
  export interface Address {
    city: string;

    state: string;

    street1: string;

    zipCode: string;

    country?: string;

    street2?: string;
  }

  export interface Phone {
    number: string;

    primary?: boolean;

    type?: string;
  }

  export interface Checkr {
    id: string;

    status?: string;
  }
}

export declare namespace Employers {
  export {
    type EmployerCreateResponse as EmployerCreateResponse,
    type EmployerRetrieveResponse as EmployerRetrieveResponse,
    type EmployerCreateParams as EmployerCreateParams,
  };
}
