import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../../models/profesor';
@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private url =
    'http://localhost:80/minibanner_backend/backend_minibanner/apis/profesor/';

  constructor(private http: HttpClient) {}
  getMyInfo() {
    return this.http.get<Profesor>(this.url + 'my_info.php', {
      withCredentials: true,
    });
  }
}
