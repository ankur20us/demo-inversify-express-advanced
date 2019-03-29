import { container } from '../ioc/ioc';
import * as express from 'express';


container.bind<express.RequestHandler>('CustomMiddlewareFunctional').toConstantValue((req: any, res: any, next: any) => {
  console.log('Custom Middleware Functional, setting the context');
  req.context = {
    user: {
      password: 'bar',
      username: 'foo'
    }
  };
  next();
});
