import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  private url =
    'http://127.0.0.1:80/minibanner_backend/backend_minibanner/apis/materias/';
  constructor(private http: HttpClient) {}
  get_materias() {
    return this.http.get(this.url + 'list_materias.php');
  }
  matricular_materia(data: any) {
    this.http.post(this.url + 'matri_materia.php', data).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        window.location.reload();
        alert('Alumno matriculado correctamente.');
      },
      error: (error) => {
        console.error('Error al enviar:', error);
        alert('Error al enviar los datos.');
      },
    });
  }
}
