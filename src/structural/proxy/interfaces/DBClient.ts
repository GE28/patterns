export default interface DBClient {
  getString(fieldName: string): string | null;
  setString(fieldName: string, data: string): void;
}
