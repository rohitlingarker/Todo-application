// populateConfig.js

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Resolve the paths to the config.json file
const configPath = path.resolve(__dirname, '..', 'config', 'config.json');

// Read the config.json file
const config = require(configPath);

// Replace placeholders with actual values from environment variables
config.development.username = process.env.DEV_DB_USERNAME;
config.development.password = process.env.DEV_DB_PASSWORD;
config.development.database = process.env.DEV_DB_DATABASE;
config.development.port = process.env.DEV_DB_PORT;
// config.development.host = process.env.DEV_SERVER_HOST;
config.development.host = process.env.DEV_SERVER_HOST;
config.development.dialect = process.env.DEV_DB_DIALECT;

config.test.use_env_variable = process.env.TEST_DATABASE_URL;

config.production.username = process.env.PROD_DB_USERNAME;
config.production.password = process.env.PROD_DB_PASSWORD;
config.production.database = process.env.PROD_DB_DATABASE;
config.production.port = process.env.PROD_SERVER_PORT;
config.production.host = process.env.PROD_SERVER_HOST;
config.production.dialect = process.env.PROD_DB_DIALECT;


// Write the updated config object to config.json file
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

console.log('Config file generated successfully.');
