import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MateriaPre } from '../../models/materia_pre';
import { Alumno } from '../../models/alumno';
@Injectable({
  providedIn: 'root'
})
export class AlumnoPService {
  private url = 'http://localhost:80/minibanner_backend/backend_minibanner/apis/alumno/';

  constructor(private http: HttpClient) {}

  getMyNotes() {
    return this.http.get<MateriaPre[]>(this.url + 'notas/my_notas.php', {
      withCredentials: true
    });
  }
  getMetrics(){
    return this.http.get<MateriaPre[]>(this.url + 'metrics/get_metrics.php', {
      withCredentials: true
    });
  }
  getMyInfo(){
    return this.http.get<Alumno>(this.url + 'my_info.php', {
      withCredentials: true
    });
  }
}
