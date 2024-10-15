const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/copytrading/instruments
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1378

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getCopytradingInstruments(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
