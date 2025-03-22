import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USER_KEY = 'USER';

  private _users: User[] = [];

  private _userLogged: User | undefined;

  constructor() {
    const existingUsers = localStorage.getItem(this.USER_KEY);
    if (existingUsers) {
      this._users = JSON.parse(existingUsers);
    }
  }

  public getList(): User[] {
    return this._users;
  }

  public addUserToList(user: User): void {
    this._users.push(user);
    localStorage.setItem(this.USER_KEY, JSON.stringify(this._users));
  }

  public checkUserPassword(userEmail: string, password: string): boolean {
    const user = this.getUserByEmail(userEmail);

    if (user) {
      return user.password === password;
    } else {
      return false;
    }
  }

  public getUserByEmail(email: string): User | undefined {
    return this._users.find((user) => user.email === email);
  }

  public setUserLogged(user: User | undefined): void {
    this._userLogged = user;
  }
}
