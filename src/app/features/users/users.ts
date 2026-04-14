import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [CommonModule],
  template: `
    <h2>Users</h2>
    <div *ngFor="let user of users">
      {{ user.name }}
    </div>
  `
})
export class Users {

  users: any[] = [];

  constructor(private http: HttpClient) {
    const users$ = this.http.get('https://jsonplaceholder.typicode.com/users');
    const posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');

    combineLatest([users$, posts$]).subscribe(([users]: any) => {
      this.users = users;
    });
  }
}