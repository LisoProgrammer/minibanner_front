import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';
import { MateriaName } from '../models/materia_name';
import { CommonModule } from '@angular/common';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
import { MateriasService } from '../servicios/materias/materias.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Materia } from '../models/materia';
declare let Swal: any;
@Component({
  selector: 'app-table-std',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './table-std.component.html',
  styleUrls: ['./table-std.component.css'],
})
export class TableStdComponent {
  formMateria: FormGroup;
  alumnoSeleccionado: Alumno | null = null;
  alumnos: any[] = [];
  materias: any[] = [];
  materias_que_puede_matricular_alumno: any[] = [];
  constructor(
    private alumnosService: AlumnosService,
    private materiasService: MateriasService,
    private fb: FormBuilder
  ) {
    this.formMateria = this.fb.group({
      materia: [0],
    });
  }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((data) => {
      this.alumnos = Object.values(data) as Alumno[];
      console.log('Tipo de respuesta:', typeof data, data);
    });
  }
  deleteAlumno(id_alumno: number): void {
    Swal.fire({
      title: '¿Seguro?',
      text: 'Vas a eliminar este estudiante',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.alumnosService.deleteAlumno(id_alumno).subscribe(() => {
          Swal.fire({
            title: 'Eliminado',
            text: 'El alumno ha sido eliminado',
            icon: 'success',
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
            position: 'center', // Se muestra en el centro
          });
          this.cargarAlumnos(); // Recarga la lista
        });
      }
    });
  }
  cargarAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe((data) => {
      this.alumnos = Object.values(data) as Alumno[]; // Actualiza la lista de alumnos
    });
  }
  cargarMaterias(): void {
    this.materias_que_puede_matricular_alumno = []; // Asegúrate de vaciar antes

    this.materiasService.get_materias().subscribe((data) => {
      this.materias = Object.values(data) as MateriaName[];
      const materias_del_alumno =
        (this.alumnoSeleccionado?.materias as Materia[]) || [];

      console.log('Materias del alumno:', materias_del_alumno);

      for (let materia of this.materias) {
        const yaMatriculada = materias_del_alumno.some(
          (m) => m.code === materia.code
        );
        if (!yaMatriculada) {
          this.materias_que_puede_matricular_alumno.push(materia);
        }
      }
      console.log(
        'Materias disponibles para matrícula:',
        this.materias_que_puede_matricular_alumno
      );
    });
  }

  // Función para seleccionar alumno
  selectAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    this.alumnosService.seleccionarAlumno(alumno);
    console.log(alumno);
    this.cargarMaterias();
  }
  matricularMateria() {
    const materia_code = this.formMateria.get('materia')?.value;
    let datos = {
      materia: materia_code,
      id_alumno: this.alumnoSeleccionado?.identificacion,
    };
    console.log(datos);
    this.materiasService.matricular_materia(datos);
    for (let materia of this.materias_que_puede_matricular_alumno) {
      if (materia.code == materia_code) {
        const new_materia: Materia = {
          code: materia.code,
          creditos: materia.creditos,
          nombre: materia.nombre,
          nota_1: 0,
          nota_2: 0,
          nota_3: 0,
          promedio: 0,
          obs: ""
        };
        this.alumnoSeleccionado?.materias.push(new_materia);
        break;
      }
    }
    for (let i = 0; i < this.materias_que_puede_matricular_alumno.length; i++) {
      if (this.materias_que_puede_matricular_alumno[i].code == materia_code) {
        this.materias_que_puede_matricular_alumno.splice(i, 1);
        break;
      }
    }
    console.log(this.alumnoSeleccionado);
    Swal.fire({
      icon: 'success',
      title: 'It´s ok',
      text: 'La materia ha sido matriculada',
      footer: '',
    });
    this.formMateria.patchValue({
      materia: 0
    })
  }
}
