// Observer
import Product from '../abstract/Product';
import Website from './Website';

export default abstract class User {
  protected abstract shouldBuy(product: Product): boolean;
  protected abstract buy(product: Product): void;

  public /* final */ update(site: Website): void {
    if (this.shouldBuy(site.sellProduct())) this.buy(site.sellProduct());
  }
}
