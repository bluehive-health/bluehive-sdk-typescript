// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Hl7 extends APIResource {
  /**
   * Process incoming HL7 messages from EHR systems
   */
  process(
    params: Hl7ProcessParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { body } = params ?? {};
    return this._client.post('/v1/hl7/', { body: body, ...options });
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

export type Hl7ProcessParams = Hl7ProcessParams.Variant0 | Hl7ProcessParams.Variant1;

export declare namespace Hl7ProcessParams {
  export interface Variant0 {
    /**
     * Raw HL7 message content (for text/plain)
     */
    body?: string;
  }

  export interface Variant1 {
    /**
     * HL7 message content
     */
    message: string;
  }
}

export interface Hl7SendResultsParams {
  employeeId: string;

  file: Hl7SendResultsParams.File;
}

export namespace Hl7SendResultsParams {
  export interface File {
    base64: string;

    name: string;

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
