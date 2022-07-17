import CircleFactory from '../../creational/factoryMethod/CircleFactory';
import SquareFactory from '../../creational/factoryMethod/SquareFactory';

const square = new SquareFactory();
const circle = new CircleFactory();

describe('Creator subclasses', () => {
  it('should create objects implementing the same interface', () => {
    expect(square.createShape().getDescription).not.toBeUndefined();
    expect(circle.createShape().getDescription).not.toBeUndefined();
  });
});
