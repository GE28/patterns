// ConcreteColleague
import Widget from '../abstract/Widget';

export default class InputField extends Widget {
  private _value: string = '';

  public getValue(): string {
    return this._value;
  }

  public setValue(value: string): void {
    this._value = value;
    this.notifyUpdate();
  }
}
