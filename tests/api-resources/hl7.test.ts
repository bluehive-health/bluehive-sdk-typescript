// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BlueHive from '@bluehive/sdk';

const client = new BlueHive({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource hl7', () => {
  // Prism tests are disabled
  test.skip('process', async () => {
    const responsePromise = client.hl7.process();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('process: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.hl7.process({ body: 'body' }, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      BlueHive.NotFoundError,
    );
  });
});
