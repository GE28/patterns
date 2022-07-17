export default class Box {
  constructor(private _edgeLength: number, private _color: string) {}

  public paint(newColor: string): void {
    this._color = newColor;
  }

  public getLength(): number {
    return this._edgeLength;
  }

  public getColor(): string {
    return this._color;
  }
}
