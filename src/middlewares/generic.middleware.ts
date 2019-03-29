import * as express from 'express';

export default (request: express.Request, response: express.Response, next: express.NextFunction) => {
  console.log(`Coming from generic middleware - HTTP ${request.method} ${request.url}`);
  next();
};
