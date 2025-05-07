import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  private url = 'http://127.0.0.1:80/minibanner_backend/backend_minibanner/apis/materias/';
  constructor(private http: HttpClient) { }
  get_materias(){
    return this.http.get(this.url+"list_materias.php");
  }
}
