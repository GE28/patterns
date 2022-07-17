import DBClient from './interfaces/DBClient';

export default class DBRemoteClient implements DBClient {
  private _data: Map<string, string> = new Map();

  public getString(fieldName: string): string | null {
    setTimeout(() => process.stdout.write('Waiting for the server...'), 498);
    setTimeout(() => process.stdout.write('Loading data...'), 498);

    return this._data.get(fieldName) || null;
  }

  public setString(fieldName: string, data: string): void {
    setTimeout(() => process.stdout.write('Sending data...'), 498);

    this._data.set(fieldName, data);

    setTimeout(() => process.stdout.write('Waiting for the server...'), 498);
  }
}
