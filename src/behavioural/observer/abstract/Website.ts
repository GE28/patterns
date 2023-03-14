// Subject
import { isEqual } from 'lodash';
import Product from '../abstract/Product';
import User from './User';

export default abstract class Website {
  private _subscribedUsers: User[] = [];

  public /* final */ subscribe(user: User): void {
    this._subscribedUsers.push(user);
  }

  public /* final */ unsubscribe(user: User): void {
    this._subscribedUsers.forEach((u, index) => {
      if (isEqual(u, user)) this._subscribedUsers.splice(index, 1);
    });
  }

  public abstract updateProductPrice(value: number): void;
  public abstract sellProduct(): Product;

  protected /* final */ notify(): void {
    this._subscribedUsers.forEach((user) => user.update(this));
  }
}
