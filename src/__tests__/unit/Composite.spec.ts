import SimpleProduct from '../../structural/composite/SimpleProduct';
import ProductContainer from '../../structural/composite/ProductContainer';

describe('Simple product class', () => {
  it('should return its cost', () => {
    const value = 10;
    const hamburger = new SimpleProduct(value);

    expect(hamburger.getCost()).toBe(value);
  });

  it('should have no children', () => {
    const soda = new SimpleProduct(3);

    expect(soda.getChild(0)).toBeUndefined();
  });
});

describe('Product container class', () => {
  let cart: ProductContainer;

  beforeEach(() => {
    cart = new ProductContainer();
  });

  it('should contain products', () => {
    const value = 100;
    const product = new SimpleProduct(value);

    cart.add(product);

    expect(cart.getChild(0)).toBe(product);
  });

  it('should be able to remove products', () => {
    const product = new SimpleProduct(1000);

    cart.add(product);
    cart.remove(product);

    expect(cart.getChild(0)).toBeUndefined();
  });

  it('should return the sum of all its products costs', () => {
    const [value1, value2, value3] = [1000, 70, 5];
    const smartphone = new SimpleProduct(value1);
    const pants = new SimpleProduct(value2);
    const cheapClock = new SimpleProduct(value3);

    cart.add(smartphone);
    cart.add(pants);
    cart.add(cheapClock);

    expect(cart.getCost()).toBe(value1 + value2 + value3);
  });

  it('should properly contain another containers', () => {
    const value = 50;
    const tshirt = new SimpleProduct(50);

    cart.add(tshirt);

    const cart2 = new ProductContainer();
    cart2.add(cart);

    expect(cart2.getCost()).toBe(value);
  });
});
