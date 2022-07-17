// AbstractClass
export default abstract class CharacterConverter {
  protected _textArray: string[] = [];

  protected abstract convertChar(char: string): string;
  protected abstract isConvertible(char: string): boolean;

  // template method
  public /* final*/ convertText(text: string) {
    this._textArray = text.split('');

    this._textArray.forEach((char, i) => {
      if (this.isConvertible(char)) this._textArray[i] = this.convertChar(char);
    });

    return this._textArray.join('');
  }
}
