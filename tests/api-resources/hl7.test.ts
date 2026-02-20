// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BlueHive from '@bluehive/sdk';

const client = new BlueHive({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource hl7', () => {
  // Mock server tests are disabled
  test.skip('sendResults: only required params', async () => {
    const responsePromise = client.hl7.sendResults({
      employeeId: 'employeeId',
      file: {
        base64: 'base64',
        name: 'name',
        type: 'type',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('sendResults: required and optional params', async () => {
    const response = await client.hl7.sendResults({
      employeeId: 'employeeId',
      file: {
        base64: 'base64',
        name: 'name',
        type: 'type',
      },
    });
  });
});
