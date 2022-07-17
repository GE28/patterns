// Leaf
import ProductComponent from './abstract/ProductComponent';

export default class SimpleProduct extends ProductComponent {
  constructor(private _cost: number) {
    super();
  }

  public getCost(): number {
    return this._cost;
  }
}
