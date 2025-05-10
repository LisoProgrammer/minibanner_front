import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { StudentComponent } from './student/student.component';
import { DataeComponent } from './student/datae/datae.component';
import { DatapComponent } from './profesor/datap/datap.component';
import { StaticseComponent } from './student/staticse/staticse.component';
import { StaticspComponent } from './profesor/staticsp/staticsp.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/statics', component: StaticseComponent },
  { path: 'student/data', component: DataeComponent },
  { path: 'profesor/statics', component: StaticspComponent },
  { path: 'profesor/data', component: DatapComponent }
];
