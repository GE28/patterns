// Context
import Box from './Box';
import PaintingStrategy from './interfaces/PaintingStrategy';

export default class BoxContainer {
  private _howToPaint: PaintingStrategy | null = null;
  private _boxes: Box[] = [];

  public addBox(box: Box): void {
    this._boxes.push(box);
  }

  public getBox(index: number): Box {
    return this._boxes[index];
  }

  public setStrategy(strategy: PaintingStrategy): BoxContainer {
    this._howToPaint = strategy;
    return this;
  }

  public paintBoxes(): void {
    if (!this._howToPaint) throw new Error('Add a painting strategy first');
    this._howToPaint.paint(this._boxes);
  }
}
