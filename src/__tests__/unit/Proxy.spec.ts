import DBRemoteClient from '../../structural/proxy/DBRemoteClient';
import DBCachedClient from '../../structural/proxy/DBCachedClient';

jest.useFakeTimers();
jest.spyOn(process.stdout, 'write').mockImplementation();
const spiedTimeout = jest.spyOn(global, 'setTimeout');

const field = 'test';
const str = 'superidoldexiàoróng';
let dbRemote: DBRemoteClient;

describe('DBRemoteClient class', () => {
  beforeEach(() => {
    dbRemote = new DBRemoteClient();
    spiedTimeout.mockClear();
  });

  it('should wait on setString()', () => {
    dbRemote.setString(field, str);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it('should wait on getString()', () => {
    dbRemote.getString(field);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it('should send and retrieve data correctly', () => {
    dbRemote.setString(field, str);
    expect(dbRemote.getString(field)).toEqual(str);
  });

  it('should return null if the field is not filled', () => {
    expect(dbRemote.getString('mstintfcvbrtt')).toBeNull();
  });
});

let dbCached: DBCachedClient;

describe('DBCachedClient class', () => {
  beforeEach(() => {
    dbCached = new DBCachedClient(new DBRemoteClient());
    spiedTimeout.mockClear();
  });

  it('should create and read data correctly', () => {
    dbCached.setString(field, str);
    expect(dbCached.getString(field)).toEqual(str);
  });

  it('should return null if the field is not filled', () => {
    expect(dbCached.getString('mstintfcvbrtt')).toBeNull();
  });

  it('should cache already sent data', () => {
    dbCached.setString(field, str);
    dbCached.getString(field);
    dbCached.getString(field);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

  it('should cache already retrieved data', () => {
    dbCached.getString(field);
    dbCached.getString(field);
    dbCached.getString(field);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });
});
