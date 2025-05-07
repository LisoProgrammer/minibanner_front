import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';
import { CommonModule } from '@angular/common';
import { AlumnosService } from '../servicios/alumnos/alumnos.service';
@Component({
  selector: 'app-table-std',
  imports: [CommonModule],
  templateUrl: './table-std.component.html',
  styleUrls: ['./table-std.component.css'],
})
export class TableStdComponent {
  alumnoSeleccionado: Alumno | null = null;
  alumnos: any[] = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((data) => {
      this.alumnos = Object.values(data) as Alumno[];
      console.log('Tipo de respuesta:', typeof data, data);
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
  // Función para seleccionar alumno
  selectAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
  }
}
