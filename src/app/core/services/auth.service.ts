import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = signal<boolean>(false);

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
      localStorage.setItem('token', '12345');
    }
  }

  logout() {
    this.isLoggedIn.set(false);
    localStorage.removeItem('token');
  }
}