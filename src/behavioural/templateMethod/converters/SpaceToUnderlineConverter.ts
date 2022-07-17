// ConcreteClass
import CharacterConverter from '../abstract/CharacterConverter';

export default class SpaceToUnderlineConverter extends CharacterConverter {
  protected isConvertible(char: string): boolean {
    return !!char.match(/\s/)?.length;
  }

  protected convertChar(char: string): string {
    return '_';
  }
}
