const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/market/block-tickers
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1863

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getBlockTickers(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
