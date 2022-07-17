// Singleton (yes the bad guy)
import TimeLog from './types/TimeLog';

export default class TimeLogger {
  private constructor(private _logs: TimeLog[] = []) {}

  private static _instance: TimeLogger | null = null;

  public static getInstance(): TimeLogger {
    if (this._instance === null) {
      this._instance = new TimeLogger();
    }

    return this._instance;
  }

  private static defaultLocale: string[] = ['pt-BR', 'pt-PO'];
  private static defaultOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  private static getCurrentDate(): Date {
    return new Date();
  }

  private static generateLocaleDateString(
    locale = TimeLogger.defaultLocale,
    options = TimeLogger.defaultOptions
  ): string {
    return TimeLogger.getCurrentDate().toLocaleString(locale, options);
  }

  public generateLog(): void {
    this._logs.push({
      createdAt: TimeLogger.getCurrentDate(),
      message: `Log gerado ${TimeLogger.generateLocaleDateString()}`
    });
  }

  public clearLogs(): void {
    this._logs.splice(0, this._logs.length);
  }

  public getLogs() {
    return this._logs;
  }
}
