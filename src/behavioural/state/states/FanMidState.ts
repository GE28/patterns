// ConcreteState
import FanState from '../interfaces/FanState';

export default class FanMidState implements FanState {
  public getStatus(): string {
    return 'spinning (speed 2)';
  }
}
