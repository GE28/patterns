import BoxContainer from '../../behavioural/strategy/BoxContainer';
import Box from '../../behavioural/strategy/Box';
import SmallToBlueBigToRed from '../../behavioural/strategy/strategies/SmallToBlueBigToRed';
import BlueToRed from '../../behavioural/strategy/strategies/BlueToRed';

const sizeStrategy = new SmallToBlueBigToRed();
const colorStrategy = new BlueToRed();

describe('Box container class', () => {
  let boxContainer: BoxContainer;

  beforeEach(() => {
    boxContainer = new BoxContainer();
  });

  it('should not use paintBoxes() without a strategy', () => {
    expect(boxContainer.paintBoxes).toThrow();
  });

  it('should contain boxes', () => {
    const box1 = new Box(2, 'blue');
    const box2 = new Box(3, 'yellow');

    boxContainer.addBox(box1);
    boxContainer.addBox(box2);

    expect(boxContainer.getBox(0)).toBe(box1);
    expect(boxContainer.getBox(1)).toBe(box2);
  });

  it('should work correctly with SmallToBlueBigToRed', () => {
    const box1 = new Box(20, 'red');
    const box2 = new Box(40, 'blue');

    boxContainer.addBox(box1);
    boxContainer.addBox(box2);
    boxContainer.setStrategy(sizeStrategy).paintBoxes();

    expect(boxContainer.getBox(0).getColor()).toBe('blue');
    expect(boxContainer.getBox(1).getColor()).toBe('red');
  });

  it('should work correctly with BlueToRed', () => {
    const box1 = new Box(9999, 'blue');

    boxContainer.addBox(box1);
    boxContainer.setStrategy(colorStrategy).paintBoxes();

    expect(boxContainer.getBox(0).getColor()).toBe('red');
  });
});
