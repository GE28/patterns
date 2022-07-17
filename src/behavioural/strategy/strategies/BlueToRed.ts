// ConcreteStrategy
import PaintStrategy from '../interfaces/PaintingStrategy';
import Box from '../Box';

export default class BlueToRed implements PaintStrategy {
  public paint(array: Box[]): void {
    array.forEach((box) => {
      box.getColor() === 'blue' ? box.paint('red') : void 0;
    });
  }
}
