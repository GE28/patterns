// ConcreteProduct
import Shape from './interfaces/Shape';

export default class Circle implements Shape {
  public getDescription(): string {
    return 'A circle';
  }
}
