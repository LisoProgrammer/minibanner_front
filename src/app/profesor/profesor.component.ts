import { Component } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Importa HttpClient y provideHttpClient
import { RouterOutlet } from '@angular/router';
import { Auth } from '../servicios/auth/auth.service';
import { FormConsultarStdComponent } from '../form-consultar-std/form-consultar-std.component';
import { TableStdComponent } from '../table-std/table-std.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';

@Component({
  selector: 'app-profesor',
  standalone: true,  // Define el componente como standalone
  imports: [RouterOutlet, FormConsultarStdComponent, TableStdComponent, ReactiveFormsModule],  // Agrega tus otros componentes aquí
  providers: [
    AlumnosService, Auth
  ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent {

}
