// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

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
  perLanguage?: Record<string, PerLanguageData>;
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
    perLanguage: {
      typescript: {
        method: 'client.health.check',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.health.check();\n\nconsole.log(response.status);",
      },
      python: {
        method: 'health.check',
        example:
          'from bluehive import BlueHive\n\nclient = BlueHive()\nresponse = client.health.check()\nprint(response.status)',
      },
      java: {
        method: 'health().check',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.health.HealthCheckParams;\nimport com.bluehive.api.models.health.HealthCheckResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        HealthCheckResponse response = client.health().check();\n    }\n}',
      },
      kotlin: {
        method: 'health().check',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.health.HealthCheckParams\nimport com.bluehive.api.models.health.HealthCheckResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val response: HealthCheckResponse = client.health().check()\n}',
      },
      go: {
        method: 'client.Health.Check',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Health.Check(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      ruby: {
        method: 'health.check',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.health.check\n\nputs(response)',
      },
      http: {
        example: 'curl https://api.bluehive.com/v1/health \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.version.retrieve',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst version = await client.version.retrieve();\n\nconsole.log(version.version);",
      },
      python: {
        method: 'version.retrieve',
        example:
          'from bluehive import BlueHive\n\nclient = BlueHive()\nversion = client.version.retrieve()\nprint(version.version)',
      },
      java: {
        method: 'version().retrieve',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.version.VersionRetrieveParams;\nimport com.bluehive.api.models.version.VersionRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        VersionRetrieveResponse version = client.version().retrieve();\n    }\n}',
      },
      kotlin: {
        method: 'version().retrieve',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.version.VersionRetrieveParams\nimport com.bluehive.api.models.version.VersionRetrieveResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val version: VersionRetrieveResponse = client.version().retrieve()\n}',
      },
      go: {
        method: 'client.Version.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tversion, err := client.Version.Get(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", version.Version)\n}\n',
      },
      ruby: {
        method: 'version.retrieve',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nversion = blue_hive.version.retrieve\n\nputs(version)',
      },
      http: {
        example: 'curl https://api.bluehive.com/v1/version \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.providers.lookup',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.providers.lookup();\n\nconsole.log(response.providers);",
      },
      python: {
        method: 'providers.lookup',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.providers.lookup()\nprint(response.providers)',
      },
      java: {
        method: 'providers().lookup',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.providers.ProviderLookupParams;\nimport com.bluehive.api.models.providers.ProviderLookupResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        ProviderLookupResponse response = client.providers().lookup();\n    }\n}',
      },
      kotlin: {
        method: 'providers().lookup',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.providers.ProviderLookupParams\nimport com.bluehive.api.models.providers.ProviderLookupResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val response: ProviderLookupResponse = client.providers().lookup()\n}',
      },
      go: {
        method: 'client.Providers.Lookup',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Providers.Lookup(context.TODO(), githubcombluehivehealthbluehivesdkgo.ProviderLookupParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Providers)\n}\n',
      },
      ruby: {
        method: 'providers.lookup',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.providers.lookup\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/providers/lookup \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.database.checkHealth',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.database.checkHealth();\n\nconsole.log(response.status);",
      },
      python: {
        method: 'database.check_health',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.database.check_health()\nprint(response.status)',
      },
      java: {
        method: 'database().checkHealth',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.database.DatabaseCheckHealthParams;\nimport com.bluehive.api.models.database.DatabaseCheckHealthResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        DatabaseCheckHealthResponse response = client.database().checkHealth();\n    }\n}',
      },
      kotlin: {
        method: 'database().checkHealth',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.database.DatabaseCheckHealthParams\nimport com.bluehive.api.models.database.DatabaseCheckHealthResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val response: DatabaseCheckHealthResponse = client.database().checkHealth()\n}',
      },
      go: {
        method: 'client.Database.CheckHealth',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Database.CheckHealth(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n',
      },
      ruby: {
        method: 'database.check_health',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.database.check_health\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/database/health \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.fax.send',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.fax.send({\n  document: { content: 'content', contentType: 'application/pdf' },\n  to: 'to',\n});\n\nconsole.log(response.id);",
      },
      python: {
        method: 'fax.send',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.fax.send(\n    document={\n        "content": "content",\n        "content_type": "application/pdf",\n    },\n    to="to",\n)\nprint(response.id)',
      },
      java: {
        method: 'fax().send',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.fax.FaxSendParams;\nimport com.bluehive.api.models.fax.FaxSendResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        FaxSendParams params = FaxSendParams.builder()\n            .document(FaxSendParams.Document.builder()\n                .content("content")\n                .contentType(FaxSendParams.Document.ContentType.APPLICATION_PDF)\n                .build())\n            .to("to")\n            .build();\n        FaxSendResponse response = client.fax().send(params);\n    }\n}',
      },
      kotlin: {
        method: 'fax().send',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.fax.FaxSendParams\nimport com.bluehive.api.models.fax.FaxSendResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: FaxSendParams = FaxSendParams.builder()\n        .document(FaxSendParams.Document.builder()\n            .content("content")\n            .contentType(FaxSendParams.Document.ContentType.APPLICATION_PDF)\n            .build())\n        .to("to")\n        .build()\n    val response: FaxSendResponse = client.fax().send(params)\n}',
      },
      go: {
        method: 'client.Fax.Send',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Fax.Send(context.TODO(), githubcombluehivehealthbluehivesdkgo.FaxSendParams{\n\t\tDocument: githubcombluehivehealthbluehivesdkgo.FaxSendParamsDocument{\n\t\t\tContent:     "content",\n\t\t\tContentType: "application/pdf",\n\t\t},\n\t\tTo: "to",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'fax.send_',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.fax.send_(document: {content: "content", contentType: :"application/pdf"}, to: "to")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/fax/send \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "document": {\n            "content": "content",\n            "contentType": "application/pdf"\n          },\n          "to": "to"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.fax.retrieveStatus',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.fax.retrieveStatus('id');\n\nconsole.log(response.id);",
      },
      python: {
        method: 'fax.retrieve_status',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.fax.retrieve_status(\n    "id",\n)\nprint(response.id)',
      },
      java: {
        method: 'fax().retrieveStatus',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.fax.FaxRetrieveStatusParams;\nimport com.bluehive.api.models.fax.FaxRetrieveStatusResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        FaxRetrieveStatusResponse response = client.fax().retrieveStatus("id");\n    }\n}',
      },
      kotlin: {
        method: 'fax().retrieveStatus',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.fax.FaxRetrieveStatusParams\nimport com.bluehive.api.models.fax.FaxRetrieveStatusResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val response: FaxRetrieveStatusResponse = client.fax().retrieveStatus("id")\n}',
      },
      go: {
        method: 'client.Fax.GetStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Fax.GetStatus(context.TODO(), "id")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'fax.retrieve_status',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.fax.retrieve_status("id")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/fax/status/$ID \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.fax.listProviders',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.fax.listProviders();\n\nconsole.log(response.providers);",
      },
      python: {
        method: 'fax.list_providers',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.fax.list_providers()\nprint(response.providers)',
      },
      java: {
        method: 'fax().listProviders',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.fax.FaxListProvidersParams;\nimport com.bluehive.api.models.fax.FaxListProvidersResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        FaxListProvidersResponse response = client.fax().listProviders();\n    }\n}',
      },
      kotlin: {
        method: 'fax().listProviders',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.fax.FaxListProvidersParams\nimport com.bluehive.api.models.fax.FaxListProvidersResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val response: FaxListProvidersResponse = client.fax().listProviders()\n}',
      },
      go: {
        method: 'client.Fax.ListProviders',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Fax.ListProviders(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Providers)\n}\n',
      },
      ruby: {
        method: 'fax.list_providers',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.fax.list_providers\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/fax/providers \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.create',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employer = await client.employers.create({\n  address: {\n    city: 'city',\n    state: 'state',\n    street1: 'street1',\n    zipCode: 'zipCode',\n  },\n  email: 'dev@stainless.com',\n  name: 'name',\n  phones: [{ number: 'number' }],\n});\n\nconsole.log(employer._id);",
      },
      python: {
        method: 'employers.create',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployer = client.employers.create(\n    address={\n        "city": "city",\n        "state": "state",\n        "street1": "street1",\n        "zip_code": "zipCode",\n    },\n    email="dev@stainless.com",\n    name="name",\n    phones=[{\n        "number": "number"\n    }],\n)\nprint(employer._id)',
      },
      java: {
        method: 'employers().create',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.EmployerCreateParams;\nimport com.bluehive.api.models.employers.EmployerCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployerCreateParams params = EmployerCreateParams.builder()\n            .address(EmployerCreateParams.Address.builder()\n                .city("city")\n                .state("state")\n                .street1("street1")\n                .zipCode("zipCode")\n                .build())\n            .email("dev@stainless.com")\n            .name("name")\n            .addPhone(EmployerCreateParams.Phone.builder()\n                .number("number")\n                .build())\n            .build();\n        EmployerCreateResponse employer = client.employers().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'employers().create',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.EmployerCreateParams\nimport com.bluehive.api.models.employers.EmployerCreateResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: EmployerCreateParams = EmployerCreateParams.builder()\n        .address(EmployerCreateParams.Address.builder()\n            .city("city")\n            .state("state")\n            .street1("street1")\n            .zipCode("zipCode")\n            .build())\n        .email("dev@stainless.com")\n        .name("name")\n        .addPhone(EmployerCreateParams.Phone.builder()\n            .number("number")\n            .build())\n        .build()\n    val employer: EmployerCreateResponse = client.employers().create(params)\n}',
      },
      go: {
        method: 'client.Employers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployer, err := client.Employers.New(context.TODO(), githubcombluehivehealthbluehivesdkgo.EmployerNewParams{\n\t\tAddress: githubcombluehivehealthbluehivesdkgo.EmployerNewParamsAddress{\n\t\t\tCity:    "city",\n\t\t\tState:   "state",\n\t\t\tStreet1: "street1",\n\t\t\tZipCode: "zipCode",\n\t\t},\n\t\tEmail: "dev@stainless.com",\n\t\tName:  "name",\n\t\tPhones: []githubcombluehivehealthbluehivesdkgo.EmployerNewParamsPhone{{\n\t\t\tNumber: "number",\n\t\t}},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employer.ID)\n}\n',
      },
      ruby: {
        method: 'employers.create',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployer = blue_hive.employers.create(\n  address: {city: "city", state: "state", street1: "street1", zipCode: "zipCode"},\n  email: "dev@stainless.com",\n  name: "name",\n  phones: [{number: "number"}]\n)\n\nputs(employer)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "address": {\n            "city": "city",\n            "state": "state",\n            "street1": "street1",\n            "zipCode": "zipCode"\n          },\n          "email": "dev@stainless.com",\n          "name": "name",\n          "phones": [\n            {\n              "number": "number"\n            }\n          ]\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.retrieve',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employer = await client.employers.retrieve('employerId');\n\nconsole.log(employer);",
      },
      python: {
        method: 'employers.retrieve',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployer = client.employers.retrieve(\n    "employerId",\n)\nprint(employer)',
      },
      java: {
        method: 'employers().retrieve',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.EmployerRetrieveParams;\nimport com.bluehive.api.models.employers.EmployerRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployerRetrieveResponse employer = client.employers().retrieve("employerId");\n    }\n}',
      },
      kotlin: {
        method: 'employers().retrieve',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.EmployerRetrieveParams\nimport com.bluehive.api.models.employers.EmployerRetrieveResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val employer: EmployerRetrieveResponse = client.employers().retrieve("employerId")\n}',
      },
      go: {
        method: 'client.Employers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployer, err := client.Employers.Get(context.TODO(), "employerId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employer)\n}\n',
      },
      ruby: {
        method: 'employers.retrieve',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployer = blue_hive.employers.retrieve("employerId")\n\nputs(employer)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers/$EMPLOYER_ID \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.list',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employers = await client.employers.list({\n  'login-token': 'login-token',\n  'user-id': 'user-id',\n});\n\nconsole.log(employers);",
      },
      python: {
        method: 'employers.list',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployers = client.employers.list(\n    login_token="login-token",\n    user_id="user-id",\n)\nprint(employers)',
      },
      java: {
        method: 'employers().list',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.EmployerListParams;\nimport com.bluehive.api.models.employers.EmployerListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployerListParams params = EmployerListParams.builder()\n            .loginToken("login-token")\n            .userId("user-id")\n            .build();\n        List<EmployerListResponse> employers = client.employers().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'employers().list',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.EmployerListParams\nimport com.bluehive.api.models.employers.EmployerListResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: EmployerListParams = EmployerListParams.builder()\n        .loginToken("login-token")\n        .userId("user-id")\n        .build()\n    val employers: List<EmployerListResponse> = client.employers().list(params)\n}',
      },
      go: {
        method: 'client.Employers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployers, err := client.Employers.List(context.TODO(), githubcombluehivehealthbluehivesdkgo.EmployerListParams{\n\t\tLoginToken: "login-token",\n\t\tUserID:     "user-id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employers)\n}\n',
      },
      ruby: {
        method: 'employers.list',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployers = blue_hive.employers.list(login_token: "login-token", user_id: "user-id")\n\nputs(employers)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers/list \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.serviceBundles.create',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst serviceBundle = await client.employers.serviceBundles.create('employerId', {\n  bundleName: 'x',\n  serviceIds: ['string'],\n});\n\nconsole.log(serviceBundle._id);",
      },
      python: {
        method: 'employers.service_bundles.create',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nservice_bundle = client.employers.service_bundles.create(\n    employer_id="employerId",\n    bundle_name="x",\n    service_ids=["string"],\n)\nprint(service_bundle._id)',
      },
      java: {
        method: 'employers().serviceBundles().create',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleCreateParams;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        ServiceBundleCreateParams params = ServiceBundleCreateParams.builder()\n            .employerId("employerId")\n            .bundleName("x")\n            .addServiceId("string")\n            .build();\n        ServiceBundleCreateResponse serviceBundle = client.employers().serviceBundles().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'employers().serviceBundles().create',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleCreateParams\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleCreateResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: ServiceBundleCreateParams = ServiceBundleCreateParams.builder()\n        .employerId("employerId")\n        .bundleName("x")\n        .addServiceId("string")\n        .build()\n    val serviceBundle: ServiceBundleCreateResponse = client.employers().serviceBundles().create(params)\n}',
      },
      go: {
        method: 'client.Employers.ServiceBundles.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tserviceBundle, err := client.Employers.ServiceBundles.New(\n\t\tcontext.TODO(),\n\t\t"employerId",\n\t\tgithubcombluehivehealthbluehivesdkgo.EmployerServiceBundleNewParams{\n\t\t\tBundleName: "x",\n\t\t\tServiceIDs: []string{"string"},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", serviceBundle.ID)\n}\n',
      },
      ruby: {
        method: 'employers.service_bundles.create',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nservice_bundle = blue_hive.employers.service_bundles.create("employerId", bundle_name: "x", service_ids: ["string"])\n\nputs(service_bundle)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers/$EMPLOYER_ID/service-bundles \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "bundleName": "x",\n          "serviceIds": [\n            "string"\n          ]\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.serviceBundles.list',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst serviceBundles = await client.employers.serviceBundles.list('employerId');\n\nconsole.log(serviceBundles);",
      },
      python: {
        method: 'employers.service_bundles.list',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nservice_bundles = client.employers.service_bundles.list(\n    "employerId",\n)\nprint(service_bundles)',
      },
      java: {
        method: 'employers().serviceBundles().list',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleListParams;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        List<ServiceBundleListResponse> serviceBundles = client.employers().serviceBundles().list("employerId");\n    }\n}',
      },
      kotlin: {
        method: 'employers().serviceBundles().list',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleListParams\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleListResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val serviceBundles: List<ServiceBundleListResponse> = client.employers().serviceBundles().list("employerId")\n}',
      },
      go: {
        method: 'client.Employers.ServiceBundles.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tserviceBundles, err := client.Employers.ServiceBundles.List(context.TODO(), "employerId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", serviceBundles)\n}\n',
      },
      ruby: {
        method: 'employers.service_bundles.list',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nservice_bundles = blue_hive.employers.service_bundles.list("employerId")\n\nputs(service_bundles)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers/$EMPLOYER_ID/service-bundles \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.serviceBundles.retrieve',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst serviceBundle = await client.employers.serviceBundles.retrieve('id', {\n  employerId: 'employerId',\n});\n\nconsole.log(serviceBundle._id);",
      },
      python: {
        method: 'employers.service_bundles.retrieve',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nservice_bundle = client.employers.service_bundles.retrieve(\n    id="id",\n    employer_id="employerId",\n)\nprint(service_bundle._id)',
      },
      java: {
        method: 'employers().serviceBundles().retrieve',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleRetrieveParams;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        ServiceBundleRetrieveParams params = ServiceBundleRetrieveParams.builder()\n            .employerId("employerId")\n            .id("id")\n            .build();\n        ServiceBundleRetrieveResponse serviceBundle = client.employers().serviceBundles().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'employers().serviceBundles().retrieve',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleRetrieveParams\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleRetrieveResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: ServiceBundleRetrieveParams = ServiceBundleRetrieveParams.builder()\n        .employerId("employerId")\n        .id("id")\n        .build()\n    val serviceBundle: ServiceBundleRetrieveResponse = client.employers().serviceBundles().retrieve(params)\n}',
      },
      go: {
        method: 'client.Employers.ServiceBundles.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tserviceBundle, err := client.Employers.ServiceBundles.Get(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\tgithubcombluehivehealthbluehivesdkgo.EmployerServiceBundleGetParams{\n\t\t\tEmployerID: "employerId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", serviceBundle.ID)\n}\n',
      },
      ruby: {
        method: 'employers.service_bundles.retrieve',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nservice_bundle = blue_hive.employers.service_bundles.retrieve("id", employer_id: "employerId")\n\nputs(service_bundle)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers/$EMPLOYER_ID/service-bundles/$ID \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.serviceBundles.update',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst serviceBundle = await client.employers.serviceBundles.update('id', {\n  employerId: 'employerId',\n  bundleName: 'x',\n  serviceIds: ['string'],\n});\n\nconsole.log(serviceBundle._id);",
      },
      python: {
        method: 'employers.service_bundles.update',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nservice_bundle = client.employers.service_bundles.update(\n    id="id",\n    employer_id="employerId",\n    bundle_name="x",\n    service_ids=["string"],\n)\nprint(service_bundle._id)',
      },
      java: {
        method: 'employers().serviceBundles().update',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleUpdateParams;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        ServiceBundleUpdateParams params = ServiceBundleUpdateParams.builder()\n            .employerId("employerId")\n            .id("id")\n            .bundleName("x")\n            .addServiceId("string")\n            .build();\n        ServiceBundleUpdateResponse serviceBundle = client.employers().serviceBundles().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'employers().serviceBundles().update',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleUpdateParams\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleUpdateResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: ServiceBundleUpdateParams = ServiceBundleUpdateParams.builder()\n        .employerId("employerId")\n        .id("id")\n        .bundleName("x")\n        .addServiceId("string")\n        .build()\n    val serviceBundle: ServiceBundleUpdateResponse = client.employers().serviceBundles().update(params)\n}',
      },
      go: {
        method: 'client.Employers.ServiceBundles.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tserviceBundle, err := client.Employers.ServiceBundles.Update(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\tgithubcombluehivehealthbluehivesdkgo.EmployerServiceBundleUpdateParams{\n\t\t\tEmployerID: "employerId",\n\t\t\tBundleName: "x",\n\t\t\tServiceIDs: []string{"string"},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", serviceBundle.ID)\n}\n',
      },
      ruby: {
        method: 'employers.service_bundles.update',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nservice_bundle = blue_hive.employers.service_bundles.update(\n  "id",\n  employer_id: "employerId",\n  bundle_name: "x",\n  service_ids: ["string"]\n)\n\nputs(service_bundle)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers/$EMPLOYER_ID/service-bundles/$ID \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "bundleName": "x",\n          "serviceIds": [\n            "string"\n          ]\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employers.serviceBundles.delete',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.employers.serviceBundles.delete('id', { employerId: 'employerId' });",
      },
      python: {
        method: 'employers.service_bundles.delete',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nclient.employers.service_bundles.delete(\n    id="id",\n    employer_id="employerId",\n)',
      },
      java: {
        method: 'employers().serviceBundles().delete',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        ServiceBundleDeleteParams params = ServiceBundleDeleteParams.builder()\n            .employerId("employerId")\n            .id("id")\n            .build();\n        client.employers().serviceBundles().delete(params);\n    }\n}',
      },
      kotlin: {
        method: 'employers().serviceBundles().delete',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employers.servicebundles.ServiceBundleDeleteParams\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: ServiceBundleDeleteParams = ServiceBundleDeleteParams.builder()\n        .employerId("employerId")\n        .id("id")\n        .build()\n    client.employers().serviceBundles().delete(params)\n}',
      },
      go: {
        method: 'client.Employers.ServiceBundles.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Employers.ServiceBundles.Delete(\n\t\tcontext.TODO(),\n\t\t"id",\n\t\tgithubcombluehivehealthbluehivesdkgo.EmployerServiceBundleDeleteParams{\n\t\t\tEmployerID: "employerId",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'employers.service_bundles.delete',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresult = blue_hive.employers.service_bundles.delete("id", employer_id: "employerId")\n\nputs(result)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employers/$EMPLOYER_ID/service-bundles/$ID \\\n    -X DELETE \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.hl7.sendResults',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.hl7.sendResults({\n  employeeId: 'employeeId',\n  file: {\n    base64: 'base64',\n    name: 'name',\n    type: 'type',\n  },\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'hl7.send_results',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.hl7.send_results(\n    employee_id="employeeId",\n    file={\n        "base64": "base64",\n        "name": "name",\n        "type": "type",\n    },\n)\nprint(response)',
      },
      java: {
        method: 'hl7().sendResults',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.hl7.Hl7SendResultsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        Hl7SendResultsParams params = Hl7SendResultsParams.builder()\n            .employeeId("employeeId")\n            .file(Hl7SendResultsParams.File.builder()\n                .base64("base64")\n                .name("name")\n                .type("type")\n                .build())\n            .build();\n        String response = client.hl7().sendResults(params);\n    }\n}',
      },
      kotlin: {
        method: 'hl7().sendResults',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.hl7.Hl7SendResultsParams\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: Hl7SendResultsParams = Hl7SendResultsParams.builder()\n        .employeeId("employeeId")\n        .file(Hl7SendResultsParams.File.builder()\n            .base64("base64")\n            .name("name")\n            .type("type")\n            .build())\n        .build()\n    val response: String = client.hl7().sendResults(params)\n}',
      },
      go: {
        method: 'client.Hl7.SendResults',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Hl7.SendResults(context.TODO(), githubcombluehivehealthbluehivesdkgo.Hl7SendResultsParams{\n\t\tEmployeeID: "employeeId",\n\t\tFile: githubcombluehivehealthbluehivesdkgo.Hl7SendResultsParamsFile{\n\t\t\tBase64: "base64",\n\t\t\tName:   "name",\n\t\t\tType:   "type",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'hl7.send_results',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.hl7.send_results(\n  employee_id: "employeeId",\n  file: {base64: "base64", name: "name", type: "type"}\n)\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/hl7/results \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "employeeId": "employeeId",\n          "file": {\n            "base64": "base64",\n            "name": "name",\n            "type": "type"\n          }\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.retrieveResults',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.orders.retrieveResults('orderId');\n\nconsole.log(response.meta);",
      },
      python: {
        method: 'orders.retrieve_results',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.orders.retrieve_results(\n    order_id="orderId",\n)\nprint(response.meta)',
      },
      java: {
        method: 'orders().retrieveResults',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderRetrieveResultsParams;\nimport com.bluehive.api.models.orders.OrderRetrieveResultsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderRetrieveResultsResponse response = client.orders().retrieveResults("orderId");\n    }\n}',
      },
      kotlin: {
        method: 'orders().retrieveResults',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderRetrieveResultsParams\nimport com.bluehive.api.models.orders.OrderRetrieveResultsResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val response: OrderRetrieveResultsResponse = client.orders().retrieveResults("orderId")\n}',
      },
      go: {
        method: 'client.Orders.GetResults',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Orders.GetResults(\n\t\tcontext.TODO(),\n\t\t"orderId",\n\t\tgithubcombluehivehealthbluehivesdkgo.OrderGetResultsParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Meta)\n}\n',
      },
      ruby: {
        method: 'orders.retrieve_results',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.orders.retrieve_results("orderId")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders/$ORDER_ID/results \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.create',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.orders.create({\n  paymentMethod: 'self-pay',\n  person: {\n    city: 'x',\n    dob: '7321-69-10',\n    email: 'email',\n    firstName: 'x',\n    lastName: 'x',\n    phone: '+)() 92))()1)',\n    state: 'xx',\n    street: 'x',\n    zipcode: '73216-0225',\n  },\n  providerId: 'providerId',\n  services: [{ _id: 'x', quantity: 1 }],\n});\n\nconsole.log(order);",
      },
      python: {
        method: 'orders.create',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\norder = client.orders.create(\n    payment_method="self-pay",\n    person={\n        "city": "x",\n        "dob": "7321-69-10",\n        "email": "email",\n        "first_name": "x",\n        "last_name": "x",\n        "phone": "+)() 92))()1)",\n        "state": "xx",\n        "street": "x",\n        "zipcode": "73216-0225",\n    },\n    provider_id="providerId",\n    services=[{\n        "_id": "x",\n        "quantity": 1,\n    }],\n)\nprint(order)',
      },
      java: {
        method: 'orders().create',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderCreateParams;\nimport com.bluehive.api.models.orders.OrderCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderCreateResponse order = client.orders().create();\n    }\n}',
      },
      kotlin: {
        method: 'orders().create',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderCreateParams\nimport com.bluehive.api.models.orders.OrderCreateResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val order: OrderCreateResponse = client.orders().create()\n}',
      },
      go: {
        method: 'client.Orders.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Orders.New(context.TODO(), githubcombluehivehealthbluehivesdkgo.OrderNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order)\n}\n',
      },
      ruby: {
        method: 'orders.create',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\norder = blue_hive.orders.create\n\nputs(order)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders \\\n    -X POST \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.retrieve',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.orders.retrieve('orderId');\n\nconsole.log(order.orderId);",
      },
      python: {
        method: 'orders.retrieve',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\norder = client.orders.retrieve(\n    "orderId",\n)\nprint(order.order_id)',
      },
      java: {
        method: 'orders().retrieve',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderRetrieveParams;\nimport com.bluehive.api.models.orders.OrderRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderRetrieveResponse order = client.orders().retrieve("orderId");\n    }\n}',
      },
      kotlin: {
        method: 'orders().retrieve',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderRetrieveParams\nimport com.bluehive.api.models.orders.OrderRetrieveResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val order: OrderRetrieveResponse = client.orders().retrieve("orderId")\n}',
      },
      go: {
        method: 'client.Orders.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Orders.Get(context.TODO(), "orderId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.OrderID)\n}\n',
      },
      ruby: {
        method: 'orders.retrieve',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\norder = blue_hive.orders.retrieve("orderId")\n\nputs(order)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders/$ORDER_ID \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.update',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst order = await client.orders.update('orderId');\n\nconsole.log(order.message);",
      },
      python: {
        method: 'orders.update',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\norder = client.orders.update(\n    order_id="orderId",\n)\nprint(order.message)',
      },
      java: {
        method: 'orders().update',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderUpdateParams;\nimport com.bluehive.api.models.orders.OrderUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderUpdateResponse order = client.orders().update("orderId");\n    }\n}',
      },
      kotlin: {
        method: 'orders().update',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderUpdateParams\nimport com.bluehive.api.models.orders.OrderUpdateResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val order: OrderUpdateResponse = client.orders().update("orderId")\n}',
      },
      go: {
        method: 'client.Orders.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Orders.Update(\n\t\tcontext.TODO(),\n\t\t"orderId",\n\t\tgithubcombluehivehealthbluehivesdkgo.OrderUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.Message)\n}\n',
      },
      ruby: {
        method: 'orders.update',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\norder = blue_hive.orders.update("orderId")\n\nputs(order)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders/$ORDER_ID \\\n    -X POST \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.updateStatus',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.orders.updateStatus('orderId', { status: 'order_sent' });\n\nconsole.log(response.message);",
      },
      python: {
        method: 'orders.update_status',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.orders.update_status(\n    order_id="orderId",\n    status="order_sent",\n)\nprint(response.message)',
      },
      java: {
        method: 'orders().updateStatus',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderUpdateStatusParams;\nimport com.bluehive.api.models.orders.OrderUpdateStatusResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderUpdateStatusParams params = OrderUpdateStatusParams.builder()\n            .orderId("orderId")\n            .status(OrderUpdateStatusParams.Status.ORDER_SENT)\n            .build();\n        OrderUpdateStatusResponse response = client.orders().updateStatus(params);\n    }\n}',
      },
      kotlin: {
        method: 'orders().updateStatus',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderUpdateStatusParams\nimport com.bluehive.api.models.orders.OrderUpdateStatusResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: OrderUpdateStatusParams = OrderUpdateStatusParams.builder()\n        .orderId("orderId")\n        .status(OrderUpdateStatusParams.Status.ORDER_SENT)\n        .build()\n    val response: OrderUpdateStatusResponse = client.orders().updateStatus(params)\n}',
      },
      go: {
        method: 'client.Orders.UpdateStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Orders.UpdateStatus(\n\t\tcontext.TODO(),\n\t\t"orderId",\n\t\tgithubcombluehivehealthbluehivesdkgo.OrderUpdateStatusParams{\n\t\t\tStatus: githubcombluehivehealthbluehivesdkgo.OrderUpdateStatusParamsStatusOrderSent,\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      ruby: {
        method: 'orders.update_status',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.orders.update_status("orderId", status: :order_sent)\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders/$ORDER_ID/status \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "status": "order_sent"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.sendForEmployee',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.orders.sendForEmployee({\n  employeeId: 'employeeId',\n  employerId: 'employerId',\n  providersIds: [{ providerId: 'providerId' }],\n  servicesIds: ['string'],\n  'login-token': 'login-token',\n  'user-id': 'user-id',\n});\n\nconsole.log(response);",
      },
      python: {
        method: 'orders.send_for_employee',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.orders.send_for_employee(\n    employee_id="employeeId",\n    employer_id="employerId",\n    providers_ids=[{\n        "provider_id": "providerId"\n    }],\n    services_ids=["string"],\n    login_token="login-token",\n    user_id="user-id",\n)\nprint(response)',
      },
      java: {
        method: 'orders().sendForEmployee',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderSendForEmployeeParams;\nimport com.bluehive.api.models.orders.OrderSendForEmployeeResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderSendForEmployeeParams params = OrderSendForEmployeeParams.builder()\n            .loginToken("login-token")\n            .userId("user-id")\n            .employeeId("employeeId")\n            .employerId("employerId")\n            .addProvidersId(OrderSendForEmployeeParams.ProvidersId.builder()\n                .providerId("providerId")\n                .build())\n            .addServicesId("string")\n            .build();\n        OrderSendForEmployeeResponse response = client.orders().sendForEmployee(params);\n    }\n}',
      },
      kotlin: {
        method: 'orders().sendForEmployee',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderSendForEmployeeParams\nimport com.bluehive.api.models.orders.OrderSendForEmployeeResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: OrderSendForEmployeeParams = OrderSendForEmployeeParams.builder()\n        .loginToken("login-token")\n        .userId("user-id")\n        .employeeId("employeeId")\n        .employerId("employerId")\n        .addProvidersId(OrderSendForEmployeeParams.ProvidersId.builder()\n            .providerId("providerId")\n            .build())\n        .addServicesId("string")\n        .build()\n    val response: OrderSendForEmployeeResponse = client.orders().sendForEmployee(params)\n}',
      },
      go: {
        method: 'client.Orders.SendForEmployee',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Orders.SendForEmployee(context.TODO(), githubcombluehivehealthbluehivesdkgo.OrderSendForEmployeeParams{\n\t\tEmployeeID: "employeeId",\n\t\tEmployerID: "employerId",\n\t\tProvidersIDs: []githubcombluehivehealthbluehivesdkgo.OrderSendForEmployeeParamsProvidersID{{\n\t\t\tProviderID: "providerId",\n\t\t}},\n\t\tServicesIDs: []string{"string"},\n\t\tLoginToken:  "login-token",\n\t\tUserID:      "user-id",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'orders.send_for_employee',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.orders.send_for_employee(\n  employee_id: "employeeId",\n  employer_id: "employerId",\n  providers_ids: [{providerId: "providerId"}],\n  services_ids: ["string"],\n  login_token: "login-token",\n  user_id: "user-id"\n)\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders/send \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "employeeId": "employeeId",\n          "employerId": "employerId",\n          "providersIds": [\n            {\n              "providerId": "providerId"\n            }\n          ],\n          "servicesIds": [\n            "string"\n          ]\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.uploadResults',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.orders.uploadResults('orderId', {\n  captchaToken: 'x',\n  orderAccessCode: 'x',\n  serviceId: 'x',\n});\n\nconsole.log(response.message);",
      },
      python: {
        method: 'orders.upload_results',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.orders.upload_results(\n    order_id="orderId",\n    captcha_token="x",\n    order_access_code="x",\n    service_id="x",\n)\nprint(response.message)',
      },
      java: {
        method: 'orders().uploadResults',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderUploadResultsParams;\nimport com.bluehive.api.models.orders.OrderUploadResultsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderUploadResultsParams params = OrderUploadResultsParams.builder()\n            .orderId("orderId")\n            .captchaToken("x")\n            .orderAccessCode("x")\n            .serviceId("x")\n            .build();\n        OrderUploadResultsResponse response = client.orders().uploadResults(params);\n    }\n}',
      },
      kotlin: {
        method: 'orders().uploadResults',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderUploadResultsParams\nimport com.bluehive.api.models.orders.OrderUploadResultsResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: OrderUploadResultsParams = OrderUploadResultsParams.builder()\n        .orderId("orderId")\n        .captchaToken("x")\n        .orderAccessCode("x")\n        .serviceId("x")\n        .build()\n    val response: OrderUploadResultsResponse = client.orders().uploadResults(params)\n}',
      },
      go: {
        method: 'client.Orders.UploadResults',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Orders.UploadResults(\n\t\tcontext.TODO(),\n\t\t"orderId",\n\t\tgithubcombluehivehealthbluehivesdkgo.OrderUploadResultsParams{\n\t\t\tCaptchaToken:    "x",\n\t\t\tOrderAccessCode: "x",\n\t\t\tServiceID:       "x",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      ruby: {
        method: 'orders.upload_results',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.orders.upload_results("orderId", captcha_token: "x", order_access_code: "x", service_id: "x")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders/$ORDER_ID/upload-results \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "captchaToken": "x",\n          "orderAccessCode": "x",\n          "serviceId": "x"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.orders.scheduleAppointment',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.orders.scheduleAppointment('orderId', {\n  appointment: {\n    date: 'date',\n    dateTime: '2019-12-27T18:11:19.117Z',\n    time: 'time',\n  },\n  orderAccessCode: 'orderAccessCode',\n});\n\nconsole.log(response.message);",
      },
      python: {
        method: 'orders.schedule_appointment',
        example:
          'import os\nfrom datetime import datetime\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.orders.schedule_appointment(\n    order_id="orderId",\n    appointment={\n        "date": "date",\n        "date_time": datetime.fromisoformat("2019-12-27T18:11:19.117"),\n        "time": "time",\n    },\n    order_access_code="orderAccessCode",\n)\nprint(response.message)',
      },
      java: {
        method: 'orders().scheduleAppointment',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.orders.OrderScheduleAppointmentParams;\nimport com.bluehive.api.models.orders.OrderScheduleAppointmentResponse;\nimport java.time.OffsetDateTime;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        OrderScheduleAppointmentParams params = OrderScheduleAppointmentParams.builder()\n            .orderId("orderId")\n            .appointment(OrderScheduleAppointmentParams.Appointment.UnionMember0.builder()\n                .date("date")\n                .dateTime(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n                .time("time")\n                .build())\n            .orderAccessCode("orderAccessCode")\n            .build();\n        OrderScheduleAppointmentResponse response = client.orders().scheduleAppointment(params);\n    }\n}',
      },
      kotlin: {
        method: 'orders().scheduleAppointment',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.orders.OrderScheduleAppointmentParams\nimport com.bluehive.api.models.orders.OrderScheduleAppointmentResponse\nimport java.time.OffsetDateTime\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: OrderScheduleAppointmentParams = OrderScheduleAppointmentParams.builder()\n        .orderId("orderId")\n        .appointment(OrderScheduleAppointmentParams.Appointment.UnionMember0.builder()\n            .date("date")\n            .dateTime(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n            .time("time")\n            .build())\n        .orderAccessCode("orderAccessCode")\n        .build()\n    val response: OrderScheduleAppointmentResponse = client.orders().scheduleAppointment(params)\n}',
      },
      go: {
        method: 'client.Orders.ScheduleAppointment',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Orders.ScheduleAppointment(\n\t\tcontext.TODO(),\n\t\t"orderId",\n\t\tgithubcombluehivehealthbluehivesdkgo.OrderScheduleAppointmentParams{\n\t\t\tAppointment: githubcombluehivehealthbluehivesdkgo.OrderScheduleAppointmentParamsAppointmentUnion{\n\t\t\t\tOfOrderScheduleAppointmentsAppointmentObject: &githubcombluehivehealthbluehivesdkgo.OrderScheduleAppointmentParamsAppointmentObject{\n\t\t\t\t\tDate:     "date",\n\t\t\t\t\tDateTime: time.Now(),\n\t\t\t\t\tTime:     "time",\n\t\t\t\t},\n\t\t\t},\n\t\t\tOrderAccessCode: "orderAccessCode",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      ruby: {
        method: 'orders.schedule_appointment',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.orders.schedule_appointment(\n  "orderId",\n  appointment: {date: "date", dateTime: "2019-12-27T18:11:19.117Z", time: "time"},\n  order_access_code: "orderAccessCode"\n)\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/orders/$ORDER_ID/schedule-appointment \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "appointment": {\n            "date": "date",\n            "dateTime": "2019-12-27T18:11:19.117Z",\n            "time": "time"\n          },\n          "orderAccessCode": "orderAccessCode"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employees.create',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employee = await client.employees.create({\n  email: 'dev@stainless.com',\n  firstName: 'x',\n  lastName: 'x',\n});\n\nconsole.log(employee.employeeId);",
      },
      python: {
        method: 'employees.create',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployee = client.employees.create(\n    email="dev@stainless.com",\n    first_name="x",\n    last_name="x",\n)\nprint(employee.employee_id)',
      },
      java: {
        method: 'employees().create',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employees.EmployeeCreateParams;\nimport com.bluehive.api.models.employees.EmployeeCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployeeCreateParams params = EmployeeCreateParams.builder()\n            .email("dev@stainless.com")\n            .firstName("x")\n            .lastName("x")\n            .build();\n        EmployeeCreateResponse employee = client.employees().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'employees().create',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employees.EmployeeCreateParams\nimport com.bluehive.api.models.employees.EmployeeCreateResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: EmployeeCreateParams = EmployeeCreateParams.builder()\n        .email("dev@stainless.com")\n        .firstName("x")\n        .lastName("x")\n        .build()\n    val employee: EmployeeCreateResponse = client.employees().create(params)\n}',
      },
      go: {
        method: 'client.Employees.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployee, err := client.Employees.New(context.TODO(), githubcombluehivehealthbluehivesdkgo.EmployeeNewParams{\n\t\tEmail:     "dev@stainless.com",\n\t\tFirstName: "x",\n\t\tLastName:  "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employee.EmployeeID)\n}\n',
      },
      ruby: {
        method: 'employees.create',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployee = blue_hive.employees.create(email: "dev@stainless.com", first_name: "x", last_name: "x")\n\nputs(employee)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employees \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "email": "dev@stainless.com",\n          "firstName": "x",\n          "lastName": "x"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employees.update',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employee = await client.employees.update({ _id: 'x' });\n\nconsole.log(employee.message);",
      },
      python: {
        method: 'employees.update',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployee = client.employees.update(\n    _id="x",\n)\nprint(employee.message)',
      },
      java: {
        method: 'employees().update',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employees.EmployeeUpdateParams;\nimport com.bluehive.api.models.employees.EmployeeUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployeeUpdateParams params = EmployeeUpdateParams.builder()\n            ._id("x")\n            .build();\n        EmployeeUpdateResponse employee = client.employees().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'employees().update',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employees.EmployeeUpdateParams\nimport com.bluehive.api.models.employees.EmployeeUpdateResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: EmployeeUpdateParams = EmployeeUpdateParams.builder()\n        ._id("x")\n        .build()\n    val employee: EmployeeUpdateResponse = client.employees().update(params)\n}',
      },
      go: {
        method: 'client.Employees.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployee, err := client.Employees.Update(context.TODO(), githubcombluehivehealthbluehivesdkgo.EmployeeUpdateParams{\n\t\tID: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employee.Message)\n}\n',
      },
      ruby: {
        method: 'employees.update',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployee = blue_hive.employees.update(_id: "x")\n\nputs(employee)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employees \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "_id": "x"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employees.list',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employees = await client.employees.list({ employerId: 'employerId' });\n\nconsole.log(employees.employees);",
      },
      python: {
        method: 'employees.list',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployees = client.employees.list(\n    employer_id="employerId",\n)\nprint(employees.employees)',
      },
      java: {
        method: 'employees().list',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employees.EmployeeListParams;\nimport com.bluehive.api.models.employees.EmployeeListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployeeListParams params = EmployeeListParams.builder()\n            .employerId("employerId")\n            .build();\n        EmployeeListResponse employees = client.employees().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'employees().list',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employees.EmployeeListParams\nimport com.bluehive.api.models.employees.EmployeeListResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: EmployeeListParams = EmployeeListParams.builder()\n        .employerId("employerId")\n        .build()\n    val employees: EmployeeListResponse = client.employees().list(params)\n}',
      },
      go: {
        method: 'client.Employees.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployees, err := client.Employees.List(context.TODO(), githubcombluehivehealthbluehivesdkgo.EmployeeListParams{\n\t\tEmployerID: "employerId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employees.Employees)\n}\n',
      },
      ruby: {
        method: 'employees.list',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployees = blue_hive.employees.list(employer_id: "employerId")\n\nputs(employees)',
      },
      http: {
        example: 'curl https://api.bluehive.com/v1/employees \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employees.retrieve',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employee = await client.employees.retrieve('employeeId');\n\nconsole.log(employee.employee);",
      },
      python: {
        method: 'employees.retrieve',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployee = client.employees.retrieve(\n    "employeeId",\n)\nprint(employee.employee)',
      },
      java: {
        method: 'employees().retrieve',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employees.EmployeeRetrieveParams;\nimport com.bluehive.api.models.employees.EmployeeRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployeeRetrieveResponse employee = client.employees().retrieve("employeeId");\n    }\n}',
      },
      kotlin: {
        method: 'employees().retrieve',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employees.EmployeeRetrieveParams\nimport com.bluehive.api.models.employees.EmployeeRetrieveResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val employee: EmployeeRetrieveResponse = client.employees().retrieve("employeeId")\n}',
      },
      go: {
        method: 'client.Employees.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployee, err := client.Employees.Get(context.TODO(), "employeeId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employee.Employee)\n}\n',
      },
      ruby: {
        method: 'employees.retrieve',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployee = blue_hive.employees.retrieve("employeeId")\n\nputs(employee)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employees/$EMPLOYEE_ID \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employees.delete',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst employee = await client.employees.delete('employeeId');\n\nconsole.log(employee.message);",
      },
      python: {
        method: 'employees.delete',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nemployee = client.employees.delete(\n    "employeeId",\n)\nprint(employee.message)',
      },
      java: {
        method: 'employees().delete',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employees.EmployeeDeleteParams;\nimport com.bluehive.api.models.employees.EmployeeDeleteResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployeeDeleteResponse employee = client.employees().delete("employeeId");\n    }\n}',
      },
      kotlin: {
        method: 'employees().delete',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employees.EmployeeDeleteParams\nimport com.bluehive.api.models.employees.EmployeeDeleteResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val employee: EmployeeDeleteResponse = client.employees().delete("employeeId")\n}',
      },
      go: {
        method: 'client.Employees.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\temployee, err := client.Employees.Delete(context.TODO(), "employeeId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", employee.Message)\n}\n',
      },
      ruby: {
        method: 'employees.delete',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nemployee = blue_hive.employees.delete("employeeId")\n\nputs(employee)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employees/$EMPLOYEE_ID \\\n    -X DELETE \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employees.linkUser',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.employees.linkUser({ employeeId: 'x', userId: 'x' });\n\nconsole.log(response.linkId);",
      },
      python: {
        method: 'employees.link_user',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.employees.link_user(\n    employee_id="x",\n    user_id="x",\n)\nprint(response.link_id)',
      },
      java: {
        method: 'employees().linkUser',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employees.EmployeeLinkUserParams;\nimport com.bluehive.api.models.employees.EmployeeLinkUserResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployeeLinkUserParams params = EmployeeLinkUserParams.builder()\n            .employeeId("x")\n            .userId("x")\n            .build();\n        EmployeeLinkUserResponse response = client.employees().linkUser(params);\n    }\n}',
      },
      kotlin: {
        method: 'employees().linkUser',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employees.EmployeeLinkUserParams\nimport com.bluehive.api.models.employees.EmployeeLinkUserResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: EmployeeLinkUserParams = EmployeeLinkUserParams.builder()\n        .employeeId("x")\n        .userId("x")\n        .build()\n    val response: EmployeeLinkUserResponse = client.employees().linkUser(params)\n}',
      },
      go: {
        method: 'client.Employees.LinkUser',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Employees.LinkUser(context.TODO(), githubcombluehivehealthbluehivesdkgo.EmployeeLinkUserParams{\n\t\tEmployeeID: "x",\n\t\tUserID:     "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.LinkID)\n}\n',
      },
      ruby: {
        method: 'employees.link_user',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.employees.link_user(employee_id: "x", user_id: "x")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employees/link-user \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: $BLUEHIVE_API_KEY" \\\n    -d \'{\n          "employeeId": "x",\n          "userId": "x"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.employees.unlinkUser',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.employees.unlinkUser({ employeeId: 'employeeId', userId: 'userId' });\n\nconsole.log(response.message);",
      },
      python: {
        method: 'employees.unlink_user',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.employees.unlink_user(\n    employee_id="employeeId",\n    user_id="userId",\n)\nprint(response.message)',
      },
      java: {
        method: 'employees().unlinkUser',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.employees.EmployeeUnlinkUserParams;\nimport com.bluehive.api.models.employees.EmployeeUnlinkUserResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        EmployeeUnlinkUserParams params = EmployeeUnlinkUserParams.builder()\n            .employeeId("employeeId")\n            .userId("userId")\n            .build();\n        EmployeeUnlinkUserResponse response = client.employees().unlinkUser(params);\n    }\n}',
      },
      kotlin: {
        method: 'employees().unlinkUser',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.employees.EmployeeUnlinkUserParams\nimport com.bluehive.api.models.employees.EmployeeUnlinkUserResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: EmployeeUnlinkUserParams = EmployeeUnlinkUserParams.builder()\n        .employeeId("employeeId")\n        .userId("userId")\n        .build()\n    val response: EmployeeUnlinkUserResponse = client.employees().unlinkUser(params)\n}',
      },
      go: {
        method: 'client.Employees.UnlinkUser',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Employees.UnlinkUser(context.TODO(), githubcombluehivehealthbluehivesdkgo.EmployeeUnlinkUserParams{\n\t\tEmployeeID: "employeeId",\n\t\tUserID:     "userId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      ruby: {
        method: 'employees.unlink_user',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.employees.unlink_user(employee_id: "employeeId", user_id: "userId")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/employees/unlink-user \\\n    -X DELETE \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.integrations.list',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst integrations = await client.integrations.list({ 'x-brand-id': 'x' });\n\nconsole.log(integrations.integrations);",
      },
      python: {
        method: 'integrations.list',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nintegrations = client.integrations.list(\n    x_brand_id="x",\n)\nprint(integrations.integrations)',
      },
      java: {
        method: 'integrations().list',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.integrations.IntegrationListParams;\nimport com.bluehive.api.models.integrations.IntegrationListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        IntegrationListParams params = IntegrationListParams.builder()\n            .xBrandId("x")\n            .build();\n        IntegrationListResponse integrations = client.integrations().list(params);\n    }\n}',
      },
      kotlin: {
        method: 'integrations().list',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.integrations.IntegrationListParams\nimport com.bluehive.api.models.integrations.IntegrationListResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: IntegrationListParams = IntegrationListParams.builder()\n        .xBrandId("x")\n        .build()\n    val integrations: IntegrationListResponse = client.integrations().list(params)\n}',
      },
      go: {
        method: 'client.Integrations.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tintegrations, err := client.Integrations.List(context.TODO(), githubcombluehivehealthbluehivesdkgo.IntegrationListParams{\n\t\tXBrandID: "x",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", integrations.Integrations)\n}\n',
      },
      ruby: {
        method: 'integrations.list',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nintegrations = blue_hive.integrations.list(x_brand_id: "x")\n\nputs(integrations)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/integrations \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.integrations.checkActive',
        example:
          "import BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  apiKey: process.env['BLUEHIVE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.integrations.checkActive('name', { 'x-brand-id': 'x' });\n\nconsole.log(response.active);",
      },
      python: {
        method: 'integrations.check_active',
        example:
          'import os\nfrom bluehive import BlueHive\n\nclient = BlueHive(\n    api_key=os.environ.get("BLUEHIVE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.integrations.check_active(\n    name="name",\n    x_brand_id="x",\n)\nprint(response.active)',
      },
      java: {
        method: 'integrations().checkActive',
        example:
          'package com.bluehive.api.example;\n\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.integrations.IntegrationCheckActiveParams;\nimport com.bluehive.api.models.integrations.IntegrationCheckActiveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\n        IntegrationCheckActiveParams params = IntegrationCheckActiveParams.builder()\n            .name("name")\n            .xBrandId("x")\n            .build();\n        IntegrationCheckActiveResponse response = client.integrations().checkActive(params);\n    }\n}',
      },
      kotlin: {
        method: 'integrations().checkActive',
        example:
          'package com.bluehive.api.example\n\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.integrations.IntegrationCheckActiveParams\nimport com.bluehive.api.models.integrations.IntegrationCheckActiveResponse\n\nfun main() {\n    val client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\n    val params: IntegrationCheckActiveParams = IntegrationCheckActiveParams.builder()\n        .name("name")\n        .xBrandId("x")\n        .build()\n    val response: IntegrationCheckActiveResponse = client.integrations().checkActive(params)\n}',
      },
      go: {
        method: 'client.Integrations.CheckActive',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Integrations.CheckActive(\n\t\tcontext.TODO(),\n\t\t"name",\n\t\tgithubcombluehivehealthbluehivesdkgo.IntegrationCheckActiveParams{\n\t\t\tXBrandID: "x",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Active)\n}\n',
      },
      ruby: {
        method: 'integrations.check_active',
        example:
          'require "blue_hive"\n\nblue_hive = BlueHive::Client.new(api_key: "My API Key")\n\nresponse = blue_hive.integrations.check_active("name", x_brand_id: "x")\n\nputs(response)',
      },
      http: {
        example:
          'curl https://api.bluehive.com/v1/integrations/$NAME \\\n    -H "Authorization: $BLUEHIVE_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'go',
    content:
      '# BlueHive Go API Library\n\n<a href="https://pkg.go.dev/github.com/bluehive-health/bluehive-sdk-go"><img src="https://pkg.go.dev/badge/github.com/bluehive-health/bluehive-sdk-go.svg" alt="Go Reference"></a>\n\nThe BlueHive Go library provides convenient access to the [BlueHive REST API](https://docs.bluehive.com/)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the BlueHive MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40bluehive%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBibHVlaGl2ZS9zZGstbWNwIl0sImVudiI6eyJCTFVFSElWRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40bluehive%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40bluehive%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22BLUEHIVE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/bluehive-health/bluehive-sdk-go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/bluehive-health/bluehive-sdk-go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/bluehive-health/bluehive-sdk-go"\n\t"github.com/bluehive-health/bluehive-sdk-go/option"\n)\n\nfunc main() {\n\tclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("BLUEHIVE_API_KEY")\n\t)\n\tresponse, err := client.Health.Check(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Status)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Health.Check(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/bluehive-health/bluehive-sdk-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Health.Check(context.TODO())\nif err != nil {\n\tvar apierr *githubcombluehivehealthbluehivesdkgo.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/v1/health": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Health.Check(\n\tctx,\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := githubcombluehivehealthbluehivesdkgo.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Health.Check(context.TODO(), option.WithMaxRetries(5))\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nresponse, err := client.Health.Check(context.TODO(), option.WithResponseInto(&response))\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", response)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/bluehive-health/bluehive-sdk-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# BlueHive Java API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.bluehive.api/blue-hive-java)](https://central.sonatype.com/artifact/com.bluehive.api/blue-hive-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.bluehive.api/blue-hive-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.bluehive.api/blue-hive-java/0.0.1)\n<!-- x-release-please-end -->\n\nThe BlueHive Java SDK provides convenient access to the [BlueHive REST API](https://docs.bluehive.com/)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the BlueHive MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40bluehive%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBibHVlaGl2ZS9zZGstbWNwIl0sImVudiI6eyJCTFVFSElWRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40bluehive%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40bluehive%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22BLUEHIVE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [docs.bluehive.com](https://docs.bluehive.com/). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.bluehive.api/blue-hive-java/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.bluehive.api:blue-hive-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.bluehive.api</groupId>\n  <artifactId>blue-hive-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.health.HealthCheckParams;\nimport com.bluehive.api.models.health.HealthCheckResponse;\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nBlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\nHealthCheckResponse response = client.health().check();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nBlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    // Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n    // Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property    | Environment variable | Required | Default value                |\n| --------- | ------------------ | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `bluehive.apiKey`  | `BLUEHIVE_API_KEY`   | true     | -                            |\n| `baseUrl` | `bluehive.baseUrl` | `BLUE_HIVE_BASE_URL` | true     | `"https://api.bluehive.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\n\nBlueHiveClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the BlueHive API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.health().check(...)` should be called with an instance of `HealthCheckParams`, and it     will return an instance of `HealthCheckResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport com.bluehive.api.models.health.HealthCheckParams;\nimport com.bluehive.api.models.health.HealthCheckResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nBlueHiveClient client = BlueHiveOkHttpClient.fromEnv();\n\nCompletableFuture<HealthCheckResponse> response = client.async().health().check();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.bluehive.api.client.BlueHiveClientAsync;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClientAsync;\nimport com.bluehive.api.models.health.HealthCheckParams;\nimport com.bluehive.api.models.health.HealthCheckResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nBlueHiveClientAsync client = BlueHiveOkHttpClientAsync.fromEnv();\n\nCompletableFuture<HealthCheckResponse> response = client.health().check();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.bluehive.api.core.http.Headers;\nimport com.bluehive.api.core.http.HttpResponseFor;\nimport com.bluehive.api.models.health.HealthCheckParams;\nimport com.bluehive.api.models.health.HealthCheckResponse;\n\nHttpResponseFor<HealthCheckResponse> response = client.health().withRawResponse().check();\n\nint statusCode = response.statusCode();\nHeaders headers = response.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.bluehive.api.models.health.HealthCheckResponse;\n\nHealthCheckResponse parsedResponse = response.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`BlueHiveServiceException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`BlueHiveIoException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveIoException.kt): I/O networking errors.\n\n- [`BlueHiveRetryableException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`BlueHiveInvalidDataException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`BlueHiveException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `BLUE_HIVE_LOG` environment variable to   `info`:\n\n```sh\nexport BLUE_HIVE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport BLUE_HIVE_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `blue-hive-java-core` is published with a     [configuration file](blue-hive-java-core/src/main/resources/META-INF/proguard/blue-hive-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`BlueHiveOkHttpClient`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) or     [`BlueHiveOkHttpClientAsync`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.bluehive.api.models.health.HealthCheckResponse;\n\nHealthCheckResponse response = client.health().check(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport java.time.Duration;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\nimport java.time.Duration;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `blue-hive-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BlueHiveClient`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClient.kt), [`BlueHiveClientAsync`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsync.kt),             [`BlueHiveClientImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt), and [`BlueHiveClientAsyncImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `blue-hive-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BlueHiveOkHttpClient`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) and [`BlueHiveOkHttpClientAsync`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt), which             provide a way to construct [`BlueHiveClientImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt) and             [`BlueHiveClientAsyncImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), respectively, using OkHttp\n- `blue-hive-java`\n  - Depends on and exposes the APIs of both `blue-hive-java-core` and `blue-hive-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`blue-hive-java` dependency](#installation) with `blue-hive-java-core`\n2. Copy `blue-hive-java-client-okhttp`\'s [`OkHttpClient`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`BlueHiveClientImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt) or [`BlueHiveClientAsyncImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), similarly to        [`BlueHiveOkHttpClient`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) or [`BlueHiveOkHttpClientAsync`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`blue-hive-java` dependency](#installation) with `blue-hive-java-core`\n2. Write a class that implements the [`HttpClient`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/core/http/HttpClient.kt) interface\n3. Construct [`BlueHiveClientImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt) or [`BlueHiveClientAsyncImpl`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), similarly to        [`BlueHiveOkHttpClient`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) or [`BlueHiveOkHttpClientAsync`](blue-hive-java-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.bluehive.api.core.JsonValue;\nimport com.bluehive.api.models.health.HealthCheckParams;\n\nHealthCheckParams params = HealthCheckParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport com.bluehive.api.core.JsonValue;\nimport com.bluehive.api.models.fax.FaxSendParams;\n\nFaxSendParams params = FaxSendParams.builder()\n    .document(FaxSendParams.Document.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/core/Values.kt) object to its setter:\n\n```java\nimport com.bluehive.api.models.health.HealthCheckParams;\n\nHealthCheckParams params = HealthCheckParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.bluehive.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/core/Values.kt):\n\n```java\nimport com.bluehive.api.core.JsonMissing;\nimport com.bluehive.api.models.fax.FaxRetrieveStatusParams;\nimport com.bluehive.api.models.health.HealthCheckParams;\n\nHealthCheckParams params = FaxRetrieveStatusParams.builder()\n    .id(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.bluehive.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.health().check(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.bluehive.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.health().check(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`BlueHiveInvalidDataException`](blue-hive-java-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.bluehive.api.models.health.HealthCheckResponse;\n\nHealthCheckResponse response = client.health().check(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.bluehive.api.models.health.HealthCheckResponse;\n\nHealthCheckResponse response = client.health().check(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.bluehive.api.client.BlueHiveClient;\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient;\n\nBlueHiveClient client = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/bluehive-health/bluehive-sdk-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# BlueHive Kotlin API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.bluehive.api/blue-hive-kotlin)](https://central.sonatype.com/artifact/com.bluehive.api/blue-hive-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.bluehive.api/blue-hive-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.bluehive.api/blue-hive-kotlin/0.0.1)\n<!-- x-release-please-end -->\n\nThe BlueHive Kotlin SDK provides convenient access to the [BlueHive REST API](https://docs.bluehive.com/)   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the BlueHive MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40bluehive%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBibHVlaGl2ZS9zZGstbWNwIl0sImVudiI6eyJCTFVFSElWRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40bluehive%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40bluehive%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22BLUEHIVE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [docs.bluehive.com](https://docs.bluehive.com/). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.bluehive.api/blue-hive-kotlin/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.bluehive.api:blue-hive-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.bluehive.api</groupId>\n  <artifactId>blue-hive-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.health.HealthCheckParams\nimport com.bluehive.api.models.health.HealthCheckResponse\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nval client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\nval response: HealthCheckResponse = client.health().check()\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nval client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    // Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n    // Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter    | System property    | Environment variable | Required | Default value                |\n| --------- | ------------------ | -------------------- | -------- | ---------------------------- |\n| `apiKey`  | `bluehive.apiKey`  | `BLUEHIVE_API_KEY`   | true     | -                            |\n| `baseUrl` | `bluehive.baseUrl` | `BLUE_HIVE_BASE_URL` | true     | `"https://api.bluehive.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\n\nval clientWithOptions: BlueHiveClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the BlueHive API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.health().check(...)` should be called with an instance of `HealthCheckParams`, and it     will return an instance of `HealthCheckResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport com.bluehive.api.models.health.HealthCheckParams\nimport com.bluehive.api.models.health.HealthCheckResponse\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nval client: BlueHiveClient = BlueHiveOkHttpClient.fromEnv()\n\nval response: HealthCheckResponse = client.async().health().check()\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClientAsync\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClientAsync\nimport com.bluehive.api.models.health.HealthCheckParams\nimport com.bluehive.api.models.health.HealthCheckResponse\n\n// Configures using the `bluehive.apiKey` and `bluehive.baseUrl` system properties\n// Or configures using the `BLUEHIVE_API_KEY` and `BLUE_HIVE_BASE_URL` environment variables\nval client: BlueHiveClientAsync = BlueHiveOkHttpClientAsync.fromEnv()\n\nval response: HealthCheckResponse = client.health().check()\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n\n\n\n\n\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.bluehive.api.core.http.Headers\nimport com.bluehive.api.core.http.HttpResponseFor\nimport com.bluehive.api.models.health.HealthCheckParams\nimport com.bluehive.api.models.health.HealthCheckResponse\n\nval response: HttpResponseFor<HealthCheckResponse> = client.health().withRawResponse().check()\n\nval statusCode: Int = response.statusCode()\nval headers: Headers = response.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.bluehive.api.models.health.HealthCheckResponse\n\nval parsedResponse: HealthCheckResponse = response.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`BlueHiveServiceException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`BlueHiveIoException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveIoException.kt): I/O networking errors.\n\n- [`BlueHiveRetryableException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`BlueHiveInvalidDataException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`BlueHiveException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nThe SDK uses the standard   [OkHttp logging interceptor](https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor).\n\nEnable logging by setting the `BLUE_HIVE_LOG` environment variable to   `info`:\n\n```sh\nexport BLUE_HIVE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport BLUE_HIVE_LOG=debug\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `blue-hive-kotlin-core` is published with a     [configuration file](blue-hive-kotlin-core/src/main/resources/META-INF/proguard/blue-hive-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`BlueHiveOkHttpClient`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) or     [`BlueHiveOkHttpClientAsync`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.bluehive.api.models.health.HealthCheckResponse\n\nval response: HealthCheckResponse = client.health().check(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport java.time.Duration\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\nimport java.time.Duration\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `blue-hive-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BlueHiveClient`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClient.kt), [`BlueHiveClientAsync`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsync.kt),             [`BlueHiveClientImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt), and [`BlueHiveClientAsyncImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `blue-hive-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BlueHiveOkHttpClient`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) and [`BlueHiveOkHttpClientAsync`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt), which             provide a way to construct [`BlueHiveClientImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt) and             [`BlueHiveClientAsyncImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), respectively, using OkHttp\n- `blue-hive-kotlin`\n  - Depends on and exposes the APIs of both `blue-hive-kotlin-core` and `blue-hive-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`blue-hive-kotlin` dependency](#installation) with `blue-hive-kotlin-core`\n2. Copy `blue-hive-kotlin-client-okhttp`\'s [`OkHttpClient`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`BlueHiveClientImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt) or [`BlueHiveClientAsyncImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), similarly to        [`BlueHiveOkHttpClient`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) or [`BlueHiveOkHttpClientAsync`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`blue-hive-kotlin` dependency](#installation) with `blue-hive-kotlin-core`\n2. Write a class that implements the [`HttpClient`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/core/http/HttpClient.kt) interface\n3. Construct [`BlueHiveClientImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientImpl.kt) or [`BlueHiveClientAsyncImpl`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/client/BlueHiveClientAsyncImpl.kt), similarly to        [`BlueHiveOkHttpClient`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClient.kt) or [`BlueHiveOkHttpClientAsync`](blue-hive-kotlin-client-okhttp/src/main/kotlin/com/bluehive/api/client/okhttp/BlueHiveOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.bluehive.api.core.JsonValue\nimport com.bluehive.api.models.health.HealthCheckParams\n\nval params: HealthCheckParams = HealthCheckParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```kotlin\nimport com.bluehive.api.core.JsonValue\nimport com.bluehive.api.models.fax.FaxSendParams\n\nval params: FaxSendParams = FaxSendParams.builder()\n    .document(FaxSendParams.Document.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build()\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.bluehive.api.models.health.HealthCheckParams\n\nval params: HealthCheckParams = HealthCheckParams.builder().build()\n```\n\nThe most straightforward way to create a [`JsonValue`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.bluehive.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/core/Values.kt):\n\n```kotlin\nimport com.bluehive.api.core.JsonMissing\nimport com.bluehive.api.models.fax.FaxRetrieveStatusParams\nimport com.bluehive.api.models.health.HealthCheckParams\n\nval params: HealthCheckParams = FaxRetrieveStatusParams.builder()\n    .id(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.bluehive.api.core.JsonBoolean\nimport com.bluehive.api.core.JsonNull\nimport com.bluehive.api.core.JsonNumber\nimport com.bluehive.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.health().check(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.bluehive.api.core.JsonField\n\nval field: JsonField<Any> = client.health().check(params)._field()\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = field.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = field.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`BlueHiveInvalidDataException`](blue-hive-kotlin-core/src/main/kotlin/com/bluehive/api/errors/BlueHiveInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.bluehive.api.models.health.HealthCheckResponse\n\nval response: HealthCheckResponse = client.health().check(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.bluehive.api.models.health.HealthCheckResponse\n\nval response: HealthCheckResponse = client.health().check(RequestOptions.builder().responseValidation(true).build())\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.bluehive.api.client.BlueHiveClient\nimport com.bluehive.api.client.okhttp.BlueHiveOkHttpClient\n\nval client: BlueHiveClient = BlueHiveOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/bluehive-health/bluehive-sdk-kotlin/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'python',
    content:
      '# BlueHive Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/bluehive.svg?label=pypi%20(stable))](https://pypi.org/project/bluehive/)\n\nThe BlueHive Python library provides convenient access to the BlueHive REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the BlueHive MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40bluehive%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBibHVlaGl2ZS9zZGstbWNwIl0sImVudiI6eyJCTFVFSElWRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40bluehive%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40bluehive%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22BLUEHIVE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [docs.bluehive.com](https://docs.bluehive.com/). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install bluehive\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nfrom bluehive import BlueHive\n\nclient = BlueHive()\n\nresponse = client.health.check()\nprint(response.status)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `BLUEHIVE_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncBlueHive` instead of `BlueHive` and use `await` with each API call:\n\n```python\nimport asyncio\nfrom bluehive import AsyncBlueHive\n\nclient = AsyncBlueHive()\n\nasync def main() -> None:\n  response = await client.health.check()\n  print(response.status)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install bluehive[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport asyncio\nfrom bluehive import DefaultAioHttpClient\nfrom bluehive import AsyncBlueHive\n\nasync def main() -> None:\n  async with AsyncBlueHive(\n    http_client=DefaultAioHttpClient(),\n) as client:\n    response = await client.health.check()\n    print(response.status)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom bluehive import BlueHive\n\nclient = BlueHive()\n\nresponse = client.fax.send(\n    document={\n        "content": "content",\n        "content_type": "application/pdf",\n    },\n    to="to",\n)\nprint(response.document)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `bluehive.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `bluehive.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `bluehive.APIError`.\n\n```python\nimport bluehive\nfrom bluehive import BlueHive\n\nclient = BlueHive()\n\ntry:\n    client.health.check()\nexcept bluehive.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept bluehive.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept bluehive.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom bluehive import BlueHive\n\n# Configure the default for all requests:\nclient = BlueHive(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).health.check()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom bluehive import BlueHive\n\n# Configure the default for all requests:\nclient = BlueHive(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = BlueHive(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).health.check()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `BLUE_HIVE_LOG` to `info`.\n\n```shell\n$ export BLUE_HIVE_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom bluehive import BlueHive\n\nclient = BlueHive()\nresponse = client.health.with_raw_response.check()\nprint(response.headers.get(\'X-My-Header\'))\n\nhealth = response.parse()  # get the object that `health.check()` would have returned\nprint(health.status)\n```\n\nThese methods return an [`APIResponse`](https://github.com/bluehive-health/bluehive-sdk-python/tree/main/src/bluehive/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/bluehive-health/bluehive-sdk-python/tree/main/src/bluehive/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.health.with_streaming_response.check() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom bluehive import BlueHive, DefaultHttpxClient\n\nclient = BlueHive(\n    # Or use the `BLUE_HIVE_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom bluehive import BlueHive\n\nwith BlueHive() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/bluehive-health/bluehive-sdk-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport bluehive\nprint(bluehive.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# BlueHive Ruby API library\n\nThe BlueHive Ruby library provides convenient access to the BlueHive REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/bluehive-health/bluehive-sdk-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the BlueHive MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40bluehive%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBibHVlaGl2ZS9zZGstbWNwIl0sImVudiI6eyJCTFVFSElWRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40bluehive%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40bluehive%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22BLUEHIVE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/bluehive).\n\nThe REST API documentation can be found on [docs.bluehive.com](https://docs.bluehive.com/).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "bluehive", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "blue_hive"\n\nblue_hive = BlueHive::Client.new(\n  api_key: ENV["BLUEHIVE_API_KEY"] # This is the default and can be omitted\n)\n\nresponse = blue_hive.health.check\n\nputs(response.status)\n```\n\n\n\n\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `BlueHive::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  health = blue_hive.health.check\nrescue BlueHive::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue BlueHive::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue BlueHive::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nblue_hive = BlueHive::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nblue_hive.health.check(request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nblue_hive = BlueHive::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nblue_hive.health.check(request_options: {timeout: 5})\n```\n\nOn timeout, `BlueHive::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `BlueHive::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\nresponse =\n  blue_hive.health.check(\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(response[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `BlueHive::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `BlueHive::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nblue_hive.health.check \n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nblue_hive.health.check\n\n# You can also splat a full Params class:\nparams = BlueHive::HealthCheckParams.new\nblue_hive.health.check(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :order_sent\nputs(BlueHive::OrderUpdateParams::Status::ORDER_SENT)\n\n# Revealed type: `T.all(BlueHive::OrderUpdateParams::Status, Symbol)`\nT.reveal_type(BlueHive::OrderUpdateParams::Status::ORDER_SENT)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nblue_hive.orders.update(\n  status: BlueHive::OrderUpdateParams::Status::ORDER_SENT,\n  # …\n)\n\n# Literal values are also permissible:\nblue_hive.orders.update(\n  status: :order_sent,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/bluehive-health/bluehive-sdk-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# BlueHive TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@bluehive/sdk.svg?label=npm%20(stable))](https://npmjs.org/package/@bluehive/sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@bluehive/sdk)\n\nThis library provides convenient access to the BlueHive REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.bluehive.com](https://docs.bluehive.com/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the BlueHive MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40bluehive%2Fsdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBibHVlaGl2ZS9zZGstbWNwIl0sImVudiI6eyJCTFVFSElWRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40bluehive%2Fsdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40bluehive%2Fsdk-mcp%22%5D%2C%22env%22%3A%7B%22BLUEHIVE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @bluehive/sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response = await client.health.check();\n\nconsole.log(response.status);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive();\n\nconst response: BlueHive.HealthCheckResponse = await client.health.check();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.health.check().catch(async (err) => {\n  if (err instanceof BlueHive.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new BlueHive({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.health.check({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new BlueHive({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.health.check({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new BlueHive();\n\nconst response = await client.health.check().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.health.check().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.status);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `BLUE_HIVE_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport BlueHive from '@bluehive/sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new BlueHive({\n  logger: logger.child({ name: 'BlueHive' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.health.check({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport BlueHive from '@bluehive/sdk';\nimport fetch from 'my-fetch';\n\nconst client = new BlueHive({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport BlueHive from '@bluehive/sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new BlueHive({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport BlueHive from '@bluehive/sdk';\n\nconst client = new BlueHive({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport BlueHive from 'npm:@bluehive/sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new BlueHive({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/bluehive-health/bluehive-sdk-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
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
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
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
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
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
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
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

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
