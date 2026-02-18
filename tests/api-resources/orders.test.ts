// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BlueHive from '@bluehive/sdk';

const client = new BlueHive({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.orders.create({
      paymentMethod: 'self-pay',
      person: {
        city: 'x',
        dob: '7321-69-10',
        email: 'email',
        firstName: 'x',
        lastName: 'x',
        phone: '+)() 92))()1)',
        state: 'xx',
        street: 'x',
        zipcode: '73216-0225',
      },
      providerId: 'providerId',
      services: [{ _id: 'x', quantity: 1 }],
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
    const response = await client.orders.create({
      paymentMethod: 'self-pay',
      person: {
        city: 'x',
        dob: '7321-69-10',
        email: 'email',
        firstName: 'x',
        lastName: 'x',
        phone: '+)() 92))()1)',
        state: 'xx',
        street: 'x',
        zipcode: '73216-0225',
        country: 'country',
        county: 'county',
        street2: 'street2',
      },
      providerId: 'providerId',
      services: [
        {
          _id: 'x',
          quantity: 1,
          autoAccept: true,
        },
      ],
      _id: '_id',
      brandId: 'brandId',
      dueDate: '2019-12-27T18:11:19.117Z',
      dueDates: ['2019-12-27T18:11:19.117Z'],
      employeeId: 'employeeId',
      employeeIds: ['string'],
      employerId: 'employerId',
      metadata: { foo: 'bar' },
      priority: 'normal',
      providerCreated: true,
      providersIds: [{ providerId: 'x', serviceId: 'x' }],
      quantities: { foo: 1 },
      reCaptchaToken: 'reCaptchaToken',
      servicesIds: ['string'],
      tokenId: 'tokenId',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.orders.retrieve('orderId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.orders.update('orderId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orders.update(
        'orderId',
        {
          metadata: { foo: 'bar' },
          services: [
            {
              serviceId: 'x',
              dueDate: '2019-12-27T18:11:19.117Z',
              results: { foo: 'bar' },
              status: 'pending',
            },
          ],
          status: 'order_sent',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BlueHive.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveResults', async () => {
    const responsePromise = client.orders.retrieveResults('orderId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveResults: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.orders.retrieveResults(
        'orderId',
        {
          page: 1,
          pageSize: 1,
          serviceId: 'serviceId',
          since: '2019-12-27T18:11:19.117Z',
          status: 'status',
          until: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BlueHive.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('scheduleAppointment: only required params', async () => {
    const responsePromise = client.orders.scheduleAppointment('orderId', {
      appointment: {
        date: 'date',
        dateTime: '2019-12-27T18:11:19.117Z',
        time: 'time',
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

  // Prism tests are disabled
  test.skip('scheduleAppointment: required and optional params', async () => {
    const response = await client.orders.scheduleAppointment('orderId', {
      appointment: {
        date: 'date',
        dateTime: '2019-12-27T18:11:19.117Z',
        time: 'time',
        notes: 'notes',
        type: 'appointment',
      },
      orderAccessCode: 'orderAccessCode',
      providerId: 'providerId',
    });
  });

  // Prism tests are disabled
  test.skip('sendForEmployee: only required params', async () => {
    const responsePromise = client.orders.sendForEmployee({
      employeeId: 'employeeId',
      employerId: 'employerId',
      providersIds: [{ providerId: 'providerId' }],
      servicesIds: ['string'],
      'login-token': 'login-token',
      'user-id': 'user-id',
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
  test.skip('sendForEmployee: required and optional params', async () => {
    const response = await client.orders.sendForEmployee({
      employeeId: 'employeeId',
      employerId: 'employerId',
      providersIds: [{ providerId: 'providerId', serviceId: 'serviceId' }],
      servicesIds: ['string'],
      'login-token': 'login-token',
      'user-id': 'user-id',
      brandId: 'brandId',
      dueDate: 'dueDate',
      dueDates: ['string'],
      metadata: { foo: 'bar' },
      priority: 'normal',
      providerCreated: true,
      providerId: 'providerId',
      quantities: { foo: 1 },
    });
  });

  // Prism tests are disabled
  test.skip('updateStatus: only required params', async () => {
    const responsePromise = client.orders.updateStatus('orderId', { status: 'order_sent' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateStatus: required and optional params', async () => {
    const response = await client.orders.updateStatus('orderId', {
      status: 'order_sent',
      message: 'message',
    });
  });

  // Prism tests are disabled
  test.skip('uploadResults: only required params', async () => {
    const responsePromise = client.orders.uploadResults('orderId', {
      captchaToken: 'x',
      orderAccessCode: 'x',
      serviceId: 'x',
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
  test.skip('uploadResults: required and optional params', async () => {
    const response = await client.orders.uploadResults('orderId', {
      captchaToken: 'x',
      orderAccessCode: 'x',
      serviceId: 'x',
      dob: '7321-69-10',
      fileIds: ['x'],
      files: [
        {
          base64: 'x',
          name: 'x',
          type: 'x',
        },
      ],
      lastName: 'x',
    });
  });
});
