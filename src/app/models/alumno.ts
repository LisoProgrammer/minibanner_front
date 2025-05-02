import { Persona } from './persona';
import { Materia } from './materia';
export interface Alumno extends Persona{
    promedio: number;
    semestre: number;
    carrera: string;
    materias: Materia[];
}