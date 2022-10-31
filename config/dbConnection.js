const { MongoClient } = require('mongodb');
require('dotenv').config();

console.log("Variável de conexão com o mongo:", process.env.mongoURI);

const client = new MongoClient(process.env.mongoURI);
console.log(client);

module.exports = client;