// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Create orders for consumers (self-pay or employer-sponsored), employers, or bulk
   * orders. Consolidates functionality from legacy Order.createOrder and
   * Order.SendOrder methods.
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    return this._client.post('/v1/orders', { body, ...options });
  }

  /**
   * Retrieve details for a specific order
   */
  retrieve(orderID: string, options?: RequestOptions): APIPromise<OrderRetrieveResponse> {
    return this._client.get(path`/v1/orders/${orderID}`, options);
  }

  /**
   * Update order details and associated order items. Allows updating order status,
   * metadata, and modifying order item services.
   */
  update(
    orderID: string,
    body: OrderUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderUpdateResponse> {
    return this._client.post(path`/v1/orders/${orderID}`, { body, ...options });
  }

  /**
   * Retrieve results for an order. Supports filtering by serviceId, status, date
   * window, and pagination.
   */
  retrieveResults(
    orderID: string,
    query: OrderRetrieveResultsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderRetrieveResultsResponse> {
    return this._client.get(path`/v1/orders/${orderID}/results`, { query, ...options });
  }

  /**
   * Schedule an appointment or walk-in for an existing order. Sends HL7 SIU^S12
   * message for appointment booking.
   */
  scheduleAppointment(
    orderID: string,
    body: OrderScheduleAppointmentParams,
    options?: RequestOptions,
  ): APIPromise<OrderScheduleAppointmentResponse> {
    return this._client.post(path`/v1/orders/${orderID}/schedule-appointment`, { body, ...options });
  }

  /**
   * Send an order for a specific employee. Requires API key, login token, and user
   * ID. This endpoint specifically handles employer-to-employee order sending.
   */
  sendForEmployee(
    params: OrderSendForEmployeeParams,
    options?: RequestOptions,
  ): APIPromise<OrderSendForEmployeeResponse> {
    const { 'login-token': loginToken, 'user-id': userID, ...body } = params;
    return this._client.post('/v1/orders/send', {
      body,
      ...options,
      headers: buildHeaders([{ 'login-token': loginToken, 'user-id': userID }, options?.headers]),
    });
  }

  /**
   * Update the status of an existing order
   */
  updateStatus(
    orderID: string,
    body: OrderUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<OrderUpdateStatusResponse> {
    return this._client.put(path`/v1/orders/${orderID}/status`, { body, ...options });
  }

  /**
   * Upload test results for a specific order item. Supports both existing fileIds
   * and base64 encoded files. Requires order access code and employee verification.
   */
  uploadResults(
    orderID: string,
    body: OrderUploadResultsParams,
    options?: RequestOptions,
  ): APIPromise<OrderUploadResultsResponse> {
    return this._client.post(path`/v1/orders/${orderID}/upload-results`, { body, ...options });
  }
}

export type OrderCreateResponse = OrderCreateResponse.UnionMember0 | OrderCreateResponse.UnionMember1;

export namespace OrderCreateResponse {
  export interface UnionMember0 {
    orderId: string;

    orderNumber: string;

    success: true;

    hostedInvoiceUrl?: string;

    message?: string;

    partialSuccess?: boolean;

    selfPay?: boolean;

    unavailableServices?: Array<UnionMember0.UnavailableService>;
  }

  export namespace UnionMember0 {
    export interface UnavailableService {
      reason: string;

      serviceId: string;

      serviceName?: string;
    }
  }

  export interface UnionMember1 {
    orderResults: Array<UnionMember1.OrderResult>;

    status: 'split';

    success: true;

    message?: string;

    partialSuccess?: boolean;

    unavailableServices?: Array<UnionMember1.UnavailableService>;
  }

  export namespace UnionMember1 {
    export interface OrderResult {
      orderId: string;

      orderNumber: string;

      providerId: string;
    }

    export interface UnavailableService {
      reason: string;

      serviceId: string;

      serviceName?: string;
    }
  }
}

export interface OrderRetrieveResponse {
  orderId?: string;

  orderNumber?: string;

  status?: string;
}

export interface OrderUpdateResponse {
  message: string;

  orderId: string;

  orderNumber: string;

  success: true;

  updatedFields?: Array<string>;
}

export interface OrderRetrieveResultsResponse {
  meta: OrderRetrieveResultsResponse.Meta;

  services: Array<OrderRetrieveResultsResponse.Service>;
}

export namespace OrderRetrieveResultsResponse {
  export interface Meta {
    orderId: string;

    page: number;

    pageSize: number;

    returned: number;

    totalServices: number;

    employeeId?: string;

    orderNumber?: string;

    providerId?: string;
  }

  export interface Service {
    serviceId: string;

    status: string;

    altTxt?: string;

    completed_datetime?: string;

    contacts?: Array<string>;

    drawn_datetime?: string;

    fileIds?: Array<string>;

    message?: string;

    result?: string;

    resultsPosted?: string;
  }
}

export interface OrderScheduleAppointmentResponse {
  message: string;

  success: boolean;
}

/**
 * Order sent successfully (single or split)
 */
export type OrderSendForEmployeeResponse =
  | OrderSendForEmployeeResponse.UnionMember0
  | OrderSendForEmployeeResponse.UnionMember1;

export namespace OrderSendForEmployeeResponse {
  export interface UnionMember0 {
    orderId: string;

    orderNumber: string;

    success: true;

    message?: string;

    /**
     * True when some services were unavailable but order was still created
     */
    partialSuccess?: boolean;

    /**
     * Services that could not be included in the order
     */
    unavailableServices?: Array<UnionMember0.UnavailableService>;
  }

  export namespace UnionMember0 {
    export interface UnavailableService {
      /**
       * Why the service was unavailable
       */
      reason: string;

      serviceId: string;

      serviceName?: string;
    }
  }

  export interface UnionMember1 {
    orderResults: Array<UnionMember1.OrderResult>;

    status: 'split';

    success: true;

    message?: string;

    /**
     * True when some services were unavailable but orders were still created
     */
    partialSuccess?: boolean;

    /**
     * Services that could not be included in any order
     */
    unavailableServices?: Array<UnionMember1.UnavailableService>;
  }

  export namespace UnionMember1 {
    export interface OrderResult {
      orderId: string;

      orderNumber: string;

      providerId: string;
    }

    export interface UnavailableService {
      /**
       * Why the service was unavailable
       */
      reason: string;

      serviceId: string;

      serviceName?: string;
    }
  }
}

export interface OrderUpdateStatusResponse {
  message?: string;

  success?: boolean;
}

export interface OrderUploadResultsResponse {
  message?: string;

  success?: boolean;
}

export type OrderCreateParams =
  | OrderCreateParams.Variant0
  | OrderCreateParams.Variant1
  | OrderCreateParams.Variant2
  | OrderCreateParams.Variant3;

export declare namespace OrderCreateParams {
  export interface Variant0 {
    paymentMethod: 'self-pay' | 'employer-sponsored';

    person: Variant0.Person;

    providerId: string;

    services: Array<Variant0.Service>;

    _id?: string;

    brandId?: string;

    dueDate?: string;

    dueDates?: Array<string>;

    employeeId?: string;

    employeeIds?: Array<string>;

    employerId?: string;

    /**
     * Optional arbitrary metadata (<=10KB when JSON stringified)
     */
    metadata?: { [key: string]: unknown };

    /**
     * Order priority level
     */
    priority?: 'normal' | 'high';

    providerCreated?: boolean;

    providersIds?: Array<Variant0.ProvidersID>;

    quantities?: { [key: string]: number };

    reCaptchaToken?: string;

    servicesIds?: Array<string>;

    tokenId?: string;
  }

  export namespace Variant0 {
    export interface Person {
      city: string;

      /**
       * Date of birth in YYYY-MM-DD format
       */
      dob: string;

      email: string;

      firstName: string;

      lastName: string;

      phone: string;

      state: string;

      street: string;

      /**
       * US ZIP code in 12345 or 12345-6789 format
       */
      zipcode: string;

      country?: string;

      county?: string;

      street2?: string;
    }

    export interface Service {
      _id: string;

      quantity: number;

      autoAccept?: boolean;
    }

    export interface ProvidersID {
      providerId: string;

      serviceId?: string;
    }
  }

  export interface Variant1 {
    employeeId: string;

    employerId: string;

    services: Array<Variant1.Service>;

    _id?: string;

    brandId?: string;

    dueDate?: string;

    dueDates?: Array<string>;

    employeeIds?: Array<string>;

    /**
     * Optional arbitrary metadata (<=10KB when JSON stringified)
     */
    metadata?: { [key: string]: unknown };

    paymentMethod?: 'self-pay' | 'employer-sponsored';

    person?: Variant1.Person;

    /**
     * Order priority level
     */
    priority?: 'normal' | 'high';

    providerCreated?: boolean;

    providerId?: string;

    providersIds?: Array<Variant1.ProvidersID>;

    quantities?: { [key: string]: number };

    reCaptchaToken?: string;

    servicesIds?: Array<string>;

    tokenId?: string;
  }

  export namespace Variant1 {
    export interface Service {
      _id: string;

      quantity: number;

      autoAccept?: boolean;
    }

    export interface Person {
      city: string;

      /**
       * Date of birth in YYYY-MM-DD format
       */
      dob: string;

      email: string;

      firstName: string;

      lastName: string;

      phone: string;

      state: string;

      street: string;

      /**
       * US ZIP code in 12345 or 12345-6789 format
       */
      zipcode: string;

      country?: string;

      county?: string;

      street2?: string;
    }

    export interface ProvidersID {
      providerId: string;

      serviceId?: string;
    }
  }

  export interface Variant2 {
    employeeId: string;

    employerId: string;

    providersIds: Array<Variant2.ProvidersID>;

    servicesIds: Array<string>;

    _id?: string;

    brandId?: string;

    dueDate?: string;

    dueDates?: Array<string>;

    employeeIds?: Array<string>;

    /**
     * Optional arbitrary metadata (<=10KB when JSON stringified)
     */
    metadata?: { [key: string]: unknown };

    paymentMethod?: 'self-pay' | 'employer-sponsored';

    person?: Variant2.Person;

    /**
     * Order priority level
     */
    priority?: 'normal' | 'high';

    providerCreated?: boolean;

    providerId?: string;

    quantities?: { [key: string]: number };

    reCaptchaToken?: string;

    services?: Array<Variant2.Service>;

    tokenId?: string;
  }

  export namespace Variant2 {
    export interface ProvidersID {
      providerId: string;

      serviceId?: string;
    }

    export interface Person {
      city: string;

      /**
       * Date of birth in YYYY-MM-DD format
       */
      dob: string;

      email: string;

      firstName: string;

      lastName: string;

      phone: string;

      state: string;

      street: string;

      /**
       * US ZIP code in 12345 or 12345-6789 format
       */
      zipcode: string;

      country?: string;

      county?: string;

      street2?: string;
    }

    export interface Service {
      _id: string;

      quantity: number;

      autoAccept?: boolean;
    }
  }

  export interface Variant3 {
    employeeIds: Array<string>;

    employerId: string;

    providersIds: Array<Variant3.ProvidersID>;

    servicesIds: Array<string>;

    _id?: string;

    brandId?: string;

    dueDate?: string;

    dueDates?: Array<string>;

    employeeId?: string;

    /**
     * Optional arbitrary metadata (<=10KB when JSON stringified)
     */
    metadata?: { [key: string]: unknown };

    paymentMethod?: 'self-pay' | 'employer-sponsored';

    person?: Variant3.Person;

    /**
     * Order priority level
     */
    priority?: 'normal' | 'high';

    providerCreated?: boolean;

    providerId?: string;

    quantities?: { [key: string]: number };

    reCaptchaToken?: string;

    services?: Array<Variant3.Service>;

    tokenId?: string;
  }

  export namespace Variant3 {
    export interface ProvidersID {
      providerId: string;

      serviceId?: string;
    }

    export interface Person {
      city: string;

      /**
       * Date of birth in YYYY-MM-DD format
       */
      dob: string;

      email: string;

      firstName: string;

      lastName: string;

      phone: string;

      state: string;

      street: string;

      /**
       * US ZIP code in 12345 or 12345-6789 format
       */
      zipcode: string;

      country?: string;

      county?: string;

      street2?: string;
    }

    export interface Service {
      _id: string;

      quantity: number;

      autoAccept?: boolean;
    }
  }
}

export interface OrderUpdateParams {
  /**
   * Arbitrary metadata to update on the order (non-indexed passthrough, <=10KB when
   * JSON stringified)
   */
  metadata?: { [key: string]: unknown };

  services?: Array<OrderUpdateParams.Service>;

  status?:
    | 'order_sent'
    | 'order_accepted'
    | 'order_refused'
    | 'employee_confirmed'
    | 'order_fulfilled'
    | 'order_complete';
}

export namespace OrderUpdateParams {
  export interface Service {
    serviceId: string;

    dueDate?: string;

    results?: { [key: string]: unknown };

    status?: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'rejected';
  }
}

export interface OrderRetrieveResultsParams {
  page?: number;

  pageSize?: number;

  serviceId?: string;

  since?: string;

  status?: string;

  until?: string;
}

export interface OrderScheduleAppointmentParams {
  appointment: OrderScheduleAppointmentParams.UnionMember0 | OrderScheduleAppointmentParams.UnionMember1;

  /**
   * Order access code for authorization
   */
  orderAccessCode?: string;

  /**
   * Provider ID for authorization
   */
  providerId?: string;
}

export namespace OrderScheduleAppointmentParams {
  export interface UnionMember0 {
    /**
     * Required for appointment type
     */
    date: string;

    /**
     * Required for appointment type
     */
    dateTime: string;

    /**
     * Required for appointment type
     */
    time: string;

    /**
     * Optional for walkin type
     */
    notes?: string;

    type?: 'appointment';
  }

  export interface UnionMember1 {
    /**
     * Required for appointment type
     */
    date?: string;

    /**
     * Required for appointment type
     */
    dateTime?: string;

    /**
     * Optional for walkin type
     */
    notes?: string;

    /**
     * Required for appointment type
     */
    time?: string;

    type?: 'walkin';
  }
}

export interface OrderSendForEmployeeParams {
  /**
   * Body param: Employee ID to send order to
   */
  employeeId: string;

  /**
   * Body param: Employer ID sending the order
   */
  employerId: string;

  /**
   * Body param: Array mapping each service (by index) to a provider; serviceId
   * optional
   */
  providersIds: Array<OrderSendForEmployeeParams.ProvidersID>;

  /**
   * Body param: Array of service IDs to include in the order
   */
  servicesIds: Array<string>;

  /**
   * Header param: User login token
   */
  'login-token': string;

  /**
   * Header param: User ID
   */
  'user-id': string;

  /**
   * Body param: Brand ID for branded orders
   */
  brandId?: string;

  /**
   * Body param: Due date for the order (date or date-time ISO string)
   */
  dueDate?: string;

  /**
   * Body param: Array of due dates per service
   */
  dueDates?: Array<string>;

  /**
   * Body param: Optional arbitrary metadata to store on the order (non-indexed
   * passthrough, <=10KB when JSON stringified)
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Order priority level
   */
  priority?: 'normal' | 'high';

  /**
   * Body param: Whether this order is being created by a provider (affects
   * permission checking)
   */
  providerCreated?: boolean;

  /**
   * Body param: Single provider ID (shortcut when all services map to one provider)
   */
  providerId?: string;

  /**
   * Body param: Service ID to quantity mapping
   */
  quantities?: { [key: string]: number };
}

export namespace OrderSendForEmployeeParams {
  export interface ProvidersID {
    providerId: string;

    serviceId?: string;
  }
}

export interface OrderUpdateStatusParams {
  status:
    | 'order_sent'
    | 'order_accepted'
    | 'order_refused'
    | 'employee_confirmed'
    | 'order_fulfilled'
    | 'order_complete';

  message?: string;
}

export interface OrderUploadResultsParams {
  captchaToken: string;

  orderAccessCode: string;

  serviceId: string;

  /**
   * Date of birth in YYYY-MM-DD format
   */
  dob?: string;

  fileIds?: Array<string>;

  files?: Array<OrderUploadResultsParams.File>;

  lastName?: string;
}

export namespace OrderUploadResultsParams {
  export interface File {
    base64: string;

    name: string;

    type: string;
  }
}

export declare namespace Orders {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderRetrieveResultsResponse as OrderRetrieveResultsResponse,
    type OrderScheduleAppointmentResponse as OrderScheduleAppointmentResponse,
    type OrderSendForEmployeeResponse as OrderSendForEmployeeResponse,
    type OrderUpdateStatusResponse as OrderUpdateStatusResponse,
    type OrderUploadResultsResponse as OrderUploadResultsResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderRetrieveResultsParams as OrderRetrieveResultsParams,
    type OrderScheduleAppointmentParams as OrderScheduleAppointmentParams,
    type OrderSendForEmployeeParams as OrderSendForEmployeeParams,
    type OrderUpdateStatusParams as OrderUpdateStatusParams,
    type OrderUploadResultsParams as OrderUploadResultsParams,
  };
}
