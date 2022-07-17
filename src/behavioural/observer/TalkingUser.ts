// ConcreteObserver
import Product from './abstract/Product';
import User from './abstract/User';

export default class TalkingUser extends User {
  constructor(private _name: string) {
    super();
  }

  private _buyMap: Map<string, number> = new Map();

  public defineDesiredPrice(product: Product, price: number): void {
    this._buyMap.set(product.getId(), price);
  }

  protected shouldBuy(product: Product): boolean {
    const desiredPrice = this._buyMap.get(product.getId());
    return desiredPrice ? product.getPrice() <= desiredPrice : false;
  }

  protected buy(product: Product): void {
    process.stdout.write(`I, ${this._name}, just bought ${product.getId()}`);
  }
}
