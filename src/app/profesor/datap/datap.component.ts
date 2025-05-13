import { Component, OnInit} from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { Profesor } from '../../models/profesor';
import { ProfesorService } from '../../servicios/profesor/profesor.service';
import { FormChangePassComponent } from '../../form-change-pass/form-change-pass.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-datap',
  standalone: true,
  imports: [NavbarComponent, FormChangePassComponent, CommonModule],
  templateUrl: './datap.component.html',
  styleUrl: './datap.component.css'
})
export class DatapComponent implements OnInit{
  profesor: Profesor | null = null;
    constructor(private profesorService: ProfesorService) {}
  
    ngOnInit(): void {
      this.profesorService.getMyInfo().subscribe((data: Profesor) =>{
        this.profesor = data as Profesor;
        console.log(this.profesor)
      })
    }
}
