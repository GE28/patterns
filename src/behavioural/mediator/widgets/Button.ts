// ConcreteColleague
import Widget from '../abstract/Widget';

export default class Button extends Widget {
  private _disabled: boolean = false;

  public disable() {
    this._disabled = true;
  }

  public enable() {
    this._disabled = false;
  }

  public isActive() {
    return !this._disabled;
  }

  public click() {
    if (this.isActive()) {
      this.notifyUpdate();
    }
  }
}
