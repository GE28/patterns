// ConcreteStrategy
import PaintStrategy from '../interfaces/PaintingStrategy';
import Box from '../Box';

export default class SmallToBlueBigToRed implements PaintStrategy {
  public paint(array: Box[]): void {
    array.forEach((box) => {
      let color;
      color = box.getLength() < 30 ? 'blue' : 'red';
      box.paint(color);
    });
  }
}
