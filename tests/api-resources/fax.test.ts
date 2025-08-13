// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BlueHive from '@bluehive/sdk';

const client = new BlueHive({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fax', () => {
  // Prism tests are disabled
  test.skip('listProviders', async () => {
    const responsePromise = client.fax.listProviders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.fax.retrieveStatus('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.fax.send({
      document: { content: 'content', contentType: 'application/pdf' },
      to: 'to',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('send: required and optional params', async () => {
    const response = await client.fax.send({
      document: { content: 'content', contentType: 'application/pdf', filename: 'filename' },
      to: 'to',
      from: 'from',
      provider: 'provider',
      subject: 'subject',
    });
  });
});
