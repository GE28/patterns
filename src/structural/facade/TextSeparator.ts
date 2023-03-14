import TextObject from "./interfaces/TextObject";

export default class TextSeparator {
  static separateText(obj: TextObject): TextObject {
    obj.texts = obj.text.split(' ');
    obj.text = '';
    return obj;
  }
}