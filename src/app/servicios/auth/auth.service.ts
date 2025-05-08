import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://127.0.0.1:80/minibanner_backend/backend_minibanner/auth/';

  constructor(private http: HttpClient) {}

  login(id: number, password: string): Observable<any> {
    const body = JSON.stringify({ id_user: id, password: password });
  
    return this.http.post(this.url + 'login.php', body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  check_sesion(): Observable<any> {
    return this.http.get(this.url+'check_sesion.php', {
      withCredentials: true // Importante para enviar cookies de sesión
    });
  }
}
