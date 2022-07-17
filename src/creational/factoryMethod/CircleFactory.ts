// ConcreteCreator
import Circle from './Circle';
import Shape from './interfaces/Shape';
import ShapeFactory from './interfaces/ShapeFactory';

export default class CircleFactory implements ShapeFactory {
  public createShape(): Shape {
    return new Circle();
  }
}
