import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-change-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-change-pass.component.html',
  styleUrl: './form-change-pass.component.css'
})
export class FormChangePassComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      actual: ['', Validators.required],
      nueva: ['', [Validators.required, Validators.minLength(6)]],
      confirmar: ['', Validators.required]
    });
  }

  cambiarContrasena() {
    if (this.form.valid) {
      const { actual, nueva, confirmar } = this.form.value;
      if (nueva !== confirmar) {
        alert('La nueva contraseña y su confirmación no coinciden');
        return;
      }
      // Aquí puedes llamar a un servicio para cambiar la contraseña
      console.log('Cambio de contraseña:', this.form.value);
    }
  }
}
