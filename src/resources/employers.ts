// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Employers extends APIResource {
  /**
   * Create a new employer in the system.
   */
  create(body: EmployerCreateParams, options?: RequestOptions): APIPromise<EmployerCreateResponse> {
    return this._client.post('/v1/employers', { body, ...options });
  }

  /**
   * Retrieve an employer by their unique ID.
   */
  retrieve(employerID: string, options?: RequestOptions): APIPromise<EmployerRetrieveResponse> {
    return this._client.get(path`/v1/employers/${employerID}`, options);
  }
}

export interface EmployerCreateResponse {
  /**
   * Unique identifier for the employer
   */
  _id: string;

  address: EmployerCreateResponse.Address;

  email: string;

  /**
   * The name of the employer
   */
  name: string;

  phones: Array<EmployerCreateResponse.Phone>;

  billingAddress?: EmployerCreateResponse.BillingAddress;

  checkr?: EmployerCreateResponse.Checkr;

  createdAt?: string;

  createdBy?: string;

  demo?: boolean;

  employeeConsent?: boolean;

  onsiteClinic?: boolean;

  website?: string;
}

export namespace EmployerCreateResponse {
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

  export interface BillingAddress {
    city: string;

    state: string;

    street1: string;

    zipCode: string;

    country?: string;

    street2?: string;
  }

  export interface Checkr {
    id: string;

    status?: string;
  }
}

export interface EmployerRetrieveResponse {
  /**
   * Unique identifier for the employer
   */
  _id: string;

  address: EmployerRetrieveResponse.Address;

  email: string;

  /**
   * The name of the employer
   */
  name: string;

  phones: Array<EmployerRetrieveResponse.Phone>;

  billingAddress?: EmployerRetrieveResponse.BillingAddress;

  checkr?: EmployerRetrieveResponse.Checkr;

  createdAt?: string;

  createdBy?: string;

  demo?: boolean;

  employeeConsent?: boolean;

  onsiteClinic?: boolean;

  website?: string;
}

export namespace EmployerRetrieveResponse {
  export interface Address {
    city: string;

    state: string;

    street1: string;

    country?: string;

    street2?: string;

    zipCode?: string;
  }

  export interface Phone {
    number: string;

    primary?: boolean;

    type?: string;
  }

  export interface BillingAddress {
    city: string;

    state: string;

    street1: string;

    country?: string;

    street2?: string;

    zipCode?: string;
  }

  export interface Checkr {
    id: string;

    status?: string;
  }
}

export interface EmployerCreateParams {
  /**
   * Primary address of the employer
   */
  address: EmployerCreateParams.Address;

  /**
   * Email address for the employer administrator
   */
  email: string;

  /**
   * The name of the employer
   */
  name: string;

  /**
   * Phone numbers for the employer
   */
  phones: Array<EmployerCreateParams.Phone>;

  /**
   * Billing address of the employer (optional)
   */
  billingAddress?: EmployerCreateParams.BillingAddress;

  /**
   * Checkr information (excluding sensitive token)
   */
  checkr?: EmployerCreateParams.Checkr;

  /**
   * Whether this is a demo employer
   */
  demo?: boolean;

  /**
   * Whether employee consent is required
   */
  employeeConsent?: boolean;

  /**
   * Additional metadata for the employer
   */
  metadata?: unknown;

  /**
   * Whether the employer has an onsite clinic
   */
  onsiteClinic?: boolean;

  /**
   * Website URL for the employer
   */
  website?: string;
}

export namespace EmployerCreateParams {
  /**
   * Primary address of the employer
   */
  export interface Address {
    /**
     * City
     */
    city: string;

    /**
     * State or province
     */
    state: string;

    /**
     * Primary street address
     */
    street1: string;

    /**
     * ZIP/postal code
     */
    zipCode: string;

    /**
     * Country
     */
    country?: string;

    /**
     * Secondary street address
     */
    street2?: string;
  }

  export interface Phone {
    /**
     * Phone number
     */
    number: string;

    /**
     * Is this the primary phone number
     */
    primary?: boolean;

    /**
     * Phone type (e.g., office, mobile)
     */
    type?: string;
  }

  /**
   * Billing address of the employer (optional)
   */
  export interface BillingAddress {
    /**
     * City
     */
    city: string;

    /**
     * State or province
     */
    state: string;

    /**
     * Primary street address
     */
    street1: string;

    /**
     * ZIP/postal code
     */
    zipCode: string;

    /**
     * Country
     */
    country?: string;

    /**
     * Secondary street address
     */
    street2?: string;
  }

  /**
   * Checkr information (excluding sensitive token)
   */
  export interface Checkr {
    /**
     * Checkr Account ID
     */
    id: string;

    /**
     * Checkr Account Status
     */
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
