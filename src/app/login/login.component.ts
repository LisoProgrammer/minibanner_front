import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../servicios/auth/auth.service';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
import { CommonModule } from '@angular/common'; // <-- agrega esto si es standalone

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [
    AlumnosService,
    AuthService
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; // <-- usa ! para evitar errores de inicialización

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      identificacion: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { identificacion, password } = this.loginForm.value;
      this.authService.login(identificacion, password).subscribe({
        next: (res: any) => {
          if (res.success) {
            alert('Inicio de sesión exitoso');
            if (res.redirect === 'student') {
              this.router.navigate(['/student']);
            } else if (res.redirect === 'profesor') {
              this.router.navigate(['/profesor']);
            }
          } else {
            alert('Credenciales incorrectas');
          }
        },
        error: (err: any) => {
          console.error('Error de conexión:', err);
          alert('Error de conexión');
        },
      });
    }
  }
}
