jest.spyOn(Date.prototype, 'toLocaleString').mockImplementation();

const fakeTime = new Date('1995-12-04').getTime();
jest.useFakeTimers().setSystemTime(fakeTime);

import TimeLogger from '../../creational/singleton/TimeLogger';

describe('Time logger class', () => {
  const logger = TimeLogger.getInstance();

  it('should always return the same instance', () => {
    const i1 = TimeLogger.getInstance();
    const i2 = TimeLogger.getInstance();

    expect(i1).toBe(i2);
  });

  it('should create logs', () => {
    const size1 = logger.getLogs().length;
    logger.generateLog();
    const size2 = logger.getLogs().length;

    expect(size2 - size1).toBe(1);
  });

  it('should clear logs', () => {
    logger.generateLog();
    logger.clearLogs();

    expect(logger.getLogs().length).toBe(0);
  });

  it('should use the current date', () => {
    logger.clearLogs();
    logger.generateLog();

    const last = logger.getLogs()[logger.getLogs().length - 1];

    expect(last).toMatchObject(
      expect.objectContaining({
        createdAt: new Date(fakeTime)
      })
    );
  });
});
