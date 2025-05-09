import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth/auth.service';
import { FormConsultarStdComponent } from '../form-consultar-std/form-consultar-std.component';
import { TableStdComponent } from '../table-std/table-std.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [RouterOutlet, FormConsultarStdComponent, TableStdComponent, ReactiveFormsModule, NavbarComponent],
  providers: [AlumnosService, AuthService],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.check_sesion().subscribe({
      next: (res) => {
        console.log(res)
        if (!res.log_in) {
          alert('Acceso denegado. Debe iniciar sesión como profesor.');
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        console.error('Error verificando sesión:', err);
        this.router.navigate(['/login']);
      }
    });
  }
}
