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
}

/**
 * HL7 ACK message
 */
export type Hl7ProcessResponse = string;

export type Hl7ProcessParams =
  | Hl7ProcessParams.Variant0
  | Hl7ProcessParams.Variant1
  | Hl7ProcessParams.Variant2;

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

  export interface Variant2 {
    f?: string;

    interface?: string;

    login_passwd?: string;

    login_user?: string;

    message?: string;

    message_b64?: string;

    [k: string]: unknown;
  }
}

export declare namespace Hl7 {
  export { type Hl7ProcessResponse as Hl7ProcessResponse, type Hl7ProcessParams as Hl7ProcessParams };
}
