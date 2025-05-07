import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Tarjeta } from '../../modelos/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private url = 'http://127.0.0.1:80/minibanner_backend/backend_minibanner/apis/alumnos/'; // Replace with your API URL

  constructor(private http: HttpClient) { }
  getAlumnos() {
    //console.log(this.url+"get_alumnos.php");
    return this.http.get(this.url+"get_alumnos.php");
  }
  deleteAlumno(id_alumno: number){
    console.log("Estudiante eliminado");
    return this.http.get(this.url+"delete_alumno.php?id_alumno="+id_alumno);
  }
}