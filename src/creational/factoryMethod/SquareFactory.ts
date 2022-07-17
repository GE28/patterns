// ConcreteCreator
import Square from './Square';
import Shape from './interfaces/Shape';
import ShapeFactory from './interfaces/ShapeFactory';

export default class SquareFactory implements ShapeFactory {
  public createShape(): Shape {
    return new Square();
  }
}
