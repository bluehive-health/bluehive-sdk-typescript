// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ServiceBundles extends APIResource {
  /**
   * Create Service Bundle
   */
  create(
    employerID: string,
    body: ServiceBundleCreateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceBundleCreateResponse> {
    return this._client.post(path`/v1/employers/${employerID}/service-bundles`, { body, ...options });
  }

  /**
   * Get Service Bundle
   */
  retrieve(
    id: string,
    params: ServiceBundleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ServiceBundleRetrieveResponse> {
    const { employerId } = params;
    return this._client.get(path`/v1/employers/${employerId}/service-bundles/${id}`, options);
  }

  /**
   * Update Service Bundle
   */
  update(
    id: string,
    params: ServiceBundleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceBundleUpdateResponse> {
    const { employerId, ...body } = params;
    return this._client.put(path`/v1/employers/${employerId}/service-bundles/${id}`, { body, ...options });
  }

  /**
   * List Service Bundles
   */
  list(employerID: string, options?: RequestOptions): APIPromise<ServiceBundleListResponse> {
    return this._client.get(path`/v1/employers/${employerID}/service-bundles`, options);
  }

  /**
   * Delete Service Bundle
   */
  delete(id: string, params: ServiceBundleDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { employerId } = params;
    return this._client.delete(path`/v1/employers/${employerId}/service-bundles/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ServiceBundleCreateResponse {
  _id: string;

  bundleName: string;

  employerId: string;

  serviceIds: Array<string>;

  createdAt?: string;

  createdBy?: string;

  /**
   * Indicates if this bundle originated from a third-party integration. Externally
   * managed bundles cannot be edited or deleted in BlueHive.
   */
  externallyManaged?: boolean;

  /**
   * Name of the third-party integration that manages this bundle (e.g., "Enterprise
   * Health"). Null if bundle was created in BlueHive.
   */
  integration?: string | null;

  integrationData?: ServiceBundleCreateResponse.IntegrationData;

  limit?: number;

  occurrence?: string;

  recurring?: boolean;

  roles?: Array<string> | null;

  startDate?: string;

  updatedAt?: string;

  updatedBy?: string;
}

export namespace ServiceBundleCreateResponse {
  export interface IntegrationData {
    'enterprise-health'?: IntegrationData.EnterpriseHealth;
  }

  export namespace IntegrationData {
    export interface EnterpriseHealth {
      addOnServices?: boolean;
    }
  }
}

export interface ServiceBundleRetrieveResponse {
  _id: string;

  bundleName: string;

  employerId: string;

  serviceIds: Array<string>;

  createdAt?: string;

  createdBy?: string;

  /**
   * Indicates if this bundle originated from a third-party integration. Externally
   * managed bundles cannot be edited or deleted in BlueHive.
   */
  externallyManaged?: boolean;

  /**
   * Name of the third-party integration that manages this bundle (e.g., "Enterprise
   * Health"). Null if bundle was created in BlueHive.
   */
  integration?: string | null;

  integrationData?: ServiceBundleRetrieveResponse.IntegrationData;

  limit?: number;

  occurrence?: string;

  recurring?: boolean;

  roles?: Array<string> | null;

  startDate?: string;

  updatedAt?: string;

  updatedBy?: string;
}

export namespace ServiceBundleRetrieveResponse {
  export interface IntegrationData {
    'enterprise-health'?: IntegrationData.EnterpriseHealth;
  }

  export namespace IntegrationData {
    export interface EnterpriseHealth {
      addOnServices?: boolean;
    }
  }
}

export interface ServiceBundleUpdateResponse {
  _id: string;

  bundleName: string;

  employerId: string;

  serviceIds: Array<string>;

  createdAt?: string;

  createdBy?: string;

  /**
   * Indicates if this bundle originated from a third-party integration. Externally
   * managed bundles cannot be edited or deleted in BlueHive.
   */
  externallyManaged?: boolean;

  /**
   * Name of the third-party integration that manages this bundle (e.g., "Enterprise
   * Health"). Null if bundle was created in BlueHive.
   */
  integration?: string | null;

  integrationData?: ServiceBundleUpdateResponse.IntegrationData;

  limit?: number;

  occurrence?: string;

  recurring?: boolean;

  roles?: Array<string> | null;

  startDate?: string;

  updatedAt?: string;

  updatedBy?: string;
}

export namespace ServiceBundleUpdateResponse {
  export interface IntegrationData {
    'enterprise-health'?: IntegrationData.EnterpriseHealth;
  }

  export namespace IntegrationData {
    export interface EnterpriseHealth {
      addOnServices?: boolean;
    }
  }
}

export type ServiceBundleListResponse = Array<ServiceBundleListResponse.ServiceBundleListResponseItem>;

export namespace ServiceBundleListResponse {
  export interface ServiceBundleListResponseItem {
    _id: string;

    bundleName: string;

    employerId: string;

    serviceIds: Array<string>;

    createdAt?: string;

    createdBy?: string;

    /**
     * Indicates if this bundle originated from a third-party integration. Externally
     * managed bundles cannot be edited or deleted in BlueHive.
     */
    externallyManaged?: boolean;

    /**
     * Name of the third-party integration that manages this bundle (e.g., "Enterprise
     * Health"). Null if bundle was created in BlueHive.
     */
    integration?: string | null;

    integrationData?: ServiceBundleListResponseItem.IntegrationData;

    limit?: number;

    occurrence?: string;

    recurring?: boolean;

    roles?: Array<string> | null;

    startDate?: string;

    updatedAt?: string;

    updatedBy?: string;
  }

  export namespace ServiceBundleListResponseItem {
    export interface IntegrationData {
      'enterprise-health'?: IntegrationData.EnterpriseHealth;
    }

    export namespace IntegrationData {
      export interface EnterpriseHealth {
        addOnServices?: boolean;
      }
    }
  }
}

export interface ServiceBundleCreateParams {
  bundleName: string;

  serviceIds: Array<string>;

  _id?: string;

  limit?: number;

  occurrence?: string;

  recurring?: boolean;

  roles?: Array<string> | null;

  startDate?: string;
}

export interface ServiceBundleRetrieveParams {
  employerId: string;
}

export interface ServiceBundleUpdateParams {
  /**
   * Path param
   */
  employerId: string;

  /**
   * Body param
   */
  bundleName: string;

  /**
   * Body param
   */
  serviceIds: Array<string>;

  /**
   * Body param
   */
  _id?: string;

  /**
   * Body param
   */
  limit?: number;

  /**
   * Body param
   */
  occurrence?: string;

  /**
   * Body param
   */
  recurring?: boolean;

  /**
   * Body param
   */
  roles?: Array<string> | null;

  /**
   * Body param
   */
  startDate?: string;
}

export interface ServiceBundleDeleteParams {
  employerId: string;
}

export declare namespace ServiceBundles {
  export {
    type ServiceBundleCreateResponse as ServiceBundleCreateResponse,
    type ServiceBundleRetrieveResponse as ServiceBundleRetrieveResponse,
    type ServiceBundleUpdateResponse as ServiceBundleUpdateResponse,
    type ServiceBundleListResponse as ServiceBundleListResponse,
    type ServiceBundleCreateParams as ServiceBundleCreateParams,
    type ServiceBundleRetrieveParams as ServiceBundleRetrieveParams,
    type ServiceBundleUpdateParams as ServiceBundleUpdateParams,
    type ServiceBundleDeleteParams as ServiceBundleDeleteParams,
  };
}
