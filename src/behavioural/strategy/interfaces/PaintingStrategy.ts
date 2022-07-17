import Box from '../Box';

export default interface PaintingStrategy {
  paint(array: Box[]): void;
}
