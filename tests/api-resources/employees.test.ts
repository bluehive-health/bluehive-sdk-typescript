// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BlueHive from '@bluehive/sdk';

const client = new BlueHive({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employees', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.employees.create({
      email: 'dev@stainless.com',
      firstName: 'x',
      lastName: 'x',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.employees.create({
      email: 'dev@stainless.com',
      firstName: 'x',
      lastName: 'x',
      activeAccount: 'Active',
      address: {
        city: 'x',
        postalCode: 'x',
        state: 'x',
        street1: 'x',
        country: 'country',
        county: 'county',
        street2: 'street2',
      },
      blurb: 'blurb',
      departments: ['string'],
      dob: '7321-69-10',
      employer_id: 'employer_id',
      extendedFields: [{ name: 'x', value: 'x' }],
      phone: [{ number: 'x', type: 'Cell' }],
      title: 'title',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.employees.retrieve('employeeId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.employees.update({ _id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.employees.update({
      _id: 'x',
      activeAccount: 'Active',
      address: {
        city: 'x',
        postalCode: 'x',
        state: 'x',
        street1: 'x',
        country: 'country',
        county: 'county',
        street2: 'street2',
      },
      blurb: 'blurb',
      departments: ['string'],
      dob: '7321-69-10',
      email: 'dev@stainless.com',
      employer_id: 'employer_id',
      extendedFields: [{ name: 'x', value: 'x' }],
      firstName: 'x',
      lastName: 'x',
      phone: [{ number: 'x', type: 'Cell' }],
      title: 'title',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.employees.list({ employerId: 'employerId' });
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
    const response = await client.employees.list({
      employerId: 'employerId',
      limit: '269125115713',
      offset: '269125115713',
    });
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.employees.delete('employeeId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('linkUser: only required params', async () => {
    const responsePromise = client.employees.linkUser({ employeeId: 'x', userId: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('linkUser: required and optional params', async () => {
    const response = await client.employees.linkUser({ employeeId: 'x', userId: 'x', role: ['string'] });
  });

  // Prism tests are disabled
  test.skip('unlinkUser: only required params', async () => {
    const responsePromise = client.employees.unlinkUser({ employeeId: 'employeeId', userId: 'userId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unlinkUser: required and optional params', async () => {
    const response = await client.employees.unlinkUser({ employeeId: 'employeeId', userId: 'userId' });
  });
});
