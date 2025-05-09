import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AlumnoPService } from '../servicios/alumno_p/alumno-p.service';
import { Materia } from '../models/materia';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  materias: Materia[] = [];

  constructor(private alumnopService: AlumnoPService) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias(): void {
    this.alumnopService.getMyNotes().subscribe((data: Materia[]) => {
      this.materias = data;
      console.log(this.materias)
    });
  }
}
