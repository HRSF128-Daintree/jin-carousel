const { Client } = require('pg');
var connectionString = "postgresql://localhost/carousel";

const client = new Client({
    connectionString: connectionString
});
client.connect();
console.log('db connected');

module.exports = client;