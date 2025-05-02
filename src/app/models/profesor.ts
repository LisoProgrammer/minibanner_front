import { Persona } from './persona';
export interface Profesor extends Persona{
    titulo: string;
    esp: string;
    f_ent: Date;
    f_sal: Date;
}