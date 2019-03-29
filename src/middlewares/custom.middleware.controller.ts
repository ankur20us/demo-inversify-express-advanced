import { container } from '../ioc/ioc';
import * as express from 'express';


// tslint:disable-next-line: max-line-length
container.bind<express.RequestHandler>('CustomMiddlewareController').toConstantValue(function CustomMiddlewareController(req: any, res: any, next: any) {
  console.log('Custom Middleware, setting the context');
  req.context = {
    user: {
      password: 'bar',
      username: 'foo'
    }
  };
  next();
});
