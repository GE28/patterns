// ConcreteState
import FanState from '../interfaces/FanState';

export default class FanOffState implements FanState {
  public getStatus(): string {
    return 'off';
  }
}
