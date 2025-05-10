import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicios/auth/auth.service';
import { Router } from '@angular/router';
import { StudentComponent } from "../student.component";

@Component({
  selector: 'app-datae',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './datae.component.html',
  styleUrl: './datae.component.css'
})
export class DataeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    //
  }
}
