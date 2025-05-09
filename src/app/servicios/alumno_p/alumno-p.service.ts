import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../../models/materia';

@Injectable({
  providedIn: 'root'
})
export class AlumnoPService {
  private url = 'http://localhost:80/minibanner_backend/backend_minibanner/apis/alumno/';

  constructor(private http: HttpClient) {}

  getMyNotes() {
    return this.http.get<Materia[]>(this.url + 'notas/my_notas.php', {
      withCredentials: true
    });
  }
}
