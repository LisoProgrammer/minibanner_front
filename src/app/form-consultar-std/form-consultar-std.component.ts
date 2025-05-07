import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-form-consultar-std',
  templateUrl: './form-consultar-std.component.html',
  styleUrls: ['./form-consultar-std.component.css'],
  imports: [ReactiveFormsModule],
})
export class FormConsultarStdComponent {
  formStudent: FormGroup;
  isSubmitting = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formStudent = this.fb.group({
      primer_nombre: [''],
      segundo_nombre: [''],
      primer_apellido: [''],
      segundo_apellido: [''],
      semestre: [0],
      carrera: [0],
    });
  }

  enviar() {
    if (this.formStudent.invalid) {
      alert("Formulario incompleto");
      return;
    }
  
    const datos = this.formStudent.value;
    console.log('Enviando datos:', datos);
  
    this.http.post('http://127.0.0.1:80/minibanner_backend/backend_minibanner/apis/alumnos/insert_alumno.php', datos)
      .subscribe({
        next: response => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
          alert('Alumno creado correctamente.');
        },
        error: error => {
          console.error('Error al enviar:', error);
          alert('Error al enviar los datos.');
        }
      });
  }
}
