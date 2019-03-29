/**
 * This import is needed for the ts jest cases
 */
import 'reflect-metadata';
import { expect } from 'chai';

import UserController from '../../src/controllers/user.controller';
import UserService from '../../src/services/user.service';

describe('UserController', () => {
  let controller;

  beforeEach(() => {
    controller = new UserController(new UserService());
  });

  it('should get back all user', async () => {
    const result = await controller.getUsers();
    expect(result).to.eq('Service -> getUsers');
  });
});
