import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly validUsername = 'admin';
  private readonly validPassword = '0000';

  private loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      localStorage.setItem('authToken', 'someRandomAuthToken123');
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }
  logout() {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
  }
}
