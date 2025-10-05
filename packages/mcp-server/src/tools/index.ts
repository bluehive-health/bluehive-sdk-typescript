// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import check_health from './health/check-health';
import retrieve_version from './version/retrieve-version';
import lookup_providers from './providers/lookup-providers';
import check_health_database from './database/check-health-database';
import list_providers_fax from './fax/list-providers-fax';
import retrieve_status_fax from './fax/retrieve-status-fax';
import send_fax from './fax/send-fax';
import create_employers from './employers/create-employers';
import retrieve_employers from './employers/retrieve-employers';
import list_employers from './employers/list-employers';
import create_employers_service_bundles from './employers/service-bundles/create-employers-service-bundles';
import retrieve_employers_service_bundles from './employers/service-bundles/retrieve-employers-service-bundles';
import update_employers_service_bundles from './employers/service-bundles/update-employers-service-bundles';
import list_employers_service_bundles from './employers/service-bundles/list-employers-service-bundles';
import delete_employers_service_bundles from './employers/service-bundles/delete-employers-service-bundles';
import process_hl7 from './hl7/process-hl7';
import send_results_hl7 from './hl7/send-results-hl7';
import create_orders from './orders/create-orders';
import retrieve_orders from './orders/retrieve-orders';
import update_orders from './orders/update-orders';
import retrieve_results_orders from './orders/retrieve-results-orders';
import schedule_appointment_orders from './orders/schedule-appointment-orders';
import send_for_employee_orders from './orders/send-for-employee-orders';
import update_status_orders from './orders/update-status-orders';
import upload_results_orders from './orders/upload-results-orders';
import create_employees from './employees/create-employees';
import retrieve_employees from './employees/retrieve-employees';
import update_employees from './employees/update-employees';
import list_employees from './employees/list-employees';
import delete_employees from './employees/delete-employees';
import link_user_employees from './employees/link-user-employees';
import unlink_user_employees from './employees/unlink-user-employees';
import list_integrations from './integrations/list-integrations';
import check_active_integrations from './integrations/check-active-integrations';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(check_health);
addEndpoint(retrieve_version);
addEndpoint(lookup_providers);
addEndpoint(check_health_database);
addEndpoint(list_providers_fax);
addEndpoint(retrieve_status_fax);
addEndpoint(send_fax);
addEndpoint(create_employers);
addEndpoint(retrieve_employers);
addEndpoint(list_employers);
addEndpoint(create_employers_service_bundles);
addEndpoint(retrieve_employers_service_bundles);
addEndpoint(update_employers_service_bundles);
addEndpoint(list_employers_service_bundles);
addEndpoint(delete_employers_service_bundles);
addEndpoint(process_hl7);
addEndpoint(send_results_hl7);
addEndpoint(create_orders);
addEndpoint(retrieve_orders);
addEndpoint(update_orders);
addEndpoint(retrieve_results_orders);
addEndpoint(schedule_appointment_orders);
addEndpoint(send_for_employee_orders);
addEndpoint(update_status_orders);
addEndpoint(upload_results_orders);
addEndpoint(create_employees);
addEndpoint(retrieve_employees);
addEndpoint(update_employees);
addEndpoint(list_employees);
addEndpoint(delete_employees);
addEndpoint(link_user_employees);
addEndpoint(unlink_user_employees);
addEndpoint(list_integrations);
addEndpoint(check_active_integrations);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
