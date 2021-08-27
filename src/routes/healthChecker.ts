import express from 'express';
import controller from '../controller/healthChecker';

const healthCheckerRouter = express.Router();

healthCheckerRouter.get('/ping', controller.healthChecker);

export = healthCheckerRouter;
