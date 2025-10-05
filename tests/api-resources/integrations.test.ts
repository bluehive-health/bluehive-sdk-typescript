// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BlueHive from '@bluehive/sdk';

const client = new BlueHive({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integrations', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.integrations.list({ 'x-brand-id': 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.integrations.list({ 'x-brand-id': 'x' });
  });

  // Prism tests are disabled
  test.skip('checkActive: only required params', async () => {
    const responsePromise = client.integrations.checkActive('name', { 'x-brand-id': 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('checkActive: required and optional params', async () => {
    const response = await client.integrations.checkActive('name', { 'x-brand-id': 'x' });
  });
});
