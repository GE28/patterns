// ConcreteHandler
import Vehicle from './abstract/Vehicle';

export default class Car extends Vehicle {
  public deliver(distance: number): string | null {
    if (distance < 50) return 'car';
    return super.deliver(distance);
  }
}
