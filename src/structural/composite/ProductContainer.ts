// Composite
import ProductComponent from './abstract/ProductComponent';

export default class ProductContainer extends ProductComponent {
  private _children: ProductComponent[] = [];

  public add(product: ProductComponent): void {
    this._children.push(product);
  }

  public remove(product: ProductComponent): void {
    this._children = this._children.filter((child) => {
      return child !== product;
    });
  }

  public getChild(index: number): ProductComponent {
    return this._children[index];
  }

  public getCost(): number {
    return this._children.reduce((total, prod) => total + prod.getCost(), 0);
  }
}
