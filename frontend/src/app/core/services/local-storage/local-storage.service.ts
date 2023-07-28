import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveLocalData(key: string, value: string): Promise<any> {
    return new Promise((resolve,reject) => {
      let data = localStorage.setItem(key, value)
      resolve(data)
    })
    }
    
    public getLocalData(key: string): Promise<any> {
      return new Promise((resolve, reject) => {
        let data = localStorage.getItem(key)
        resolve(data)
      })
    }
    
    public removeLocalData(key: Array<string>): Promise<any> {
      return new Promise((resolve, reject) => {
        for (const keys of key) {
          localStorage.removeItem(keys);
      }
        resolve(key)
      })
    }
    
    public clearData() {
    localStorage.clear();
    }
}
