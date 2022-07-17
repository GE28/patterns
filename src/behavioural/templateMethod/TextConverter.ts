import CharacterConverter from './abstract/CharacterConverter';

export default class TextConverterTemplate {
  protected _inputText: string = '';
  protected _converters: CharacterConverter[] = [];

  public setInput(text: string): void {
    this._inputText = text;
  }

  public addConverter(newConverter: CharacterConverter): void {
    this._converters.push(newConverter);
  }

  public convert(): string {
    let result = this._inputText;

    this._converters.forEach((converter) => {
      result = converter.convertText(result);
    });

    return result;
  }
}
