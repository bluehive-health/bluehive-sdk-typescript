// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Hl7 extends APIResource {
  /**
   * Process incoming HL7 messages from EHR systems. Accepts JSON with "message"
   * field, raw text/plain HL7 content, or form-encoded data.
   */
  process(body: Hl7ProcessParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/v1/hl7/', { body, ...options });
  }

  /**
   * Send lab results or documents via HL7
   */
  sendResults(body: Hl7SendResultsParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/v1/hl7/results', { body, ...options });
  }
}

/**
 * HL7 ACK message
 */
export type Hl7ProcessResponse = string;

/**
 * Result of HL7 message send
 */
export type Hl7SendResultsResponse = string;

export interface Hl7ProcessParams {
  /**
   * Form field (legacy support)
   */
  f?: string;

  /**
   * Interface identifier (legacy support)
   */
  interface?: string;

  /**
   * Login password (legacy support)
   */
  login_passwd?: string;

  /**
   * Login user (legacy support)
   */
  login_user?: string;

  /**
   * HL7 message content - the primary way to send HL7 data
   */
  message?: string;

  /**
   * Base64 encoded HL7 message (legacy support)
   */
  message_b64?: string;

  [k: string]: unknown;
}

export interface Hl7SendResultsParams {
  /**
   * Employee ID to send results for
   */
  employeeId: string;

  /**
   * File containing the results
   */
  file: Hl7SendResultsParams.File;
}

export namespace Hl7SendResultsParams {
  /**
   * File containing the results
   */
  export interface File {
    /**
     * Base64 encoded file content
     */
    base64: string;

    /**
     * File name
     */
    name: string;

    /**
     * MIME type of the file
     */
    type: string;
  }
}

export declare namespace Hl7 {
  export {
    type Hl7ProcessResponse as Hl7ProcessResponse,
    type Hl7SendResultsResponse as Hl7SendResultsResponse,
    type Hl7ProcessParams as Hl7ProcessParams,
    type Hl7SendResultsParams as Hl7SendResultsParams,
  };
}
