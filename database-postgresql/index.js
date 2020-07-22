const { Client } = require('pg');
var connectionString = "postgresql://localhost/carousel";
// var connectionString = "postgresql://172.17.0.2:5432/carousel";

const client = new Client({
    connectionString: connectionString
});
client.connect();
console.log('postgres db connected');

module.exports = client;