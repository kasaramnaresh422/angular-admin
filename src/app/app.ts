import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Angular Admin Dashboard</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet]
})
export class App {}