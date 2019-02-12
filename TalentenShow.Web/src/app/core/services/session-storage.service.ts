export class SessionStorageService {

  constructor() { }

  public getText(key: string): string {
    let storedData: string = sessionStorage.getItem(key);
    if (!storedData) throw 'no token found';
    return storedData;
  }

  public getObject(key: string): any {
    let storedData: string = sessionStorage.getItem(key);
    if (!storedData) return null;
    return JSON.parse(storedData);
  }

  public set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  public clear(): void {
    sessionStorage.clear();
  }
}
