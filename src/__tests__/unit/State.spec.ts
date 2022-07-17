import Fan from '../../behavioural/state/Fan';

describe('Fan class', () => {
  const fan = new Fan();

  it('should not be able to spin as soon as it is constructed', () => {
    expect(fan.getStatus()).not.toMatch(/^spinning/);
  });

  it('should be able to reach speed 1 with turnKnobClockwise()', () => {
    fan.turnKnobClockwise();
    expect(fan.getStatus()).toBe('spinning (speed 1)');
  });

  it('should be able to reach speed 2 with turnKnobClockwise()', () => {
    fan.turnKnobClockwise();
    expect(fan.getStatus()).toBe('spinning (speed 2)');
  });

  it('should be able to reach speed 3 with turnKnobClockwise()', () => {
    fan.turnKnobClockwise();
    expect(fan.getStatus()).toBe('spinning (speed 3)');
  });

  it('should ignore turnKnobClockwise() when speed 3 is reached', () => {
    fan.turnKnobClockwise();
    expect(fan.getStatus()).toBe('spinning (speed 3)');
  });

  it('should be able to reach speed 2 with turnKnobCounterClockwise()', () => {
    fan.turnKnobCounterClockwise();
    expect(fan.getStatus()).toBe('spinning (speed 2)');
  });

  it('should be able to reach speed 1 with turnKnobCounterClockwise()', () => {
    fan.turnKnobCounterClockwise();
    expect(fan.getStatus()).toBe('spinning (speed 1)');
  });

  it('should be able to be turned off with turnKnobCounterClockwise()', () => {
    fan.turnKnobCounterClockwise();
    expect(fan.getStatus()).not.toMatch(/^spinning/);
  });

  it('should be able to be turned off with unplug()', () => {
    fan.turnKnobClockwise();
    fan.unplug();
    expect(fan.getStatus()).not.toMatch(/^spinning/);
  });

  it('should ignore turnKnobCounterClockwise() when off', () => {
    fan.turnKnobCounterClockwise();
    expect(fan.getStatus()).not.toMatch(/^spinning/);
  });
});
