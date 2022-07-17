// ConcreteState
import FanState from '../interfaces/FanState';

export default class FanHighState implements FanState {
  public getStatus(): string {
    return 'spinning (speed 3)';
  }
}
