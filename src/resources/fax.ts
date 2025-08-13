// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Fax extends APIResource {
  /**
   * Get a list of available fax providers and their configuration status.
   */
  listProviders(options?: RequestOptions): APIPromise<FaxListProvidersResponse> {
    return this._client.get('/v1/fax/providers', options);
  }

  /**
   * Retrieve the current status and details of a fax by its ID.
   */
  retrieveStatus(id: string, options?: RequestOptions): APIPromise<FaxRetrieveStatusResponse> {
    return this._client.get(path`/v1/fax/status/${id}`, options);
  }

  /**
   * Send a fax document to a specified number using the configured fax provider.
   */
  send(body: FaxSendParams, options?: RequestOptions): APIPromise<FaxSendResponse> {
    return this._client.post('/v1/fax/send', { body, ...options });
  }
}

export interface FaxListProvidersResponse {
  providers: Array<FaxListProvidersResponse.Provider>;
}

export namespace FaxListProvidersResponse {
  export interface Provider {
    /**
     * Whether the provider is properly configured
     */
    configured: boolean;

    /**
     * Whether this is the default provider
     */
    isDefault: boolean;

    /**
     * Provider name
     */
    name: string;
  }
}

export interface FaxRetrieveStatusResponse {
  /**
   * Fax identifier
   */
  id: string;

  /**
   * ISO timestamp when fax was created
   */
  createdAt: string;

  /**
   * Sender fax number
   */
  from: string;

  /**
   * Provider used to send the fax
   */
  provider: string;

  /**
   * Current fax status
   */
  status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying';

  /**
   * Recipient fax number
   */
  to: string;

  /**
   * ISO timestamp when status was last updated
   */
  updatedAt: string;

  /**
   * Cost of the fax
   */
  cost?: number;

  /**
   * ISO timestamp when fax was delivered
   */
  deliveredAt?: string;

  /**
   * Call duration in seconds
   */
  duration?: number;

  /**
   * Error message if fax failed
   */
  errorMessage?: string;

  /**
   * Number of pages in the fax
   */
  pageCount?: number;

  /**
   * Provider-specific additional data
   */
  providerData?: { [key: string]: unknown };
}

export interface FaxSendResponse {
  /**
   * Unique fax identifier
   */
  id: string;

  /**
   * ISO timestamp when fax was created
   */
  createdAt: string;

  /**
   * Sender fax number
   */
  from: string;

  /**
   * Provider used to send the fax
   */
  provider: string;

  /**
   * Current fax status
   */
  status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying';

  /**
   * Recipient fax number
   */
  to: string;

  /**
   * Estimated delivery time (ISO timestamp)
   */
  estimatedDelivery?: string;
}

export interface FaxSendParams {
  document: FaxSendParams.Document;

  /**
   * Recipient fax number (E.164 format preferred)
   */
  to: string;

  /**
   * Sender fax number (optional, uses default if not provided)
   */
  from?: string;

  /**
   * Optional provider override (uses default if not specified)
   */
  provider?: string;

  /**
   * Subject line for the fax
   */
  subject?: string;
}

export namespace FaxSendParams {
  export interface Document {
    /**
     * Base64 encoded document content
     */
    content: string;

    /**
     * MIME type of the document
     */
    contentType:
      | 'application/pdf'
      | 'image/tiff'
      | 'image/tif'
      | 'image/jpeg'
      | 'image/jpg'
      | 'image/png'
      | 'text/plain';

    /**
     * Optional filename for the document
     */
    filename?: string;
  }
}

export declare namespace Fax {
  export {
    type FaxListProvidersResponse as FaxListProvidersResponse,
    type FaxRetrieveStatusResponse as FaxRetrieveStatusResponse,
    type FaxSendResponse as FaxSendResponse,
    type FaxSendParams as FaxSendParams,
  };
}
