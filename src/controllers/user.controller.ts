
import {
  controller, httpGet, httpPost
} from 'inversify-express-utils';
import * as express from 'express';
import { inject, container } from '../ioc/ioc';
import { Request } from 'express';
import UserService from '../services/user.service';
import UserModel  from '../models/user.model';

@controller('/user', container.get<express.RequestHandler>('CustomMiddlewareController'))
export default class UserController {

  constructor( @inject(UserService) private userService: UserService) { }

  @httpGet('/', container.get<express.RequestHandler>('CustomMiddlewareFunctional'))
  public getUsers(request: any): String {
    console.log('This is the value set in middleware', request.context.user);
    return this.userService.getUsers();
  }

  // @httpGet('/:id')
  // public getUser(request: Request):String {
  //   const id: String = request.params.id
  //   return this.userService.getUser(id)
  // }

  @httpGet('/abc')
  public getUserModel(): UserModel {
    return this.userService.getUserModel();
  }

  @httpPost('/')
  public newUser(request: Request): String {
    const data = request.body;
    return `You passed ${JSON.stringify(data, null, 2)} and here is the model ${this.userService.newUser()}`;
  }
}
