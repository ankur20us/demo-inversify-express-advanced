/**
 * This file is the server
 */

import 'reflect-metadata';

import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

import './ioc/loader';
import { container } from './ioc/ioc';
import GenericMiddleware from './middlewares/generic.middleware';

// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({ extended: true }))
     .use(bodyParser.json())
     .use(helmet())
     .use(GenericMiddleware);
});

let application = server.build();
application.listen(3000);
console.log('Server started on port 3000 :)');

export default application;
