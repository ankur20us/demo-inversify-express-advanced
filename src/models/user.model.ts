import { provide } from '../ioc/ioc';

interface IUserModel {
  email: string;
  name: string;
  _id?: string;
}

@provide(UserModel)
export default class UserModel implements IUserModel {
  constructor(
    public email: string,
    public name: string,
    public _id?: string
  ) { }
}