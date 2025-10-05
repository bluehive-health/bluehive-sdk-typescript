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

# Employers

Types:

- <code><a href="./src/resources/employers/employers.ts">EmployerCreateResponse</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerRetrieveResponse</a></code>
- <code><a href="./src/resources/employers/employers.ts">EmployerListResponse</a></code>

Methods:

- <code title="post /v1/employers">client.employers.<a href="./src/resources/employers/employers.ts">create</a>({ ...params }) -> EmployerCreateResponse</code>
- <code title="get /v1/employers/{employerId}">client.employers.<a href="./src/resources/employers/employers.ts">retrieve</a>(employerID) -> EmployerRetrieveResponse</code>
- <code title="get /v1/employers/list">client.employers.<a href="./src/resources/employers/employers.ts">list</a>({ ...params }) -> EmployerListResponse</code>

## ServiceBundles

Types:

- <code><a href="./src/resources/employers/service-bundles.ts">ServiceBundleCreateResponse</a></code>
- <code><a href="./src/resources/employers/service-bundles.ts">ServiceBundleRetrieveResponse</a></code>
- <code><a href="./src/resources/employers/service-bundles.ts">ServiceBundleUpdateResponse</a></code>
- <code><a href="./src/resources/employers/service-bundles.ts">ServiceBundleListResponse</a></code>

Methods:

- <code title="post /v1/employers/{employerId}/service-bundles">client.employers.serviceBundles.<a href="./src/resources/employers/service-bundles.ts">create</a>(employerID, { ...params }) -> ServiceBundleCreateResponse</code>
- <code title="get /v1/employers/{employerId}/service-bundles/{id}">client.employers.serviceBundles.<a href="./src/resources/employers/service-bundles.ts">retrieve</a>(id, { ...params }) -> ServiceBundleRetrieveResponse</code>
- <code title="put /v1/employers/{employerId}/service-bundles/{id}">client.employers.serviceBundles.<a href="./src/resources/employers/service-bundles.ts">update</a>(id, { ...params }) -> ServiceBundleUpdateResponse</code>
- <code title="get /v1/employers/{employerId}/service-bundles">client.employers.serviceBundles.<a href="./src/resources/employers/service-bundles.ts">list</a>(employerID) -> ServiceBundleListResponse</code>
- <code title="delete /v1/employers/{employerId}/service-bundles/{id}">client.employers.serviceBundles.<a href="./src/resources/employers/service-bundles.ts">delete</a>(id, { ...params }) -> void</code>

# Hl7

Types:

- <code><a href="./src/resources/hl7.ts">Hl7ProcessResponse</a></code>

Methods:

- <code title="post /v1/hl7/">client.hl7.<a href="./src/resources/hl7.ts">process</a>({ ...params }) -> string</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderUpdateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResultsResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderScheduleAppointmentResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderSendForEmployeeResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderUpdateStatusResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderUploadResultsResponse</a></code>

Methods:

- <code title="post /v1/orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /v1/orders/{orderId}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(orderID) -> OrderRetrieveResponse</code>
- <code title="post /v1/orders/{orderId}">client.orders.<a href="./src/resources/orders.ts">update</a>(orderID, { ...params }) -> OrderUpdateResponse</code>
- <code title="get /v1/orders/{orderId}/results">client.orders.<a href="./src/resources/orders.ts">retrieveResults</a>(orderID, { ...params }) -> OrderRetrieveResultsResponse</code>
- <code title="post /v1/orders/{orderId}/schedule-appointment">client.orders.<a href="./src/resources/orders.ts">scheduleAppointment</a>(orderID, { ...params }) -> OrderScheduleAppointmentResponse</code>
- <code title="post /v1/orders/send">client.orders.<a href="./src/resources/orders.ts">sendForEmployee</a>({ ...params }) -> OrderSendForEmployeeResponse</code>
- <code title="put /v1/orders/{orderId}/status">client.orders.<a href="./src/resources/orders.ts">updateStatus</a>(orderID, { ...params }) -> OrderUpdateStatusResponse</code>
- <code title="post /v1/orders/{orderId}/upload-results">client.orders.<a href="./src/resources/orders.ts">uploadResults</a>(orderID, { ...params }) -> OrderUploadResultsResponse</code>

# Employees

Types:

- <code><a href="./src/resources/employees.ts">EmployeeCreateResponse</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeRetrieveResponse</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeUpdateResponse</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeListResponse</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeDeleteResponse</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeLinkUserResponse</a></code>
- <code><a href="./src/resources/employees.ts">EmployeeUnlinkUserResponse</a></code>

Methods:

- <code title="post /v1/employees">client.employees.<a href="./src/resources/employees.ts">create</a>({ ...params }) -> EmployeeCreateResponse</code>
- <code title="get /v1/employees/{employeeId}">client.employees.<a href="./src/resources/employees.ts">retrieve</a>(employeeID) -> EmployeeRetrieveResponse</code>
- <code title="put /v1/employees">client.employees.<a href="./src/resources/employees.ts">update</a>({ ...params }) -> EmployeeUpdateResponse</code>
- <code title="get /v1/employees">client.employees.<a href="./src/resources/employees.ts">list</a>({ ...params }) -> EmployeeListResponse</code>
- <code title="delete /v1/employees/{employeeId}">client.employees.<a href="./src/resources/employees.ts">delete</a>(employeeID) -> EmployeeDeleteResponse</code>
- <code title="post /v1/employees/link-user">client.employees.<a href="./src/resources/employees.ts">linkUser</a>({ ...params }) -> EmployeeLinkUserResponse</code>
- <code title="delete /v1/employees/unlink-user">client.employees.<a href="./src/resources/employees.ts">unlinkUser</a>({ ...params }) -> EmployeeUnlinkUserResponse</code>

# Integrations

Types:

- <code><a href="./src/resources/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationCheckActiveResponse</a></code>

Methods:

- <code title="get /v1/integrations">client.integrations.<a href="./src/resources/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse</code>
- <code title="get /v1/integrations/{name}">client.integrations.<a href="./src/resources/integrations.ts">checkActive</a>(name, { ...params }) -> IntegrationCheckActiveResponse</code>
