// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Employees extends APIResource {
  /**
   * Create a new employee in the system.
   */
  create(body: EmployeeCreateParams, options?: RequestOptions): APIPromise<EmployeeCreateResponse> {
    return this._client.post('/v1/employees', { body, ...options });
  }

  /**
   * Retrieve an employee by their unique ID.
   */
  retrieve(employeeID: string, options?: RequestOptions): APIPromise<EmployeeRetrieveResponse> {
    return this._client.get(path`/v1/employees/${employeeID}`, options);
  }

  /**
   * Update an existing employee in the system.
   */
  update(body: EmployeeUpdateParams, options?: RequestOptions): APIPromise<EmployeeUpdateResponse> {
    return this._client.put('/v1/employees', { body, ...options });
  }

  /**
   * List all employees for a given employer with pagination.
   */
  list(query: EmployeeListParams, options?: RequestOptions): APIPromise<EmployeeListResponse> {
    return this._client.get('/v1/employees', { query, ...options });
  }

  /**
   * Delete an employee from the system. Cannot delete employees with existing
   * orders.
   */
  delete(employeeID: string, options?: RequestOptions): APIPromise<EmployeeDeleteResponse> {
    return this._client.delete(path`/v1/employees/${employeeID}`, options);
  }

  /**
   * Link an employee to a user account with specified roles
   */
  linkUser(body: EmployeeLinkUserParams, options?: RequestOptions): APIPromise<EmployeeLinkUserResponse> {
    return this._client.post('/v1/employees/link-user', { body, ...options });
  }

  /**
   * Remove the link between an employee and a user account
   */
  unlinkUser(
    body: EmployeeUnlinkUserParams,
    options?: RequestOptions,
  ): APIPromise<EmployeeUnlinkUserResponse> {
    return this._client.delete('/v1/employees/unlink-user', { body, ...options });
  }
}

/**
 * Employee created successfully
 */
export interface EmployeeCreateResponse {
  /**
   * ID of the created employee
   */
  employeeId: string;

  message: string;

  success: boolean;
}

/**
 * Employee found successfully
 */
export interface EmployeeRetrieveResponse {
  /**
   * Employee details
   */
  employee: EmployeeRetrieveResponse.Employee;

  message: string;

  success: boolean;
}

export namespace EmployeeRetrieveResponse {
  /**
   * Employee details
   */
  export interface Employee {
    /**
     * Unique identifier
     */
    _id: string;

    /**
     * Email address
     */
    email: string;

    /**
     * ID of associated employer
     */
    employer_id: string;

    /**
     * First name
     */
    firstName: string;

    /**
     * Last name
     */
    lastName: string;

    /**
     * Account status
     */
    activeAccount?: 'Active' | 'Inactive';

    /**
     * Employee address
     */
    address?: Employee.Address;

    /**
     * Brief description or bio
     */
    blurb?: string;

    /**
     * Creation timestamp
     */
    createdAt?: string;

    /**
     * ID of user who created the employee
     */
    createdBy?: string;

    /**
     * List of department names
     */
    departments?: Array<string>;

    /**
     * Date of birth
     */
    dob?: string;

    /**
     * Additional custom fields
     */
    extendedFields?: Array<Employee.ExtendedField>;

    /**
     * Contact phone numbers
     */
    phone?: Array<Employee.Phone>;

    /**
     * Job title
     */
    title?: string;

    /**
     * Last update timestamp
     */
    updatedAt?: string;

    /**
     * ID of user who last updated the employee
     */
    updatedBy?: string;
  }

  export namespace Employee {
    /**
     * Employee address
     */
    export interface Address {
      /**
       * City
       */
      city: string;

      /**
       * Postal code
       */
      postalCode: string;

      /**
       * State
       */
      state: string;

      /**
       * Street address line 1
       */
      street1: string;

      /**
       * Country
       */
      country?: string;

      /**
       * County
       */
      county?: string;

      /**
       * Street address line 2
       */
      street2?: string;
    }

    export interface ExtendedField {
      /**
       * Field name
       */
      name: string;

      /**
       * Field value
       */
      value: string;
    }

    export interface Phone {
      /**
       * Phone number
       */
      number: string;

      /**
       * Type of phone number
       */
      type: 'Cell' | 'Home' | 'Work' | 'Other';
    }
  }
}

/**
 * Employee updated successfully
 */
export interface EmployeeUpdateResponse {
  message: string;

  success: boolean;
}

/**
 * Employees retrieved successfully
 */
export interface EmployeeListResponse {
  /**
   * List of employees
   */
  employees: Array<EmployeeListResponse.Employee>;

  message: string;

  success: boolean;

  /**
   * Total number of employees returned
   */
  total: number;
}

export namespace EmployeeListResponse {
  /**
   * Employee details
   */
  export interface Employee {
    /**
     * Unique identifier
     */
    _id: string;

    /**
     * Email address
     */
    email: string;

    /**
     * ID of associated employer
     */
    employer_id: string;

    /**
     * First name
     */
    firstName: string;

    /**
     * Last name
     */
    lastName: string;

    /**
     * Account status
     */
    activeAccount?: 'Active' | 'Inactive';

