// storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly USER_DATA_KEY = 'USER_DATA';

  getUsers(): any[] {
    const data = localStorage.getItem(this.USER_DATA_KEY);
    return data ? JSON.parse(data) : [];
  }

  setUsers(users: any[]): void {
    localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(users));
  }
}
