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
  imports: [ReactiveFormsModule],
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
    this.AlumnoService.alumnoSeleccionado$.subscribe((alumno) => {
      this.mode = 'Actualizar';
      if (alumno) {
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
      alert('Formulario incompleto');
      return;
    }
    if (this.mode == 'Matricular') {
      const datos = this.formStudent.value;
      console.log('Enviando datos:', datos);
      this.AlumnoService.insertAlumno(datos);
    }else if(this.mode == "Actualizar"){
      const datos = this.formStudent.value;
      datos.identificacion = this.id_persona;
      console.log(datos);
      console.log('Enviando datos:', datos);
      this.AlumnoService.updateAlumno(datos);
    }
  }
}
