import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  template: `
    <h2>Dashboard</h2>
    <p>Total Users: {{ users().length }}</p>
  `
})
export class Dashboard {

  users = signal<any[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => this.users.set(data));
  }
}