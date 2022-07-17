// ConcreteHandler
import Vehicle from './abstract/Vehicle';

export default class Motorcycle extends Vehicle {
  public deliver(distance: number): string | null {
    if (distance < 25) return 'motorcycle';
    return super.deliver(distance);
  }
}
