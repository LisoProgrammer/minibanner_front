import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../servicios/auth/auth.service';
import { Router } from '@angular/router';
import { StudentComponent } from "../student.component";
import { AlumnoPService } from '../../servicios/alumno_p/alumno-p.service';
import { Alumno } from '../../models/alumno';
import { FormChangePassComponent } from '../../form-change-pass/form-change-pass.component';
@Component({
  selector: 'app-datae',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormChangePassComponent],
  templateUrl: './datae.component.html',
  styleUrl: './datae.component.css'
})
export class DataeComponent implements OnInit {
  alumno: Alumno | null = null;
  constructor(private AlumnopService: AlumnoPService) {}

  ngOnInit(): void {
    this.AlumnopService.getMyInfo().subscribe((data: Alumno) =>{
      this.alumno = data as Alumno;
      console.log(this.alumno)
    })
  }
}
