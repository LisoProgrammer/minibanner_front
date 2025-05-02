import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormConsultarStdComponent } from "./form-consultar-std/form-consultar-std.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormConsultarStdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minibanner';
}
