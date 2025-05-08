import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth/auth.service';
import { FormConsultarStdComponent } from '../form-consultar-std/form-consultar-std.component';
import { TableStdComponent } from '../table-std/table-std.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [RouterOutlet, FormConsultarStdComponent, TableStdComponent, ReactiveFormsModule],
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
        if (!res.loggIn || res.user.rol !== 1) {
          alert('Acceso denegado. Debe iniciar sesión como profesor.'+res.authenticated+" "+res.user.rol);
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
