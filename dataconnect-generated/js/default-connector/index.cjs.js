const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'cine-verse',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

