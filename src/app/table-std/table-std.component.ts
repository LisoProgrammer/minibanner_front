import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';
import { MateriaName } from '../models/materia_name';
import { CommonModule } from '@angular/common';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
import { MateriasService } from '../servicios/materias/materias.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private alumnosService: AlumnosService, private materiasService: MateriasService, private fb: FormBuilder) {
    this.formMateria = this.fb.group({
      materia: [1]
    });
  }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((data) => {
      this.alumnos = Object.values(data) as Alumno[];
      console.log('Tipo de respuesta:', typeof data, data);
      this.cargarMaterias();
    });
  }
  deleteAlumno(id_alumno: number): void {
    this.alumnosService.deleteAlumno(id_alumno).subscribe(() => {
      this.cargarAlumnos();
    });
  }
  cargarAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe((data) => {
      this.alumnos = Object.values(data) as Alumno[]; // Actualiza la lista de alumnos
    });
  }
  cargarMaterias(): void{
    this.materiasService.get_materias().subscribe((data) =>{
      this.materias = Object.values(data) as MateriaName[];
      console.log(this.materias)
    });
  }

  // Función para seleccionar alumno
  selectAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    this.alumnosService.seleccionarAlumno(alumno);
  }
  matricularMateria(){
    const materia_code = this.formMateria.get("materia")?.value;
    let datos = {"materia": materia_code, "id_alumno": this.alumnoSeleccionado?.identificacion};
    console.log(datos);
    this.materiasService.matricular_materia(datos);
    alert("Alumno matriculado a la materia seleccionada");
  }
}
