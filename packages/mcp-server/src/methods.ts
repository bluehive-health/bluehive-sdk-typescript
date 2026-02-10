import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/v1/health',
  },
  {
    clientCallName: 'client.version.retrieve',
    fullyQualifiedName: 'version.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/version',
  },
  {
    clientCallName: 'client.providers.lookup',
    fullyQualifiedName: 'providers.lookup',
    httpMethod: 'get',
    httpPath: '/v1/providers/lookup',
  },
  {
    clientCallName: 'client.database.checkHealth',
    fullyQualifiedName: 'database.checkHealth',
    httpMethod: 'get',
    httpPath: '/v1/database/health',
  },
  {
    clientCallName: 'client.fax.listProviders',
    fullyQualifiedName: 'fax.listProviders',
    httpMethod: 'get',
    httpPath: '/v1/fax/providers',
  },
  {
    clientCallName: 'client.fax.retrieveStatus',
    fullyQualifiedName: 'fax.retrieveStatus',
    httpMethod: 'get',
    httpPath: '/v1/fax/status/{id}',
  },
  {
    clientCallName: 'client.fax.send',
    fullyQualifiedName: 'fax.send',
    httpMethod: 'post',
    httpPath: '/v1/fax/send',
  },
  {
    clientCallName: 'client.employers.create',
    fullyQualifiedName: 'employers.create',
    httpMethod: 'post',
    httpPath: '/v1/employers',
  },
  {
    clientCallName: 'client.employers.retrieve',
    fullyQualifiedName: 'employers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/employers/{employerId}',
  },
  {
    clientCallName: 'client.employers.list',
    fullyQualifiedName: 'employers.list',
    httpMethod: 'get',
    httpPath: '/v1/employers/list',
  },
  {
    clientCallName: 'client.employers.serviceBundles.create',
    fullyQualifiedName: 'employers.serviceBundles.create',
    httpMethod: 'post',
    httpPath: '/v1/employers/{employerId}/service-bundles',
  },
  {
    clientCallName: 'client.employers.serviceBundles.retrieve',
    fullyQualifiedName: 'employers.serviceBundles.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/employers/{employerId}/service-bundles/{id}',
  },
  {
    clientCallName: 'client.employers.serviceBundles.update',
    fullyQualifiedName: 'employers.serviceBundles.update',
    httpMethod: 'put',
    httpPath: '/v1/employers/{employerId}/service-bundles/{id}',
  },
  {
    clientCallName: 'client.employers.serviceBundles.list',
    fullyQualifiedName: 'employers.serviceBundles.list',
    httpMethod: 'get',
    httpPath: '/v1/employers/{employerId}/service-bundles',
  },
  {
    clientCallName: 'client.employers.serviceBundles.delete',
    fullyQualifiedName: 'employers.serviceBundles.delete',
    httpMethod: 'delete',
    httpPath: '/v1/employers/{employerId}/service-bundles/{id}',
  },
  {
    clientCallName: 'client.hl7.sendResults',
    fullyQualifiedName: 'hl7.sendResults',
    httpMethod: 'post',
    httpPath: '/v1/hl7/results',
  },
  {
    clientCallName: 'client.orders.create',
    fullyQualifiedName: 'orders.create',
    httpMethod: 'post',
    httpPath: '/v1/orders',
  },
  {
    clientCallName: 'client.orders.retrieve',
    fullyQualifiedName: 'orders.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/orders/{orderId}',
  },
  {
    clientCallName: 'client.orders.update',
    fullyQualifiedName: 'orders.update',
    httpMethod: 'post',
    httpPath: '/v1/orders/{orderId}',
  },
  {
    clientCallName: 'client.orders.retrieveResults',
    fullyQualifiedName: 'orders.retrieveResults',
    httpMethod: 'get',
    httpPath: '/v1/orders/{orderId}/results',
  },
  {
    clientCallName: 'client.orders.scheduleAppointment',
    fullyQualifiedName: 'orders.scheduleAppointment',
    httpMethod: 'post',
    httpPath: '/v1/orders/{orderId}/schedule-appointment',
  },
  {
    clientCallName: 'client.orders.sendForEmployee',
    fullyQualifiedName: 'orders.sendForEmployee',
    httpMethod: 'post',
    httpPath: '/v1/orders/send',
  },
  {
    clientCallName: 'client.orders.updateStatus',
    fullyQualifiedName: 'orders.updateStatus',
    httpMethod: 'put',
    httpPath: '/v1/orders/{orderId}/status',
  },
  {
    clientCallName: 'client.orders.uploadResults',
    fullyQualifiedName: 'orders.uploadResults',
    httpMethod: 'post',
    httpPath: '/v1/orders/{orderId}/upload-results',
  },
  {
    clientCallName: 'client.employees.create',
    fullyQualifiedName: 'employees.create',
    httpMethod: 'post',
    httpPath: '/v1/employees',
  },
  {
    clientCallName: 'client.employees.retrieve',
    fullyQualifiedName: 'employees.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/employees/{employeeId}',
  },
  {
    clientCallName: 'client.employees.update',
    fullyQualifiedName: 'employees.update',
    httpMethod: 'put',
    httpPath: '/v1/employees',
  },
  {
    clientCallName: 'client.employees.list',
    fullyQualifiedName: 'employees.list',
    httpMethod: 'get',
    httpPath: '/v1/employees',
  },
  {
    clientCallName: 'client.employees.delete',
    fullyQualifiedName: 'employees.delete',
    httpMethod: 'delete',
    httpPath: '/v1/employees/{employeeId}',
  },
  {
    clientCallName: 'client.employees.linkUser',
    fullyQualifiedName: 'employees.linkUser',
    httpMethod: 'post',
    httpPath: '/v1/employees/link-user',
  },
  {
    clientCallName: 'client.employees.unlinkUser',
    fullyQualifiedName: 'employees.unlinkUser',
    httpMethod: 'delete',
    httpPath: '/v1/employees/unlink-user',
  },
  {
    clientCallName: 'client.integrations.list',
    fullyQualifiedName: 'integrations.list',
    httpMethod: 'get',
    httpPath: '/v1/integrations',
  },
  {
    clientCallName: 'client.integrations.checkActive',
    fullyQualifiedName: 'integrations.checkActive',
    httpMethod: 'get',
    httpPath: '/v1/integrations/{name}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
