import { Request, Response } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'HealthChecker';

const healthChecker = (_request: Request, response: Response): Response => {
  logging.info(NAMESPACE, 'Health check route called.');

  return response.status(200).json({ message: 'pong' });
};

export default { healthChecker };
