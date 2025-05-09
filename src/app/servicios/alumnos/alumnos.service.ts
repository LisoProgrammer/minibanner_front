import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alumno } from '../../models/alumno';
declare let Swal: any;
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private url = 'http://localhost:80/minibanner_backend/backend_minibanner/apis/alumnos/'; // Replace with your API URL
  private alumnoSeleccionadoSource = new BehaviorSubject<Alumno | null>(null);
  alumnoSeleccionado$ = this.alumnoSeleccionadoSource.asObservable();
  constructor(private http: HttpClient) { }
  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionadoSource.next(alumno);
  }
  getAlumnos() {
    //console.log(this.url+"get_alumnos.php");
    return this.http.get(this.url+"get_alumnos.php");
  }
  deleteAlumno(id_alumno: number){
    console.log("Estudiante eliminado");
    return this.http.get(this.url+"delete_alumno.php?id_alumno="+id_alumno);
  }
  insertAlumno(data: any){
    this.http.post(this.url+'insert_alumno.php', data)
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
  updateAlumno(data: any){
    this.http.post(this.url+'update_alumno.php', data)
      .subscribe({
        next: response => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
          alert('Alumno actualizado correctamente.');
        },
        error: error => {
          console.error('Error al enviar:', error);
          alert('Error al enviar los datos.');
        }
      });
  }
}