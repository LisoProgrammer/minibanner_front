import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Auth {
  private url = 'http://127.0.0.1:80/minibanner_backend/backend_minibanner/auth/';
  constructor(private http: HttpClient) { }
  auth(data: any){
    this.http.post(this.url+'login.php', data)
      .subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.error('Error al enviar:', error);
          alert('Error al enviar los datos.');
        }
      });
  }
}