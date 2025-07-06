// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BlueHive from 'bluehive';

const client = new BlueHive({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource providers', () => {
  // skipped: tests are disabled for the time being
  test.skip('lookup', async () => {
    const responsePromise = client.providers.lookup();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('lookup: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.providers.lookup(
        { firstname: 'firstname', lastname: 'lastname', npi: 'npi', zipcode: 'zipcode' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BlueHive.NotFoundError);
  });
});
