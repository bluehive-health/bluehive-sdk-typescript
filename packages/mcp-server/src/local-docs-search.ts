// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'check',
    endpoint: '/v1/health',
    httpMethod: 'get',
    summary: 'Health Check',
    description: 'Check the service health and ensure the API is running properly.',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: "{ status: 'ok'; }",
    markdown:
      "## check\n\n`client.health.check(): { status: 'ok'; }`\n\n**get** `/v1/health`\n\nCheck the service health and ensure the API is running properly.\n\n### Returns\n\n- `{ status: 'ok'; }`\n\n  - `status: 'ok'`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/version',
    httpMethod: 'get',
    summary: 'API Version',
    description: 'Retrieve the current version of the BlueHive API.',
    stainlessPath: '(resource) version > (method) retrieve',
    qualified: 'client.version.retrieve',
    response: '{ version: string; }',
    markdown:
      "## retrieve\n\n`client.version.retrieve(): { version: string; }`\n\n**get** `/v1/version`\n\nRetrieve the current version of the BlueHive API.\n\n### Returns\n\n- `{ version: string; }`\n\n  - `version: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst version = await client.version.retrieve();\n\nconsole.log(version);\n```",
  },
  {
    name: 'lookup',
    endpoint: '/v1/providers/lookup',
    httpMethod: 'get',
    summary: 'Provider Search',
    description: 'Search for healthcare providers by NPI number, name, or location proximity.',
    stainlessPath: '(resource) providers > (method) lookup',
    qualified: 'client.providers.lookup',
    params: ['firstname?: string;', 'lastname?: string;', 'npi?: string;', 'zipcode?: string;'],
    response:
      '{ count: number; providers: { address_1: string; address_2: string; city: string; country: string; distance: number; fax_number: string; firstname: string; lastname: string; npi: string; postal_code: string; state_province: string; work_phone: string; }[]; }',
    markdown:
      "## lookup\n\n`client.providers.lookup(firstname?: string, lastname?: string, npi?: string, zipcode?: string): { count: number; providers: object[]; }`\n\n**get** `/v1/providers/lookup`\n\nSearch for healthcare providers by NPI number, name, or location proximity.\n\n### Parameters\n\n- `firstname?: string`\n  Provider first name\n\n- `lastname?: string`\n  Provider last name\n\n- `npi?: string`\n  Provider NPI number\n\n- `zipcode?: string`\n  ZIP code to filter results by proximity\n\n### Returns\n\n- `{ count: number; providers: { address_1: string; address_2: string; city: string; country: string; distance: number; fax_number: string; firstname: string; lastname: string; npi: string; postal_code: string; state_province: string; work_phone: string; }[]; }`\n\n  - `count: number`\n  - `providers: { address_1: string; address_2: string; city: string; country: string; distance: number; fax_number: string; firstname: string; lastname: string; npi: string; postal_code: string; state_province: string; work_phone: string; }[]`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.providers.lookup();\n\nconsole.log(response);\n```",
  },
  {
    name: 'check_health',
    endpoint: '/v1/database/health',
    httpMethod: 'get',
    summary: 'Database Health',
    description: 'Check MongoDB database connectivity and retrieve health statistics.',
    stainlessPath: '(resource) database > (method) check_health',
    qualified: 'client.database.checkHealth',
    response:
      "{ status: 'ok' | 'error'; timestamp: string; database?: string; error?: string; stats?: { collections?: number; dataSize?: number; documents?: number; }; }",
    markdown:
      "## check_health\n\n`client.database.checkHealth(): { status: 'ok' | 'error'; timestamp: string; database?: string; error?: string; stats?: object; }`\n\n**get** `/v1/database/health`\n\nCheck MongoDB database connectivity and retrieve health statistics.\n\n### Returns\n\n- `{ status: 'ok' | 'error'; timestamp: string; database?: string; error?: string; stats?: { collections?: number; dataSize?: number; documents?: number; }; }`\n\n  - `status: 'ok' | 'error'`\n  - `timestamp: string`\n  - `database?: string`\n  - `error?: string`\n  - `stats?: { collections?: number; dataSize?: number; documents?: number; }`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.database.checkHealth();\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_providers',
    endpoint: '/v1/fax/providers',
    httpMethod: 'get',
    summary: 'Fax Providers',
    description: 'Get a list of available fax providers and their configuration status.',
    stainlessPath: '(resource) fax > (method) list_providers',
    qualified: 'client.fax.listProviders',
    response: '{ providers: { configured: boolean; isDefault: boolean; name: string; }[]; }',
    markdown:
      "## list_providers\n\n`client.fax.listProviders(): { providers: object[]; }`\n\n**get** `/v1/fax/providers`\n\nGet a list of available fax providers and their configuration status.\n\n### Returns\n\n- `{ providers: { configured: boolean; isDefault: boolean; name: string; }[]; }`\n\n  - `providers: { configured: boolean; isDefault: boolean; name: string; }[]`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.fax.listProviders();\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_status',
    endpoint: '/v1/fax/status/{id}',
    httpMethod: 'get',
    summary: 'Fax Status',
    description: 'Retrieve the current status and details of a fax by its ID.',
    stainlessPath: '(resource) fax > (method) retrieve_status',
    qualified: 'client.fax.retrieveStatus',
    params: ['id: string;'],
    response:
      "{ id: string; createdAt: string; from: string; provider: string; status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'; to: string; updatedAt: string; cost?: number; deliveredAt?: string; duration?: number; errorMessage?: string; pageCount?: number; providerData?: object; }",
    markdown:
      "## retrieve_status\n\n`client.fax.retrieveStatus(id: string): { id: string; createdAt: string; from: string; provider: string; status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'; to: string; updatedAt: string; cost?: number; deliveredAt?: string; duration?: number; errorMessage?: string; pageCount?: number; providerData?: object; }`\n\n**get** `/v1/fax/status/{id}`\n\nRetrieve the current status and details of a fax by its ID.\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; from: string; provider: string; status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'; to: string; updatedAt: string; cost?: number; deliveredAt?: string; duration?: number; errorMessage?: string; pageCount?: number; providerData?: object; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `from: string`\n  - `provider: string`\n  - `status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'`\n  - `to: string`\n  - `updatedAt: string`\n  - `cost?: number`\n  - `deliveredAt?: string`\n  - `duration?: number`\n  - `errorMessage?: string`\n  - `pageCount?: number`\n  - `providerData?: object`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.fax.retrieveStatus('id');\n\nconsole.log(response);\n```",
  },
  {
    name: 'send',
    endpoint: '/v1/fax/send',
    httpMethod: 'post',
    summary: 'Send Fax',
    description: 'Send a fax document to a specified number using the configured fax provider.',
    stainlessPath: '(resource) fax > (method) send',
    qualified: 'client.fax.send',
    params: [
      'document: { content: string; contentType: string; filename?: string; };',
      'to: string;',
      'from?: string;',
      'provider?: string;',
      'subject?: string;',
    ],
    response:
      "{ id: string; createdAt: string; from: string; provider: string; status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'; to: string; estimatedDelivery?: string; }",
    markdown:
      "## send\n\n`client.fax.send(document: { content: string; contentType: string; filename?: string; }, to: string, from?: string, provider?: string, subject?: string): { id: string; createdAt: string; from: string; provider: string; status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'; to: string; estimatedDelivery?: string; }`\n\n**post** `/v1/fax/send`\n\nSend a fax document to a specified number using the configured fax provider.\n\n### Parameters\n\n- `document: { content: string; contentType: string; filename?: string; }`\n  - `content: string`\n    Base64 encoded document content\n  - `contentType: string`\n    MIME type of the document\n  - `filename?: string`\n    Optional filename for the document\n\n- `to: string`\n  Recipient fax number (E.164 format preferred)\n\n- `from?: string`\n  Sender fax number (optional, uses default if not provided)\n\n- `provider?: string`\n  Optional provider override (uses default if not specified)\n\n- `subject?: string`\n  Subject line for the fax\n\n### Returns\n\n- `{ id: string; createdAt: string; from: string; provider: string; status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'; to: string; estimatedDelivery?: string; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `from: string`\n  - `provider: string`\n  - `status: 'queued' | 'dialing' | 'sending' | 'delivered' | 'failed' | 'cancelled' | 'retrying'`\n  - `to: string`\n  - `estimatedDelivery?: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.fax.send({\n  document: { content: 'content', contentType: 'application/pdf' },\n  to: 'to',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/employers',
    httpMethod: 'post',
    summary: 'Create Employer',
    description: 'Create Employer',
    stainlessPath: '(resource) employers > (method) create',
    qualified: 'client.employers.create',
    params: [
      'address: { city: string; state: string; street1: string; zipCode: string; country?: string; street2?: string; };',
      'email: string;',
      'name: string;',
      'phones: { number: string; primary?: boolean; type?: string; }[];',
      'billingAddress?: object;',
      'checkr?: { id: string; status?: string; };',
      'demo?: boolean;',
      'employeeConsent?: boolean;',
      'metadata?: object;',
      'onsiteClinic?: boolean;',
      'website?: string;',
    ],
    response:
      '{ _id: string; address: object; email: string; name: string; phones: object[]; createdAt?: string; createdBy?: string; demo?: boolean; employeeConsent?: boolean; onsiteClinic?: boolean; website?: string; }',
    markdown:
      "## create\n\n`client.employers.create(address: { city: string; state: string; street1: string; zipCode: string; country?: string; street2?: string; }, email: string, name: string, phones: { number: string; primary?: boolean; type?: string; }[], billingAddress?: object, checkr?: { id: string; status?: string; }, demo?: boolean, employeeConsent?: boolean, metadata?: object, onsiteClinic?: boolean, website?: string): { _id: string; address: object; email: string; name: string; phones: object[]; createdAt?: string; createdBy?: string; demo?: boolean; employeeConsent?: boolean; onsiteClinic?: boolean; website?: string; }`\n\n**post** `/v1/employers`\n\nCreate Employer\n\n### Parameters\n\n- `address: { city: string; state: string; street1: string; zipCode: string; country?: string; street2?: string; }`\n  - `city: string`\n  - `state: string`\n  - `street1: string`\n  - `zipCode: string`\n  - `country?: string`\n  - `street2?: string`\n\n- `email: string`\n\n- `name: string`\n\n- `phones: { number: string; primary?: boolean; type?: string; }[]`\n\n- `billingAddress?: object`\n\n- `checkr?: { id: string; status?: string; }`\n  - `id: string`\n  - `status?: string`\n\n- `demo?: boolean`\n\n- `employeeConsent?: boolean`\n\n- `metadata?: object`\n\n- `onsiteClinic?: boolean`\n\n- `website?: string`\n\n### Returns\n\n- `{ _id: string; address: object; email: string; name: string; phones: object[]; createdAt?: string; createdBy?: string; demo?: boolean; employeeConsent?: boolean; onsiteClinic?: boolean; website?: string; }`\n\n  - `_id: string`\n  - `address: object`\n  - `email: string`\n  - `name: string`\n  - `phones: object[]`\n  - `createdAt?: string`\n  - `createdBy?: string`\n  - `demo?: boolean`\n  - `employeeConsent?: boolean`\n  - `onsiteClinic?: boolean`\n  - `website?: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employer = await client.employers.create({\n  address: {\n  city: 'city',\n  state: 'state',\n  street1: 'street1',\n  zipCode: 'zipCode',\n},\n  email: 'dev@stainless.com',\n  name: 'name',\n  phones: [{ number: 'number' }],\n});\n\nconsole.log(employer);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/employers/{employerId}',
    httpMethod: 'get',
    summary: 'Get Employer',
    description: 'Get Employer',
    stainlessPath: '(resource) employers > (method) retrieve',
    qualified: 'client.employers.retrieve',
    params: ['employerId: string;'],
    response: 'object',
    markdown:
      "## retrieve\n\n`client.employers.retrieve(employerId: string): object`\n\n**get** `/v1/employers/{employerId}`\n\nGet Employer\n\n### Parameters\n\n- `employerId: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employer = await client.employers.retrieve('employerId');\n\nconsole.log(employer);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/employers/list',
    httpMethod: 'get',
    summary: 'Get Employers for Current User',
    description: 'Get Employers for Current User',
    stainlessPath: '(resource) employers > (method) list',
    qualified: 'client.employers.list',
    params: ['login-token: string;', 'user-id: string;'],
    response: 'object[]',
    markdown:
      "## list\n\n`client.employers.list(login-token: string, user-id: string): object[]`\n\n**get** `/v1/employers/list`\n\nGet Employers for Current User\n\n### Parameters\n\n- `login-token: string`\n\n- `user-id: string`\n\n### Returns\n\n- `object[]`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employers = await client.employers.list({ 'login-token': 'login-token', 'user-id': 'user-id' });\n\nconsole.log(employers);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/employers/{employerId}/service-bundles',
    httpMethod: 'post',
    summary: 'Create Service Bundle',
    description: 'Create Service Bundle',
    stainlessPath: '(resource) employers.service_bundles > (method) create',
    qualified: 'client.employers.serviceBundles.create',
    params: [
      'employerId: string;',
      'bundleName: string;',
      'serviceIds: string[];',
      '_id?: string;',
      'limit?: number;',
      'occurrence?: string;',
      'recurring?: boolean;',
      'roles?: string[];',
      'startDate?: string;',
    ],
    response:
      '{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }',
    markdown:
      "## create\n\n`client.employers.serviceBundles.create(employerId: string, bundleName: string, serviceIds: string[], _id?: string, limit?: number, occurrence?: string, recurring?: boolean, roles?: string[], startDate?: string): { _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: object; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }`\n\n**post** `/v1/employers/{employerId}/service-bundles`\n\nCreate Service Bundle\n\n### Parameters\n\n- `employerId: string`\n\n- `bundleName: string`\n\n- `serviceIds: string[]`\n\n- `_id?: string`\n\n- `limit?: number`\n\n- `occurrence?: string`\n\n- `recurring?: boolean`\n\n- `roles?: string[]`\n\n- `startDate?: string`\n\n### Returns\n\n- `{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }`\n\n  - `_id: string`\n  - `bundleName: string`\n  - `employerId: string`\n  - `serviceIds: string[]`\n  - `createdAt?: string`\n  - `createdBy?: string`\n  - `externallyManaged?: boolean`\n  - `integration?: string`\n  - `integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }`\n  - `limit?: number`\n  - `occurrence?: string`\n  - `recurring?: boolean`\n  - `roles?: string[]`\n  - `startDate?: string`\n  - `updatedAt?: string`\n  - `updatedBy?: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst serviceBundle = await client.employers.serviceBundles.create('employerId', { bundleName: 'x', serviceIds: ['string'] });\n\nconsole.log(serviceBundle);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/employers/{employerId}/service-bundles/{id}',
    httpMethod: 'get',
    summary: 'Get Service Bundle',
    description: 'Get Service Bundle',
    stainlessPath: '(resource) employers.service_bundles > (method) retrieve',
    qualified: 'client.employers.serviceBundles.retrieve',
    params: ['employerId: string;', 'id: string;'],
    response:
      '{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }',
    markdown:
      "## retrieve\n\n`client.employers.serviceBundles.retrieve(employerId: string, id: string): { _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: object; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }`\n\n**get** `/v1/employers/{employerId}/service-bundles/{id}`\n\nGet Service Bundle\n\n### Parameters\n\n- `employerId: string`\n\n- `id: string`\n\n### Returns\n\n- `{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }`\n\n  - `_id: string`\n  - `bundleName: string`\n  - `employerId: string`\n  - `serviceIds: string[]`\n  - `createdAt?: string`\n  - `createdBy?: string`\n  - `externallyManaged?: boolean`\n  - `integration?: string`\n  - `integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }`\n  - `limit?: number`\n  - `occurrence?: string`\n  - `recurring?: boolean`\n  - `roles?: string[]`\n  - `startDate?: string`\n  - `updatedAt?: string`\n  - `updatedBy?: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst serviceBundle = await client.employers.serviceBundles.retrieve('id', { employerId: 'employerId' });\n\nconsole.log(serviceBundle);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/employers/{employerId}/service-bundles/{id}',
    httpMethod: 'put',
    summary: 'Update Service Bundle',
    description: 'Update Service Bundle',
    stainlessPath: '(resource) employers.service_bundles > (method) update',
    qualified: 'client.employers.serviceBundles.update',
    params: [
      'employerId: string;',
      'id: string;',
      'bundleName: string;',
      'serviceIds: string[];',
      '_id?: string;',
      'limit?: number;',
      'occurrence?: string;',
      'recurring?: boolean;',
      'roles?: string[];',
      'startDate?: string;',
    ],
    response:
      '{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }',
    markdown:
      "## update\n\n`client.employers.serviceBundles.update(employerId: string, id: string, bundleName: string, serviceIds: string[], _id?: string, limit?: number, occurrence?: string, recurring?: boolean, roles?: string[], startDate?: string): { _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: object; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }`\n\n**put** `/v1/employers/{employerId}/service-bundles/{id}`\n\nUpdate Service Bundle\n\n### Parameters\n\n- `employerId: string`\n\n- `id: string`\n\n- `bundleName: string`\n\n- `serviceIds: string[]`\n\n- `_id?: string`\n\n- `limit?: number`\n\n- `occurrence?: string`\n\n- `recurring?: boolean`\n\n- `roles?: string[]`\n\n- `startDate?: string`\n\n### Returns\n\n- `{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }`\n\n  - `_id: string`\n  - `bundleName: string`\n  - `employerId: string`\n  - `serviceIds: string[]`\n  - `createdAt?: string`\n  - `createdBy?: string`\n  - `externallyManaged?: boolean`\n  - `integration?: string`\n  - `integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }`\n  - `limit?: number`\n  - `occurrence?: string`\n  - `recurring?: boolean`\n  - `roles?: string[]`\n  - `startDate?: string`\n  - `updatedAt?: string`\n  - `updatedBy?: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst serviceBundle = await client.employers.serviceBundles.update('id', {\n  employerId: 'employerId',\n  bundleName: 'x',\n  serviceIds: ['string'],\n});\n\nconsole.log(serviceBundle);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/employers/{employerId}/service-bundles',
    httpMethod: 'get',
    summary: 'List Service Bundles',
    description: 'List Service Bundles',
    stainlessPath: '(resource) employers.service_bundles > (method) list',
    qualified: 'client.employers.serviceBundles.list',
    params: ['employerId: string;'],
    response:
      '{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }[]',
    markdown:
      "## list\n\n`client.employers.serviceBundles.list(employerId: string): { _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: object; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }[]`\n\n**get** `/v1/employers/{employerId}/service-bundles`\n\nList Service Bundles\n\n### Parameters\n\n- `employerId: string`\n\n### Returns\n\n- `{ _id: string; bundleName: string; employerId: string; serviceIds: string[]; createdAt?: string; createdBy?: string; externallyManaged?: boolean; integration?: string; integrationData?: { enterprise-health?: { addOnServices?: boolean; }; }; limit?: number; occurrence?: string; recurring?: boolean; roles?: string[]; startDate?: string; updatedAt?: string; updatedBy?: string; }[]`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst serviceBundles = await client.employers.serviceBundles.list('employerId');\n\nconsole.log(serviceBundles);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/employers/{employerId}/service-bundles/{id}',
    httpMethod: 'delete',
    summary: 'Delete Service Bundle',
    description: 'Delete Service Bundle',
    stainlessPath: '(resource) employers.service_bundles > (method) delete',
    qualified: 'client.employers.serviceBundles.delete',
    params: ['employerId: string;', 'id: string;'],
    markdown:
      "## delete\n\n`client.employers.serviceBundles.delete(employerId: string, id: string): void`\n\n**delete** `/v1/employers/{employerId}/service-bundles/{id}`\n\nDelete Service Bundle\n\n### Parameters\n\n- `employerId: string`\n\n- `id: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nawait client.employers.serviceBundles.delete('id', { employerId: 'employerId' })\n```",
  },
  {
    name: 'send_results',
    endpoint: '/v1/hl7/results',
    httpMethod: 'post',
    summary: 'Send HL7 Results',
    description: 'Send lab results or documents via HL7',
    stainlessPath: '(resource) hl7 > (method) send_results',
    qualified: 'client.hl7.sendResults',
    params: ['employeeId: string;', 'file: { base64: string; name: string; type: string; };'],
    response: 'string',
    markdown:
      "## send_results\n\n`client.hl7.sendResults(employeeId: string, file: { base64: string; name: string; type: string; }): string`\n\n**post** `/v1/hl7/results`\n\nSend lab results or documents via HL7\n\n### Parameters\n\n- `employeeId: string`\n  Employee ID to send results for\n\n- `file: { base64: string; name: string; type: string; }`\n  File containing the results\n  - `base64: string`\n    Base64 encoded file content\n  - `name: string`\n    File name\n  - `type: string`\n    MIME type of the file\n\n### Returns\n\n- `string`\n  Result of HL7 message send\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.hl7.sendResults({\n  employeeId: 'employeeId',\n  file: {\n  base64: 'base64',\n  name: 'name',\n  type: 'type',\n},\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/orders',
    httpMethod: 'post',
    summary: 'Create a new order',
    description:
      'Create orders for consumers (self-pay or employer-sponsored), employers, or bulk orders. Consolidates functionality from legacy Order.createOrder and Order.SendOrder methods.',
    stainlessPath: '(resource) orders > (method) create',
    qualified: 'client.orders.create',
    params: [
      "{ paymentMethod: 'self-pay' | 'employer-sponsored'; person: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; providerId: string; services: { _id: string; quantity: number; autoAccept?: boolean; }[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeId?: string; employeeIds?: string[]; employerId?: string; metadata?: object; priority?: 'normal' | 'high'; providerCreated?: boolean; providersIds?: { providerId: string; serviceId?: string; }[]; quantities?: object; reCaptchaToken?: string; servicesIds?: string[]; tokenId?: string; } | { employeeId: string; employerId: string; services: { _id: string; quantity: number; autoAccept?: boolean; }[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeIds?: string[]; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; providersIds?: { providerId: string; serviceId?: string; }[]; quantities?: object; reCaptchaToken?: string; servicesIds?: string[]; tokenId?: string; } | { employeeId: string; employerId: string; providersIds: { providerId: string; serviceId?: string; }[]; servicesIds: string[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeIds?: string[]; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; quantities?: object; reCaptchaToken?: string; services?: { _id: string; quantity: number; autoAccept?: boolean; }[]; tokenId?: string; } | { employeeIds: string[]; employerId: string; providersIds: { providerId: string; serviceId?: string; }[]; servicesIds: string[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeId?: string; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; quantities?: object; reCaptchaToken?: string; services?: { _id: string; quantity: number; autoAccept?: boolean; }[]; tokenId?: string; };",
    ],
    response:
      "{ orderId: string; orderNumber: string; success: true; hostedInvoiceUrl?: string; message?: string; partialSuccess?: boolean; selfPay?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; } | { orderResults: { orderId: string; orderNumber: string; providerId: string; }[]; status: 'split'; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; }",
    markdown:
      "## create\n\n`client.orders.create(body?: { paymentMethod: 'self-pay' | 'employer-sponsored'; person: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; providerId: string; services: { _id: string; quantity: number; autoAccept?: boolean; }[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeId?: string; employeeIds?: string[]; employerId?: string; metadata?: object; priority?: 'normal' | 'high'; providerCreated?: boolean; providersIds?: { providerId: string; serviceId?: string; }[]; quantities?: object; reCaptchaToken?: string; servicesIds?: string[]; tokenId?: string; } | { employeeId: string; employerId: string; services: { _id: string; quantity: number; autoAccept?: boolean; }[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeIds?: string[]; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; providersIds?: { providerId: string; serviceId?: string; }[]; quantities?: object; reCaptchaToken?: string; servicesIds?: string[]; tokenId?: string; } | { employeeId: string; employerId: string; providersIds: { providerId: string; serviceId?: string; }[]; servicesIds: string[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeIds?: string[]; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; quantities?: object; reCaptchaToken?: string; services?: { _id: string; quantity: number; autoAccept?: boolean; }[]; tokenId?: string; } | { employeeIds: string[]; employerId: string; providersIds: { providerId: string; serviceId?: string; }[]; servicesIds: string[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeId?: string; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; quantities?: object; reCaptchaToken?: string; services?: { _id: string; quantity: number; autoAccept?: boolean; }[]; tokenId?: string; }): { orderId: string; orderNumber: string; success: true; hostedInvoiceUrl?: string; message?: string; partialSuccess?: boolean; selfPay?: boolean; unavailableServices?: object[]; } | { orderResults: object[]; status: 'split'; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: object[]; }`\n\n**post** `/v1/orders`\n\nCreate orders for consumers (self-pay or employer-sponsored), employers, or bulk orders. Consolidates functionality from legacy Order.createOrder and Order.SendOrder methods.\n\n### Parameters\n\n- `body?: { paymentMethod: 'self-pay' | 'employer-sponsored'; person: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; providerId: string; services: { _id: string; quantity: number; autoAccept?: boolean; }[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeId?: string; employeeIds?: string[]; employerId?: string; metadata?: object; priority?: 'normal' | 'high'; providerCreated?: boolean; providersIds?: { providerId: string; serviceId?: string; }[]; quantities?: object; reCaptchaToken?: string; servicesIds?: string[]; tokenId?: string; } | { employeeId: string; employerId: string; services: { _id: string; quantity: number; autoAccept?: boolean; }[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeIds?: string[]; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; providersIds?: { providerId: string; serviceId?: string; }[]; quantities?: object; reCaptchaToken?: string; servicesIds?: string[]; tokenId?: string; } | { employeeId: string; employerId: string; providersIds: { providerId: string; serviceId?: string; }[]; servicesIds: string[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeIds?: string[]; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; quantities?: object; reCaptchaToken?: string; services?: { _id: string; quantity: number; autoAccept?: boolean; }[]; tokenId?: string; } | { employeeIds: string[]; employerId: string; providersIds: { providerId: string; serviceId?: string; }[]; servicesIds: string[]; _id?: string; brandId?: string; dueDate?: string; dueDates?: string[]; employeeId?: string; metadata?: object; paymentMethod?: 'self-pay' | 'employer-sponsored'; person?: { city: string; dob: string; email: string; firstName: string; lastName: string; phone: string; state: string; street: string; zipcode: string; country?: string; county?: string; street2?: string; }; priority?: 'normal' | 'high'; providerCreated?: boolean; providerId?: string; quantities?: object; reCaptchaToken?: string; services?: { _id: string; quantity: number; autoAccept?: boolean; }[]; tokenId?: string; }`\n\n### Returns\n\n- `{ orderId: string; orderNumber: string; success: true; hostedInvoiceUrl?: string; message?: string; partialSuccess?: boolean; selfPay?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; } | { orderResults: { orderId: string; orderNumber: string; providerId: string; }[]; status: 'split'; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; }`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst order = await client.orders.create();\n\nconsole.log(order);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/orders/{orderId}',
    httpMethod: 'get',
    summary: 'Get order details',
    description: 'Retrieve details for a specific order',
    stainlessPath: '(resource) orders > (method) retrieve',
    qualified: 'client.orders.retrieve',
    params: ['orderId: string;'],
    response: '{ orderId?: string; orderNumber?: string; status?: string; }',
    markdown:
      "## retrieve\n\n`client.orders.retrieve(orderId: string): { orderId?: string; orderNumber?: string; status?: string; }`\n\n**get** `/v1/orders/{orderId}`\n\nRetrieve details for a specific order\n\n### Parameters\n\n- `orderId: string`\n\n### Returns\n\n- `{ orderId?: string; orderNumber?: string; status?: string; }`\n\n  - `orderId?: string`\n  - `orderNumber?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst order = await client.orders.retrieve('orderId');\n\nconsole.log(order);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/orders/{orderId}',
    httpMethod: 'post',
    summary: 'Update an existing order',
    description:
      'Update order details and associated order items. Allows updating order status, metadata, and modifying order item services.',
    stainlessPath: '(resource) orders > (method) update',
    qualified: 'client.orders.update',
    params: [
      'orderId: string;',
      'metadata?: object;',
      "services?: { serviceId: string; dueDate?: string; results?: object; status?: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'rejected'; }[];",
      'status?: string;',
    ],
    response:
      '{ message: string; orderId: string; orderNumber: string; success: true; updatedFields?: string[]; }',
    markdown:
      "## update\n\n`client.orders.update(orderId: string, metadata?: object, services?: { serviceId: string; dueDate?: string; results?: object; status?: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'rejected'; }[], status?: string): { message: string; orderId: string; orderNumber: string; success: true; updatedFields?: string[]; }`\n\n**post** `/v1/orders/{orderId}`\n\nUpdate order details and associated order items. Allows updating order status, metadata, and modifying order item services.\n\n### Parameters\n\n- `orderId: string`\n\n- `metadata?: object`\n  Arbitrary metadata to update on the order (non-indexed passthrough, <=10KB when JSON stringified)\n\n- `services?: { serviceId: string; dueDate?: string; results?: object; status?: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'rejected'; }[]`\n\n- `status?: string`\n\n### Returns\n\n- `{ message: string; orderId: string; orderNumber: string; success: true; updatedFields?: string[]; }`\n\n  - `message: string`\n  - `orderId: string`\n  - `orderNumber: string`\n  - `success: true`\n  - `updatedFields?: string[]`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst order = await client.orders.update('orderId');\n\nconsole.log(order);\n```",
  },
  {
    name: 'retrieve_results',
    endpoint: '/v1/orders/{orderId}/results',
    httpMethod: 'get',
    summary: 'Get order results',
    description:
      'Retrieve results for an order. Supports filtering by serviceId, status, date window, and pagination.',
    stainlessPath: '(resource) orders > (method) retrieve_results',
    qualified: 'client.orders.retrieveResults',
    params: [
      'orderId: string;',
      'page?: number;',
      'pageSize?: number;',
      'serviceId?: string;',
      'since?: string;',
      'status?: string;',
      'until?: string;',
    ],
    response:
      '{ meta: { orderId: string; page: number; pageSize: number; returned: number; totalServices: number; employeeId?: string; orderNumber?: string; providerId?: string; }; services: { serviceId: string; status: string; altTxt?: string; completed_datetime?: string; contacts?: string[]; drawn_datetime?: string; fileIds?: string[]; message?: string; result?: string; resultsPosted?: string; }[]; }',
    markdown:
      "## retrieve_results\n\n`client.orders.retrieveResults(orderId: string, page?: number, pageSize?: number, serviceId?: string, since?: string, status?: string, until?: string): { meta: object; services: object[]; }`\n\n**get** `/v1/orders/{orderId}/results`\n\nRetrieve results for an order. Supports filtering by serviceId, status, date window, and pagination.\n\n### Parameters\n\n- `orderId: string`\n\n- `page?: number`\n\n- `pageSize?: number`\n\n- `serviceId?: string`\n\n- `since?: string`\n\n- `status?: string`\n\n- `until?: string`\n\n### Returns\n\n- `{ meta: { orderId: string; page: number; pageSize: number; returned: number; totalServices: number; employeeId?: string; orderNumber?: string; providerId?: string; }; services: { serviceId: string; status: string; altTxt?: string; completed_datetime?: string; contacts?: string[]; drawn_datetime?: string; fileIds?: string[]; message?: string; result?: string; resultsPosted?: string; }[]; }`\n\n  - `meta: { orderId: string; page: number; pageSize: number; returned: number; totalServices: number; employeeId?: string; orderNumber?: string; providerId?: string; }`\n  - `services: { serviceId: string; status: string; altTxt?: string; completed_datetime?: string; contacts?: string[]; drawn_datetime?: string; fileIds?: string[]; message?: string; result?: string; resultsPosted?: string; }[]`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.orders.retrieveResults('orderId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'schedule_appointment',
    endpoint: '/v1/orders/{orderId}/schedule-appointment',
    httpMethod: 'post',
    summary: 'Schedule an appointment for an order',
    description:
      'Schedule an appointment or walk-in for an existing order. Sends HL7 SIU^S12 message for appointment booking.',
    stainlessPath: '(resource) orders > (method) schedule_appointment',
    qualified: 'client.orders.scheduleAppointment',
    params: [
      'orderId: string;',
      "appointment: { date: string; dateTime: string; time: string; notes?: string; type?: 'appointment'; } | { date?: string; dateTime?: string; notes?: string; time?: string; type?: 'walkin'; };",
      'orderAccessCode: string;',
      'providerId?: string;',
    ],
    response: '{ message: string; success: boolean; }',
    markdown:
      "## schedule_appointment\n\n`client.orders.scheduleAppointment(orderId: string, appointment: { date: string; dateTime: string; time: string; notes?: string; type?: 'appointment'; } | { date?: string; dateTime?: string; notes?: string; time?: string; type?: 'walkin'; }, orderAccessCode: string, providerId?: string): { message: string; success: boolean; }`\n\n**post** `/v1/orders/{orderId}/schedule-appointment`\n\nSchedule an appointment or walk-in for an existing order. Sends HL7 SIU^S12 message for appointment booking.\n\n### Parameters\n\n- `orderId: string`\n\n- `appointment: { date: string; dateTime: string; time: string; notes?: string; type?: 'appointment'; } | { date?: string; dateTime?: string; notes?: string; time?: string; type?: 'walkin'; }`\n\n- `orderAccessCode: string`\n  Order access code for authorization\n\n- `providerId?: string`\n  Provider ID for authorization\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.orders.scheduleAppointment('orderId', {\n  appointment: {\n  date: 'date',\n  dateTime: '2019-12-27T18:11:19.117Z',\n  time: 'time',\n},\n  orderAccessCode: 'orderAccessCode',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'send_for_employee',
    endpoint: '/v1/orders/send',
    httpMethod: 'post',
    summary: 'Send Order for Employee',
    description:
      'Send an order for a specific employee. Requires API key, login token, and user ID. This endpoint specifically handles employer-to-employee order sending.',
    stainlessPath: '(resource) orders > (method) send_for_employee',
    qualified: 'client.orders.sendForEmployee',
    params: [
      'employeeId: string;',
      'employerId: string;',
      'providersIds: { providerId: string; serviceId?: string; }[];',
      'servicesIds: string[];',
      'login-token: string;',
      'user-id: string;',
      'brandId?: string;',
      'dueDate?: string;',
      'dueDates?: string[];',
      'metadata?: object;',
      "priority?: 'normal' | 'high';",
      'providerCreated?: boolean;',
      'providerId?: string;',
      'quantities?: object;',
    ],
    response:
      "{ orderId: string; orderNumber: string; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; } | { orderResults: { orderId: string; orderNumber: string; providerId: string; }[]; status: 'split'; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; }",
    markdown:
      "## send_for_employee\n\n`client.orders.sendForEmployee(employeeId: string, employerId: string, providersIds: { providerId: string; serviceId?: string; }[], servicesIds: string[], login-token: string, user-id: string, brandId?: string, dueDate?: string, dueDates?: string[], metadata?: object, priority?: 'normal' | 'high', providerCreated?: boolean, providerId?: string, quantities?: object): { orderId: string; orderNumber: string; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: object[]; } | { orderResults: object[]; status: 'split'; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: object[]; }`\n\n**post** `/v1/orders/send`\n\nSend an order for a specific employee. Requires API key, login token, and user ID. This endpoint specifically handles employer-to-employee order sending.\n\n### Parameters\n\n- `employeeId: string`\n  Employee ID to send order to\n\n- `employerId: string`\n  Employer ID sending the order\n\n- `providersIds: { providerId: string; serviceId?: string; }[]`\n  Array mapping each service (by index) to a provider; serviceId optional\n\n- `servicesIds: string[]`\n  Array of service IDs to include in the order\n\n- `login-token: string`\n\n- `user-id: string`\n\n- `brandId?: string`\n  Brand ID for branded orders\n\n- `dueDate?: string`\n  Due date for the order (date or date-time ISO string)\n\n- `dueDates?: string[]`\n  Array of due dates per service\n\n- `metadata?: object`\n  Optional arbitrary metadata to store on the order (non-indexed passthrough, <=10KB when JSON stringified)\n\n- `priority?: 'normal' | 'high'`\n  Order priority level\n\n- `providerCreated?: boolean`\n  Whether this order is being created by a provider (affects permission checking)\n\n- `providerId?: string`\n  Single provider ID (shortcut when all services map to one provider)\n\n- `quantities?: object`\n  Service ID to quantity mapping\n\n### Returns\n\n- `{ orderId: string; orderNumber: string; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; } | { orderResults: { orderId: string; orderNumber: string; providerId: string; }[]; status: 'split'; success: true; message?: string; partialSuccess?: boolean; unavailableServices?: { reason: string; serviceId: string; serviceName?: string; }[]; }`\n  Order sent successfully (single or split)\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.orders.sendForEmployee({\n  employeeId: 'employeeId',\n  employerId: 'employerId',\n  providersIds: [{ providerId: 'providerId' }],\n  servicesIds: ['string'],\n  'login-token': 'login-token',\n  'user-id': 'user-id',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'update_status',
    endpoint: '/v1/orders/{orderId}/status',
    httpMethod: 'put',
    summary: 'Update order status',
    description: 'Update the status of an existing order',
    stainlessPath: '(resource) orders > (method) update_status',
    qualified: 'client.orders.updateStatus',
    params: ['orderId: string;', 'status: string;', 'message?: string;'],
    response: '{ message?: string; success?: boolean; }',
    markdown:
      "## update_status\n\n`client.orders.updateStatus(orderId: string, status: string, message?: string): { message?: string; success?: boolean; }`\n\n**put** `/v1/orders/{orderId}/status`\n\nUpdate the status of an existing order\n\n### Parameters\n\n- `orderId: string`\n\n- `status: string`\n\n- `message?: string`\n\n### Returns\n\n- `{ message?: string; success?: boolean; }`\n\n  - `message?: string`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.orders.updateStatus('orderId', { status: 'order_sent' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'upload_results',
    endpoint: '/v1/orders/{orderId}/upload-results',
    httpMethod: 'post',
    summary: 'Upload results for an order',
    description:
      'Upload test results for a specific order item. Supports both existing fileIds and base64 encoded files. Requires order access code and employee verification.',
    stainlessPath: '(resource) orders > (method) upload_results',
    qualified: 'client.orders.uploadResults',
    params: [
      'orderId: string;',
      'captchaToken: string;',
      'orderAccessCode: string;',
      'serviceId: string;',
      'dob?: string;',
      'fileIds?: string[];',
      'files?: { base64: string; name: string; type: string; }[];',
      'lastName?: string;',
    ],
    response: '{ message?: string; success?: boolean; }',
    markdown:
      "## upload_results\n\n`client.orders.uploadResults(orderId: string, captchaToken: string, orderAccessCode: string, serviceId: string, dob?: string, fileIds?: string[], files?: { base64: string; name: string; type: string; }[], lastName?: string): { message?: string; success?: boolean; }`\n\n**post** `/v1/orders/{orderId}/upload-results`\n\nUpload test results for a specific order item. Supports both existing fileIds and base64 encoded files. Requires order access code and employee verification.\n\n### Parameters\n\n- `orderId: string`\n\n- `captchaToken: string`\n\n- `orderAccessCode: string`\n\n- `serviceId: string`\n\n- `dob?: string`\n  Date of birth in YYYY-MM-DD format\n\n- `fileIds?: string[]`\n\n- `files?: { base64: string; name: string; type: string; }[]`\n\n- `lastName?: string`\n\n### Returns\n\n- `{ message?: string; success?: boolean; }`\n\n  - `message?: string`\n  - `success?: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.orders.uploadResults('orderId', {\n  captchaToken: 'x',\n  orderAccessCode: 'x',\n  serviceId: 'x',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/v1/employees',
    httpMethod: 'post',
    summary: 'Create Employee',
    description: 'Create a new employee in the system.',
    stainlessPath: '(resource) employees > (method) create',
    qualified: 'client.employees.create',
    params: [
      'email: string;',
      'firstName: string;',
      'lastName: string;',
      "activeAccount?: 'Active' | 'Inactive';",
      'address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; };',
      'blurb?: string;',
      'departments?: string[];',
      'dob?: string;',
      'employer_id?: string;',
      'extendedFields?: { name: string; value: string; }[];',
      "phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[];",
      'title?: string;',
    ],
    response: '{ employeeId: string; message: string; success: boolean; }',
    markdown:
      "## create\n\n`client.employees.create(email: string, firstName: string, lastName: string, activeAccount?: 'Active' | 'Inactive', address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }, blurb?: string, departments?: string[], dob?: string, employer_id?: string, extendedFields?: { name: string; value: string; }[], phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[], title?: string): { employeeId: string; message: string; success: boolean; }`\n\n**post** `/v1/employees`\n\nCreate a new employee in the system.\n\n### Parameters\n\n- `email: string`\n\n- `firstName: string`\n\n- `lastName: string`\n\n- `activeAccount?: 'Active' | 'Inactive'`\n\n- `address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }`\n  - `city: string`\n  - `postalCode: string`\n  - `state: string`\n  - `street1: string`\n  - `country?: string`\n  - `county?: string`\n  - `street2?: string`\n\n- `blurb?: string`\n\n- `departments?: string[]`\n\n- `dob?: string`\n\n- `employer_id?: string`\n\n- `extendedFields?: { name: string; value: string; }[]`\n\n- `phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]`\n\n- `title?: string`\n\n### Returns\n\n- `{ employeeId: string; message: string; success: boolean; }`\n  Employee created successfully\n\n  - `employeeId: string`\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employee = await client.employees.create({\n  email: 'dev@stainless.com',\n  firstName: 'x',\n  lastName: 'x',\n});\n\nconsole.log(employee);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/v1/employees/{employeeId}',
    httpMethod: 'get',
    summary: 'Get Employee',
    description: 'Retrieve an employee by their unique ID.',
    stainlessPath: '(resource) employees > (method) retrieve',
    qualified: 'client.employees.retrieve',
    params: ['employeeId: string;'],
    response:
      "{ employee: { _id: string; email: string; employer_id: string; firstName: string; lastName: string; activeAccount?: 'Active' | 'Inactive'; address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }; blurb?: string; createdAt?: string; createdBy?: string; departments?: string[]; dob?: string; extendedFields?: { name: string; value: string; }[]; phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]; title?: string; updatedAt?: string; updatedBy?: string; }; message: string; success: boolean; }",
    markdown:
      "## retrieve\n\n`client.employees.retrieve(employeeId: string): { employee: object; message: string; success: boolean; }`\n\n**get** `/v1/employees/{employeeId}`\n\nRetrieve an employee by their unique ID.\n\n### Parameters\n\n- `employeeId: string`\n\n### Returns\n\n- `{ employee: { _id: string; email: string; employer_id: string; firstName: string; lastName: string; activeAccount?: 'Active' | 'Inactive'; address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }; blurb?: string; createdAt?: string; createdBy?: string; departments?: string[]; dob?: string; extendedFields?: { name: string; value: string; }[]; phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]; title?: string; updatedAt?: string; updatedBy?: string; }; message: string; success: boolean; }`\n  Employee found successfully\n\n  - `employee: { _id: string; email: string; employer_id: string; firstName: string; lastName: string; activeAccount?: 'Active' | 'Inactive'; address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }; blurb?: string; createdAt?: string; createdBy?: string; departments?: string[]; dob?: string; extendedFields?: { name: string; value: string; }[]; phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]; title?: string; updatedAt?: string; updatedBy?: string; }`\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employee = await client.employees.retrieve('employeeId');\n\nconsole.log(employee);\n```",
  },
  {
    name: 'update',
    endpoint: '/v1/employees',
    httpMethod: 'put',
    summary: 'Update Employee',
    description: 'Update an existing employee in the system.',
    stainlessPath: '(resource) employees > (method) update',
    qualified: 'client.employees.update',
    params: [
      '_id: string;',
      "activeAccount?: 'Active' | 'Inactive';",
      'address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; };',
      'blurb?: string;',
      'departments?: string[];',
      'dob?: string;',
      'email?: string;',
      'employer_id?: string;',
      'extendedFields?: { name: string; value: string; }[];',
      'firstName?: string;',
      'lastName?: string;',
      "phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[];",
      'title?: string;',
    ],
    response: '{ message: string; success: boolean; }',
    markdown:
      "## update\n\n`client.employees.update(_id: string, activeAccount?: 'Active' | 'Inactive', address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }, blurb?: string, departments?: string[], dob?: string, email?: string, employer_id?: string, extendedFields?: { name: string; value: string; }[], firstName?: string, lastName?: string, phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[], title?: string): { message: string; success: boolean; }`\n\n**put** `/v1/employees`\n\nUpdate an existing employee in the system.\n\n### Parameters\n\n- `_id: string`\n\n- `activeAccount?: 'Active' | 'Inactive'`\n\n- `address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }`\n  - `city: string`\n  - `postalCode: string`\n  - `state: string`\n  - `street1: string`\n  - `country?: string`\n  - `county?: string`\n  - `street2?: string`\n\n- `blurb?: string`\n\n- `departments?: string[]`\n\n- `dob?: string`\n\n- `email?: string`\n\n- `employer_id?: string`\n\n- `extendedFields?: { name: string; value: string; }[]`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]`\n\n- `title?: string`\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n  Employee updated successfully\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employee = await client.employees.update({ _id: 'x' });\n\nconsole.log(employee);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/employees',
    httpMethod: 'get',
    summary: 'List Employees',
    description: 'List all employees for a given employer with pagination.',
    stainlessPath: '(resource) employees > (method) list',
    qualified: 'client.employees.list',
    params: [
      'employerId: string;',
      "activeAccount?: 'Active' | 'Inactive';",
      'limit?: string;',
      'offset?: string;',
      'search?: string;',
    ],
    response:
      "{ employees: { _id: string; email: string; employer_id: string; firstName: string; lastName: string; activeAccount?: 'Active' | 'Inactive'; address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }; blurb?: string; createdAt?: string; createdBy?: string; departments?: string[]; dob?: string; extendedFields?: { name: string; value: string; }[]; phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]; title?: string; updatedAt?: string; updatedBy?: string; }[]; message: string; success: boolean; total: number; }",
    markdown:
      "## list\n\n`client.employees.list(employerId: string, activeAccount?: 'Active' | 'Inactive', limit?: string, offset?: string, search?: string): { employees: object[]; message: string; success: boolean; total: number; }`\n\n**get** `/v1/employees`\n\nList all employees for a given employer with pagination.\n\n### Parameters\n\n- `employerId: string`\n  ID of the employer to list employees for\n\n- `activeAccount?: 'Active' | 'Inactive'`\n  Filter by account status. If omitted, returns all employees regardless of status.\n\n- `limit?: string`\n  Maximum number of employees to return (default: 50)\n\n- `offset?: string`\n  Number of employees to skip (default: 0)\n\n- `search?: string`\n  Search term to filter employees by first name, last name, or email (case-insensitive)\n\n### Returns\n\n- `{ employees: { _id: string; email: string; employer_id: string; firstName: string; lastName: string; activeAccount?: 'Active' | 'Inactive'; address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }; blurb?: string; createdAt?: string; createdBy?: string; departments?: string[]; dob?: string; extendedFields?: { name: string; value: string; }[]; phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]; title?: string; updatedAt?: string; updatedBy?: string; }[]; message: string; success: boolean; total: number; }`\n  Employees retrieved successfully\n\n  - `employees: { _id: string; email: string; employer_id: string; firstName: string; lastName: string; activeAccount?: 'Active' | 'Inactive'; address?: { city: string; postalCode: string; state: string; street1: string; country?: string; county?: string; street2?: string; }; blurb?: string; createdAt?: string; createdBy?: string; departments?: string[]; dob?: string; extendedFields?: { name: string; value: string; }[]; phone?: { number: string; type: 'Cell' | 'Home' | 'Work' | 'Other'; }[]; title?: string; updatedAt?: string; updatedBy?: string; }[]`\n  - `message: string`\n  - `success: boolean`\n  - `total: number`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employees = await client.employees.list({ employerId: 'employerId' });\n\nconsole.log(employees);\n```",
  },
  {
    name: 'delete',
    endpoint: '/v1/employees/{employeeId}',
    httpMethod: 'delete',
    summary: 'Delete Employee',
    description: 'Delete an employee from the system. Cannot delete employees with existing orders.',
    stainlessPath: '(resource) employees > (method) delete',
    qualified: 'client.employees.delete',
    params: ['employeeId: string;'],
    response: '{ message: string; success: boolean; }',
    markdown:
      "## delete\n\n`client.employees.delete(employeeId: string): { message: string; success: boolean; }`\n\n**delete** `/v1/employees/{employeeId}`\n\nDelete an employee from the system. Cannot delete employees with existing orders.\n\n### Parameters\n\n- `employeeId: string`\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n  Employee deleted successfully\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst employee = await client.employees.delete('employeeId');\n\nconsole.log(employee);\n```",
  },
  {
    name: 'link_user',
    endpoint: '/v1/employees/link-user',
    httpMethod: 'post',
    summary: 'Link Employee to User',
    description: 'Link an employee to a user account with specified roles',
    stainlessPath: '(resource) employees > (method) link_user',
    qualified: 'client.employees.linkUser',
    params: ['employeeId: string;', 'userId: string;', 'role?: string[];'],
    response: '{ linkId: string; message: string; success: boolean; }',
    markdown:
      "## link_user\n\n`client.employees.linkUser(employeeId: string, userId: string, role?: string[]): { linkId: string; message: string; success: boolean; }`\n\n**post** `/v1/employees/link-user`\n\nLink an employee to a user account with specified roles\n\n### Parameters\n\n- `employeeId: string`\n\n- `userId: string`\n\n- `role?: string[]`\n\n### Returns\n\n- `{ linkId: string; message: string; success: boolean; }`\n  Employee linked successfully\n\n  - `linkId: string`\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.employees.linkUser({ employeeId: 'x', userId: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'unlink_user',
    endpoint: '/v1/employees/unlink-user',
    httpMethod: 'delete',
    summary: 'Unlink Employee from User',
    description: 'Remove the link between an employee and a user account',
    stainlessPath: '(resource) employees > (method) unlink_user',
    qualified: 'client.employees.unlinkUser',
    params: ['employeeId: string;', 'userId: string;'],
    response: '{ message: string; success: boolean; }',
    markdown:
      "## unlink_user\n\n`client.employees.unlinkUser(employeeId: string, userId: string): { message: string; success: boolean; }`\n\n**delete** `/v1/employees/unlink-user`\n\nRemove the link between an employee and a user account\n\n### Parameters\n\n- `employeeId: string`\n  ID of the employee to unlink\n\n- `userId: string`\n  ID of the user to unlink from\n\n### Returns\n\n- `{ message: string; success: boolean; }`\n  Employee unlinked successfully\n\n  - `message: string`\n  - `success: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.employees.unlinkUser({ employeeId: 'employeeId', userId: 'userId' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/v1/integrations',
    httpMethod: 'get',
    summary: 'List brand integrations',
    description:
      'Returns the current brand integrations object keyed by integration name (empty object if none). Brand resolved via x-brand-id header.',
    stainlessPath: '(resource) integrations > (method) list',
    qualified: 'client.integrations.list',
    params: ['x-brand-id: string;'],
    response: '{ integrations: object; }',
    markdown:
      "## list\n\n`client.integrations.list(x-brand-id: string): { integrations: object; }`\n\n**get** `/v1/integrations`\n\nReturns the current brand integrations object keyed by integration name (empty object if none). Brand resolved via x-brand-id header.\n\n### Parameters\n\n- `x-brand-id: string`\n\n### Returns\n\n- `{ integrations: object; }`\n\n  - `integrations: object`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst integrations = await client.integrations.list({ 'x-brand-id': 'x' });\n\nconsole.log(integrations);\n```",
  },
  {
    name: 'check_active',
    endpoint: '/v1/integrations/{name}',
    httpMethod: 'get',
    summary: 'Check active integration',
    description:
      'Returns true if the named integration is active for the given brand (brand resolved via x-brand-id header).',
    stainlessPath: '(resource) integrations > (method) check_active',
    qualified: 'client.integrations.checkActive',
    params: ['name: string;', 'x-brand-id: string;'],
    response: '{ active: boolean; }',
    markdown:
      "## check_active\n\n`client.integrations.checkActive(name: string, x-brand-id: string): { active: boolean; }`\n\n**get** `/v1/integrations/{name}`\n\nReturns true if the named integration is active for the given brand (brand resolved via x-brand-id header).\n\n### Parameters\n\n- `name: string`\n\n- `x-brand-id: string`\n\n### Returns\n\n- `{ active: boolean; }`\n\n  - `active: boolean`\n\n### Example\n\n```typescript\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.integrations.checkActive('name', { 'x-brand-id': 'x' });\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
