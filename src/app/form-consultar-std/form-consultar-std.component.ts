import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
@Component({
  standalone: true,
  selector: 'app-form-consultar-std',
  templateUrl: './form-consultar-std.component.html',
  styleUrls: ['./form-consultar-std.component.css'],
  imports: [ReactiveFormsModule]
})
export class FormConsultarStdComponent {
  formStudent: FormGroup;
  isSubmitting = false;
  constructor(private AlumnoService: AlumnosService, private fb: FormBuilder, private http: HttpClient) {
    this.formStudent = this.fb.group({
      primer_nombre: [''],
      segundo_nombre: [''],
      primer_apellido: [''],
      segundo_apellido: [''],
      semestre: [0],
      carrera: [0],
    });
    this.AlumnoService = AlumnoService;
  }

  enviar() {
    if (this.formStudent.invalid) {
      alert("Formulario incompleto");
      return;
    }
    const datos = this.formStudent.value;
    console.log('Enviando datos:', datos);
    this.AlumnoService.insertAlumno(datos);
  }
}
