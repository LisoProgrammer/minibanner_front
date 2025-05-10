import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  user: any = null;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
      this.get_sesion();
  }
  get_sesion(): void{
    this.authService.check_sesion().subscribe({
      next: (data: any) =>{
        console.log(data);
        if(data.log_in){
          this.user = data.user as User;
        }
      }
    })
  }
  go_data(): void{
    if(this.user.rol == 0){
      this.router.navigate(['/student/data']);
    }else if(this.user.rol == 1){
      this.router.navigate(['/profesor/data']);
    }
  }
  go_statics(): void{
    if(this.user.rol == 0){
      this.router.navigate(['/student/statics']);
    }else if(this.user.rol == 1){
      this.router.navigate(['/profesor/statics']);
    }
  }
  cerrarSesion(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al cerrar sesión', err);
        //this.router.navigate(['/login']); // forzar regreso al login igual
      }
    });
  }
}
