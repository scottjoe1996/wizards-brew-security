import express from 'express';
import http from 'http';

import logging from './config/logging';
import config from './config/config';
import healthCheckerRouter from './routes/healthChecker';

const NAMESPACE = 'App';
const app = express();

app.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
  });

  next();
});

app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*') Remove this when we have defined our domain
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
    return res.status(200).json({});
  }

  next();
});

app.use('/health-checker', healthCheckerRouter);

app.use((req, res) => {
  const error = new Error('not found');

  return res.status(404).json({ message: error.message });
});

const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));
