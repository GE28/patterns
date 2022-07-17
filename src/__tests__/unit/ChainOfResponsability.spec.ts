import Bicycle from '../../behavioural/chainOfResponsibility/Bicycle';
import Motorcycle from '../../behavioural/chainOfResponsibility/Motorcycle';
import Car from '../../behavioural/chainOfResponsibility/Car';

const bicycle = new Bicycle();
const motorcycle = new Motorcycle();
const car = new Car();

describe('Bicycle class', () => {
  it('should deliver when distance <= 5 km', () => {
    const hardTimePedaling = 4.999;
    expect(bicycle.deliver(hardTimePedaling)).toBe('bicycle');
  });

  it('should not deliver when distance > 5 km', () => {
    const hardTimePedaling = 5.1;
    expect(bicycle.deliver(hardTimePedaling)).toBeNull();
  });
});

describe('Motorcycle class', () => {
  it('should deliver when distance <= 25 km', () => {
    const toAfarNeighborhood = 24.999;
    expect(motorcycle.deliver(toAfarNeighborhood)).toBe('motorcycle');
  });

  it('should not deliver when distance > 25 km', () => {
    const toAfarNeighborhood = 25.1;
    expect(motorcycle.deliver(toAfarNeighborhood)).toBeNull();
  });
});

describe('Car class', () => {
  it('should deliver when distance <= 50 km', () => {
    const mealToAnotherCity = 49.999;
    expect(car.deliver(mealToAnotherCity)).toBe('car');
  });

  it('should not deliver when distance > 50 km', () => {
    const mealToAnotherCity = 50.1;
    expect(car.deliver(mealToAnotherCity)).toBeNull();
  });
});

describe('Vehicle class', () => {
  it('should pass the request to the alternative vehicle when available', () => {
    bicycle.setAlternative(motorcycle);
    motorcycle.setAlternative(car);

    const coffeToAnotherStreet = 0.2;
    const sandwichToAnotherNeighborhood = 15;
    const mealToAnotherCity = 49;
    const passengerToAnotherCountry = 1000;

    expect(bicycle.deliver(coffeToAnotherStreet)).toBe('bicycle');
    expect(bicycle.deliver(sandwichToAnotherNeighborhood)).toBe('motorcycle');
    expect(bicycle.deliver(mealToAnotherCity)).toBe('car');
    expect(bicycle.deliver(passengerToAnotherCountry)).toBeNull();
  });
});
