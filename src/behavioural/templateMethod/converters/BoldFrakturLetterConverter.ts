// ConcreteClass
import CharacterConverter from '../abstract/CharacterConverter';

export default class BoldFrakturLetterConverter extends CharacterConverter {
  protected isConvertible(char: string): boolean {
    // var for performance reasons
    var code = char.charCodeAt(0);
    return code > 64 && code < 123;
  }

  protected convertChar(char: string): string {
    var code = char.charCodeAt(0);
    if (code > 96 && code < 123) return String.fromCodePoint(code + 0x1d525);
    if (code > 64 && code < 91) return String.fromCodePoint(code + 0x1d52b);
    return char;
  }
}
