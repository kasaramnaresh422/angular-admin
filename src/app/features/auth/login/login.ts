import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  template: `
    <h2>Login</h2>
    <input #user placeholder="Username">
    <input #pass type="password" placeholder="Password">
    <button (click)="login(user.value, pass.value)">Login</button>
  `
})
export class Login {

  constructor(private auth: AuthService, private router: Router) {}

  login(u: string, p: string) {
    this.auth.login(u, p);
    this.router.navigate(['/']);
  }
}