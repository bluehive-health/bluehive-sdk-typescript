# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /v1/health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /v1/version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> VersionRetrieveResponse</code>

# Providers

Types:

- <code><a href="./src/resources/providers.ts">ProviderLookupResponse</a></code>

Methods:

- <code title="get /v1/providers/lookup">client.providers.<a href="./src/resources/providers.ts">lookup</a>({ ...params }) -> ProviderLookupResponse</code>

# Database

Types:

- <code><a href="./src/resources/database.ts">DatabaseCheckHealthResponse</a></code>

Methods:

- <code title="get /v1/database/health">client.database.<a href="./src/resources/database.ts">checkHealth</a>() -> DatabaseCheckHealthResponse</code>

# Fax

Types:

- <code><a href="./src/resources/fax.ts">FaxListProvidersResponse</a></code>
- <code><a href="./src/resources/fax.ts">FaxRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/fax.ts">FaxSendResponse</a></code>

Methods:

- <code title="get /v1/fax/providers">client.fax.<a href="./src/resources/fax.ts">listProviders</a>() -> FaxListProvidersResponse</code>
- <code title="get /v1/fax/status/{id}">client.fax.<a href="./src/resources/fax.ts">retrieveStatus</a>(id) -> FaxRetrieveStatusResponse</code>
- <code title="post /v1/fax/send">client.fax.<a href="./src/resources/fax.ts">send</a>({ ...params }) -> FaxSendResponse</code>
