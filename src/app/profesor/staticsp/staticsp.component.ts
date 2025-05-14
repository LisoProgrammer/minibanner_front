import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  NgZone,
  ChangeDetectorRef
} from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AlumnosService } from '../../servicios/alumnos/alumnos.service';
import { CommonModule } from '@angular/common';
import {
  Chart,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartTypeRegistry,
  PieController,
  BarController
} from 'chart.js';
import { Subject, takeUntil } from 'rxjs';

Chart.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PieController,
  BarController
);

@Component({
  selector: 'app-staticsp',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './staticsp.component.html',
  styleUrl: './staticsp.component.css',
})
export class StaticspComponent implements OnInit, AfterViewInit, OnDestroy {
  // Añadir firma de índice para permitir acceso indexado a los gráficos
  [key: string]: any;
  
  data: any = null;

  @ViewChild('chart1') chart1Canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart2') chart2Canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chart3') chart3Canvas!: ElementRef<HTMLCanvasElement>;

  chart1: Chart | null = null;
  chart2: Chart | null = null;
  chart3: Chart | null = null;

  viewInitialized: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnosService.get_metrics()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.data = data;
        this.tryRenderCharts();
      });
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this.tryRenderCharts();
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones
    this.destroy$.next();
    this.destroy$.complete();
    
    // Destruir gráficos existentes
    if (this.chart1) this.chart1.destroy();
    if (this.chart2) this.chart2.destroy();
    if (this.chart3) this.chart3.destroy();
  }

  tryRenderCharts() {
    if (!this.viewInitialized || !this.data) return;

    this.renderChart(
      this.chart1Canvas,
      'bar',
      Object.keys(this.data.num_student_by_materia),
      Object.values(this.data.num_student_by_materia),
      'Estudiantes por materia',
      false,
      'chart1'
    );

    this.renderChart(
      this.chart2Canvas,
      'pie',
      Object.keys(this.data.num_student_by_semester).map((k) => `Semestre ${k}`),
      Object.values(this.data.num_student_by_semester),
      'Distribución por semestre',
      false,
      'chart2'
    );

    this.renderChart(
      this.chart3Canvas,
      'bar',
      Object.keys(this.data.average_by_materia),
      Object.values(this.data.average_by_materia),
      'Promedio por materia',
      true,
      'chart3'
    );
  }

  renderChart(
    canvasRef: ElementRef<HTMLCanvasElement>,
    chartType: keyof ChartTypeRegistry,
    labels: string[],
    data: number[],
    title: string,
    useColorByValue: boolean,
    chartId: 'chart1' | 'chart2' | 'chart3'
  ) {
    const ctx = canvasRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

    if (this[chartId]) {
      this[chartId].destroy();
    }

    const backgroundColor = useColorByValue
      ? data.map((val) =>
          val >= 3 ? 'rgba(75, 192, 75, 0.69)' : 'rgba(255, 99, 99, 0.73)'
        )
      : Array.from({ length: data.length }, (_, i) =>
          `hsl(${(i * 360) / data.length}, 70%, 60%)`
        );

    this[chartId] = new Chart(ctx, {
      type: chartType,
      data: {
        labels,
        datasets: [
          {
            label: title,
            data,
            backgroundColor,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: title,
          },
        },
        scales:
          chartType === 'bar'
            ? {
                y: {
                  beginAtZero: true,
                  max: 5,
                },
              }
            : {},
      },
    });
  }
}
