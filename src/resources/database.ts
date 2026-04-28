// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Database extends APIResource {
  /**
   * Check MongoDB database connectivity and retrieve health statistics.
   */
  checkHealth(options?: RequestOptions): APIPromise<DatabaseCheckHealthResponse> {
    return this._client.get('/v1/database/health', options);
  }
}

export interface DatabaseCheckHealthResponse {
  /**
   * Database health status
   */
  status: 'ok' | 'error';

  /**
   * Health check timestamp
   */
  timestamp: string;

  /**
   * Database name (hidden in production)
   */
  database?: string;

  /**
   * Error message if status is error
   */
  error?: string;

  /**
   * Database statistics (not available in production)
   */
  stats?: DatabaseCheckHealthResponse.Stats;
}

export namespace DatabaseCheckHealthResponse {
  /**
   * Database statistics (not available in production)
   */
  export interface Stats {
    /**
     * Number of collections
     */
    collections?: number;

    /**
     * Total data size in bytes
     */
    dataSize?: number;

    /**
     * Total number of documents
     */
    documents?: number;
  }
}

export declare namespace Database {
  export { type DatabaseCheckHealthResponse as DatabaseCheckHealthResponse };
}
