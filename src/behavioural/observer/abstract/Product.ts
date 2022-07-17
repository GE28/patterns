export default abstract class Product {
  private _price: number = Infinity;

  public /* final */ setPrice(value: number): void {
    this._price = value;
  }

  public /* final */ getPrice(): number {
    return this._price;
  }

  public abstract getId(): string;
}
