// ConcreteHandler
import Vehicle from './abstract/Vehicle';

export default class Bicycle extends Vehicle {
  public deliver(distance: number): string | null {
    if (distance < 5) return 'bicycle';
    return super.deliver(distance);
  }
}
