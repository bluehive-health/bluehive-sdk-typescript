// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Hl7 extends APIResource {
  /**
   * Send lab results or documents via HL7
   */
  sendResults(body: Hl7SendResultsParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/v1/hl7/results', { body, ...options });
  }
}

/**
 * Result of HL7 message send
 */
export type Hl7SendResultsResponse = string;

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
    type Hl7SendResultsResponse as Hl7SendResultsResponse,
    type Hl7SendResultsParams as Hl7SendResultsParams,
  };
}
