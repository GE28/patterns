import Button from '../../behavioural/command/Button';
import CommandLine from '../../behavioural/command/CommandLine';
import Timer from '../../behavioural/command/Timer';
import TimerAddCommand from '../../behavioural/command/TimerAddCommand';

describe('Button class', () => {
  const timer = new Timer();
  const add10SecCommand = new TimerAddCommand(timer, 10 * 1000);

  beforeEach(() => {
    timer.clear();
  });

  it('should execute its assigned command', () => {
    expect(timer.getRemainingTime()).toBe(0);
     
    const button = new Button(add10SecCommand);
    button.click();

    expect(timer.getRemainingTime()).toBe(10000);
  });
});

describe('CLI class', () => {
  const timer = new Timer();
  const add10SecCommand = new TimerAddCommand(timer, 10 * 1000);

  beforeEach(() => {
    timer.clear();
  });

  it('should run its assigned command', () => {
    expect(timer.getRemainingTime()).toBe(0);
     
    const cli = new CommandLine();
    cli.run(add10SecCommand)

    expect(timer.getRemainingTime()).toBe(10000);
  });
});