import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

// app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet]
})
export class AppComponent {}