    /**
     * Employee address
     */
    address?: Employee.Address;

    /**
     * Brief description or bio
     */
    blurb?: string;

    /**
     * Creation timestamp
     */
    createdAt?: string;

    /**
     * ID of user who created the employee
     */
    createdBy?: string;

    /**
     * List of department names
     */
    departments?: Array<string>;

    /**
     * Date of birth
     */
    dob?: string;

    /**
     * Additional custom fields
     */
    extendedFields?: Array<Employee.ExtendedField>;

    /**
     * Contact phone numbers
     */
    phone?: Array<Employee.Phone>;

    /**
     * Job title
     */
    title?: string;

    /**
     * Last update timestamp
     */
    updatedAt?: string;

    /**
     * ID of user who last updated the employee
     */
    updatedBy?: string;
  }

  export namespace Employee {
    /**
     * Employee address
     */
    export interface Address {
      /**
       * City
       */
      city: string;

      /**
       * Postal code
       */
      postalCode: string;

      /**
       * State
       */
      state: string;

      /**
       * Street address line 1
       */
      street1: string;

      /**
       * Country
       */
      country?: string;

      /**
       * County
       */
      county?: string;

      /**
       * Street address line 2
       */
      street2?: string;
    }

    export interface ExtendedField {
      /**
       * Field name
       */
      name: string;

      /**
       * Field value
       */
      value: string;
    }

    export interface Phone {
      /**
       * Phone number
       */
      number: string;

      /**
       * Type of phone number
       */
      type: 'Cell' | 'Home' | 'Work' | 'Other';
    }
  }
}

/**
 * Employee deleted successfully
 */
export interface EmployeeDeleteResponse {
  message: string;

  success: boolean;
}

/**
 * Employee linked successfully
 */
export interface EmployeeLinkUserResponse {
  /**
   * ID of the created link
   */
  linkId: string;

  message: string;

  success: boolean;
}

/**
 * Employee unlinked successfully
 */
export interface EmployeeUnlinkUserResponse {
  message: string;

  success: boolean;
}

export interface EmployeeCreateParams {
  email: string;

  firstName: string;

  lastName: string;

  activeAccount?: 'Active' | 'Inactive';

  address?: EmployeeCreateParams.Address;

  blurb?: string;

  departments?: Array<string>;

  dob?: string;

  employer_id?: string;

  extendedFields?: Array<EmployeeCreateParams.ExtendedField>;

  phone?: Array<EmployeeCreateParams.Phone>;

  title?: string;
}

export namespace EmployeeCreateParams {
  export interface Address {
    city: string;

    postalCode: string;

    state: string;

    street1: string;

    country?: string;

    county?: string;

    street2?: string;
  }

  export interface ExtendedField {
    name: string;

    value: string;
  }

  export interface Phone {
    number: string;

    type: 'Cell' | 'Home' | 'Work' | 'Other';
  }
}

export interface EmployeeUpdateParams {
  _id: string;

  activeAccount?: 'Active' | 'Inactive';

  address?: EmployeeUpdateParams.Address;

  blurb?: string;

  departments?: Array<string>;

  dob?: string;

  email?: string;

  employer_id?: string;

  extendedFields?: Array<EmployeeUpdateParams.ExtendedField>;

  firstName?: string;

  lastName?: string;

  phone?: Array<EmployeeUpdateParams.Phone>;

  title?: string;
}

export namespace EmployeeUpdateParams {
  export interface Address {
    city: string;

    postalCode: string;

    state: string;

    street1: string;

    country?: string;

    county?: string;

    street2?: string;
  }

  export interface ExtendedField {
    name: string;

    value: string;
  }

  export interface Phone {
    number: string;

    type: 'Cell' | 'Home' | 'Work' | 'Other';
  }
}

export interface EmployeeListParams {
  /**
   * ID of the employer to list employees for
   */
  employerId: string;

  /**
   * Maximum number of employees to return (default: 50)
   */
  limit?: string;

  /**
   * Number of employees to skip (default: 0)
   */
  offset?: string;
}

export interface EmployeeLinkUserParams {
  employeeId: string;

  userId: string;

  role?: Array<string>;
}

export interface EmployeeUnlinkUserParams {
  /**
   * ID of the employee to unlink
   */
  employeeId: string;

  /**
   * ID of the user to unlink from
   */
  userId: string;
}

export declare namespace Employees {
  export {
    type EmployeeCreateResponse as EmployeeCreateResponse,
    type EmployeeRetrieveResponse as EmployeeRetrieveResponse,
    type EmployeeUpdateResponse as EmployeeUpdateResponse,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeDeleteResponse as EmployeeDeleteResponse,
    type EmployeeLinkUserResponse as EmployeeLinkUserResponse,
    type EmployeeUnlinkUserResponse as EmployeeUnlinkUserResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeUpdateParams as EmployeeUpdateParams,
    type EmployeeListParams as EmployeeListParams,
    type EmployeeLinkUserParams as EmployeeLinkUserParams,
    type EmployeeUnlinkUserParams as EmployeeUnlinkUserParams,
  };
}
