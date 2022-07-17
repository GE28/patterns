import DBClient from './interfaces/DBClient';

export default class DBCachedClient implements DBClient {
  constructor(private _realClient: DBClient) {}

  private _cache: Map<string, string | null> = new Map();

  public getString(fieldName: string): string | null {
    const cachedString = this._cache.get(fieldName);
    if (cachedString || cachedString === null) return cachedString;

    const stringFromDB = this._realClient.getString(fieldName);
    this._cache.set(fieldName, stringFromDB);

    return stringFromDB;
  }

  public setString(fieldName: string, data: string): void {
    const cachedString = this._cache.get(fieldName);
    if (cachedString === data) return;

    this._realClient.setString(fieldName, data);
    this._cache.set(fieldName, data);
  }
}
