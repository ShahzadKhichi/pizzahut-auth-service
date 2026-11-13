/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import logger from './config/logger';
import creatHttpError, { HttpError } from 'http-errors';

const app = express();

app.get('/', (req, res) => {
  // const err = creatHttpError(404, 'Not Found');
  // throw err;
  res.send('Hello, World');
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: req.path,
        location: err.stack,
      },
    ],
  });
});

export default app;
