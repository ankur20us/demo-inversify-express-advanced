
import { provide } from '../ioc/ioc';
import UserModel from '../models/user.model';

/**
 * This bean is exposed as with PROVIDE annotation
 */
@provide(UserService)
export default class UserService {

  public getUsers(): String {
    return 'Service -> getUsers';
  }

  public getUser(id: String): String {
    return `Service -> getUser -> ${id}`;
  }

  public getUserModel(): UserModel {
    return new UserModel('This is test object', 'Test object');
  }

  public newUser(): String {
    return 'Service -> newuser';
  }
}
