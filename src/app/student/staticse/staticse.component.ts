import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AlumnoPService } from '../../servicios/alumno_p/alumno-p.service';
declare var Chart: any;
@Component({
  selector: 'app-staticse',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './staticse.component.html',
  styleUrl: './staticse.component.css',
})
export class StaticseComponent implements OnInit {
  metrics_alumno: any = null;

  constructor(private alumnopService: AlumnoPService) {}
  ngOnInit(): void {
    this.get_metrics();
  }
  get_metrics() {
    this.alumnopService.getMetrics().subscribe((data: any) => {
      console.log(data);
      this.metrics_alumno = data as object;
    });
  }
  ngAfterViewInit(): void {
    this.renderGraficBar();
  }
  renderGraficBar() {
    const labels = Object.keys(this.metrics_alumno.material_data);
    const data_material = Object.values(this.metrics_alumno.material_data) as number[];;

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio por materia',
          data: data_material,
          backgroundColor: data_material.map((val: number) =>
            val >= 3 ? 'rgba(75, 192, 75, 0.69)' : 'rgba(255, 99, 99, 0.73)'
          ),
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 5
          }
        }
      }
    });
  }
}
