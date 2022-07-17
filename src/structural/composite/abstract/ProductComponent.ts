// Component
export default abstract class ProductComponent {
  public abstract getCost(): number;

  public getChild(index: number): ProductComponent {
    return [][0];
  }
}
