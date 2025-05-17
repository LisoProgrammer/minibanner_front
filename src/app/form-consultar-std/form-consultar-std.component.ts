import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
import { CommonModule } from '@angular/common';
declare let Swal: any;
@Component({
  standalone: true,
  selector: 'app-form-consultar-std',
  templateUrl: './form-consultar-std.component.html',
  styleUrls: ['./form-consultar-std.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormConsultarStdComponent {
  formStudent: FormGroup;
  isSubmitting = false;
  mode = 'Matricular';
  id_persona: number = 0;
  constructor(
    private AlumnoService: AlumnosService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.formStudent = this.fb.group({
      primer_nombre: [''],
      segundo_nombre: [''],
      primer_apellido: [''],
      segundo_apellido: [''],
      semestre: [0],
      carrera: [0],
      password: [''],
    });
    this.AlumnoService = AlumnoService;
  }
  ngOnInit() {
    console.log(this.AlumnoService);
    this.AlumnoService.alumnoSeleccionado$.subscribe((alumno) => {
      console.log(alumno);
      if (alumno) {
        this.mode = 'Actualizar';
        this.id_persona = alumno.identificacion;
        this.formStudent.patchValue({
          primer_nombre: alumno.primer_nombre,
          segundo_nombre: alumno.segundo_nombre,
          primer_apellido: alumno.primer_apellido,
          segundo_apellido: alumno.segundo_apellido,
          semestre: alumno.semestre,
          carrera: alumno.carrera,
          password: alumno.password || '',
        });
      }
    });
  }
  enviar() {
    if (this.formStudent.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Revisa los campos vacíos',
        footer: '',
      });
      return;
    }
    if (this.mode == 'Matricular') {
      const datos = this.formStudent.value;
      console.log('Enviando datos:', datos);
      this.AlumnoService.insertAlumno(datos);
    } else if (this.mode == 'Actualizar') {
      const datos = this.formStudent.value;
      datos.identificacion = this.id_persona;
      console.log(datos);
      console.log('Enviando datos:', datos);
      this.AlumnoService.updateAlumno(datos);
    }
  }
  change_mode() {
    this.mode = 'Matricular';
    this.formStudent.reset({
      primer_nombre: '',
      segundo_nombre: '',
      primer_apellido: '',
      segundo_apellido: '',
      semestre: 0,
      carrera: 0,
      password: '',
    });
    this.id_persona = 0;
  }
}
