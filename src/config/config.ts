import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOST_NAME = process.env.SERVER_HOST_NAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8080;

const SERVER = {
  hostname: SERVER_HOST_NAME,
  port: SERVER_PORT
};

const config = {
  server: SERVER
};

export default config;
