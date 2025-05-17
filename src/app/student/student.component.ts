import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AlumnoPService } from '../servicios/alumno_p/alumno-p.service';
import { MateriaPre } from '../models/materia_pre';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  materias: MateriaPre[] = [];

  constructor(private alumnopService: AlumnoPService) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias(): void {
    this.alumnopService.getMyNotes().subscribe((data: MateriaPre[]) => {
      this.materias = data;
      console.log(this.materias);
      for(let materia of this.materias){
        if(materia.nota_1 && materia.nota_2 && materia.nota_3 == 0){
          materia.nota_3 = (3-materia.nota_1*0.3-materia.nota_2*0.35)/0.35;
          materia.nota_3 = parseFloat(materia.nota_3.toFixed(1));
          materia.prediccion = true;
        }else{
          materia.prediccion = false;
        }
      }
      console.log(this.materias)
    });
  }
}
