// ConcreteSubject
import Product from './abstract/Product';
import Website from './abstract/Website';
import ProductA from './ProductA';

export default class ProductAWebsite extends Website {
  private _productPrice: number = Infinity;

  public updateProductPrice(value: number): void {
    this._productPrice = value;
    this.notify();
  }

  public sellProduct(): Product {
    const product = new ProductA();
    product.setPrice(this._productPrice);

    return product;
  }
}
