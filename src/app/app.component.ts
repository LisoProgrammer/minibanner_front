import { Component } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Importa HttpClient y provideHttpClient
import { RouterOutlet } from '@angular/router';
import { FormConsultarStdComponent } from './form-consultar-std/form-consultar-std.component';
import { TableStdComponent } from './table-std/table-std.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,  // Define el componente como standalone
  imports: [RouterOutlet, FormConsultarStdComponent, TableStdComponent, ReactiveFormsModule],  // Agrega tus otros componentes aquí
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minibanner';
}
