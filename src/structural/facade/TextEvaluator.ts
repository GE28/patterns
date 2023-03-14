import TextObject from "./interfaces/TextObject";
import NumberSeparator from "./NumberSeparator";
import TextSeparator from "./TextSeparator";

export default class TextEvalFormatFacade {
  static process(obj: TextObject): TextObject {
    return TextSeparator.separateText(
        NumberSeparator.separateNumbers(obj)
    );
  }
}