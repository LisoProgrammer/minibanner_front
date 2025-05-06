import { Component } from '@angular/core';
import { Alumno } from '../models/alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-std',
  imports: [CommonModule],
  templateUrl: './table-std.component.html',
  styleUrls: ['./table-std.component.css']
})
export class TableStdComponent {
  alumnoSeleccionado: Alumno | null = null;

  // Lista de datos de alumnos
  public datos: Alumno[] = [
    {
      identificacion: 123456789,
      primer_nombre: "Juan",
      segundo_nombre: "Carlos",
      primer_apellido: "Pérez",
      segundo_apellido: "Gómez",
      promedio: 4.2,
      semestre: 6,
      carrera: "Ingeniería de Sistemas",
      materias: [
        {
          code: "MAT101",
          creditos: 3,
          nombre: "Matemáticas I",
          nota_1: 4.0,
          nota_2: 4.5,
          nota_3: 4.1,
          promedio: 4.2
        },
        {
          code: "INF201",
          creditos: 4,
          nombre: "Programación Avanzada",
          nota_1: 4.7,
          nota_2: 4.3,
          nota_3: 4.9,
          promedio: 4.63
        }
      ]
    },
    {
      identificacion: 987654321,
      primer_nombre: "Laura",
      segundo_nombre: "María",
      primer_apellido: "Rodríguez",
      segundo_apellido: "López",
      promedio: 3.8,
      semestre: 4,
      carrera: "Administración de Empresas",
      materias: [
        {
          code: "ADM101",
          creditos: 3,
          nombre: "Contabilidad Básica",
          nota_1: 3.5,
          nota_2: 4.0,
          nota_3: 3.9,
          promedio: 3.8
        }
      ]
    },
    {
      identificacion: 124585555,
      primer_nombre: "Yuliana",
      segundo_nombre: "",
      primer_apellido: "Martelo",
      segundo_apellido: "Santos",
      promedio: 4.0,
      semestre: 5,
      carrera: "Ingeniería Industrial",
      materias: [
        {
          code: "ADM101",
          creditos: 3,
          nombre: "Contabilidad Básica",
          nota_1: 3.5,
          nota_2: 4.0,
          nota_3: 3.9,
          promedio: 3.8
        }
      ]
    },
    {
      identificacion: 987654321,
      primer_nombre: "Laura",
      segundo_nombre: "María",
      primer_apellido: "Rodríguez",
      segundo_apellido: "López",
      promedio: 3.8,
      semestre: 4,
      carrera: "Administración de Empresas",
      materias: [
        {
          code: "ADM101",
          creditos: 3,
          nombre: "Contabilidad Básica",
          nota_1: 3.5,
          nota_2: 4.0,
          nota_3: 3.9,
          promedio: 3.8
        }
      ]
    }
  ];

  // Función para seleccionar alumno
  selectAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
  }
}
