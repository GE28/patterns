// Context
import FanState from './interfaces/FanState';
import FanOffState from './states/FanOffState';
import FanLowState from './states/FanLowState';
import FanMidState from './states/FanMidState';
import FanHighState from './states/FanHighState';

export default class Fan {
  private _speed: number = 0;
  private _states: FanState[] = [
    new FanOffState(),
    new FanLowState(),
    new FanMidState(),
    new FanHighState()
  ];
  private _currentState: FanState = this._states[0];

  public getStatus(): string {
    return this._currentState.getStatus();
  }

  public unplug(): void {
    this._currentState = this._states[0];
  }

  public turnKnobClockwise(): void {
    const nextState = this._states[this._speed + 1];
    if (nextState) this._speed += 1;

    this._currentState = this._states[this._speed];
  }

  public turnKnobCounterClockwise(): void {
    const previousState = this._states[this._speed - 1];
    if (previousState) this._speed -= 1;

    this._currentState = this._states[this._speed];
  }
}
