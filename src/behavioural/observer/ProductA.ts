import Product from './abstract/Product';

export default class ProductA extends Product {
  public getId(): string {
    return 'Product A';
  }
}
