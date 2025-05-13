import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../servicios/auth/auth.service';
import { Router } from '@angular/router';
declare let Swal: any;
@Component({
  selector: 'app-form-change-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-change-pass.component.html',
  styleUrl: './form-change-pass.component.css',
})
export class FormChangePassComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      actual: ['', Validators.required],
      nueva: ['', [Validators.required, Validators.minLength(5)]],
      confirmar: ['', Validators.required],
    });
  }

  cambiarContrasena() {
    if (this.form.valid) {
      const { actual, nueva, confirmar } = this.form.value;
      if (nueva !== confirmar) {
        //alert('La nueva contraseña y su confirmación no coinciden');
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          text: 'Verifica e intenta de nuevo',
          footer: '',
        });
        return;
      } else {
        this.authService.change_pass(actual, nueva).subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            Swal.fire({
              icon: 'success',
              title: data.message,
              text: 'Se cerrará la sesión',
              footer: '',
            });
            this.authService.logout();
            this.router.navigate(["/login"]);
          }else{
            Swal.fire({
              icon: 'error',
              title: data.message,
              text: 'Inténtalo de nuevo más tarde',
              footer: '',
            });
          }
        });
      }

      // Aquí puedes llamar a un servicio para cambiar la contraseña
      console.log('Cambio de contraseña:', this.form.value);
    }
    console.log('Formulario valido');
  }
}
