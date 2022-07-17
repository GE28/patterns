// ConcreteProduct
import Shape from './interfaces/Shape';

export default class Square implements Shape {
  public getDescription(): string {
    return 'A square';
  }
}
