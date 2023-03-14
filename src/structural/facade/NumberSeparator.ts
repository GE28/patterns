import TextObject from "./interfaces/TextObject";

export default class NumberSeparator {
  static separateNumbers(obj: TextObject): TextObject {
    obj.numbers = obj.text.split('')
                          .map((char: string) => parseInt(char))
                          .filter((number: number) => !isNaN(number));
    obj.text = obj.text.replace(/[0-9]/g, '');
    return obj;
  }
}