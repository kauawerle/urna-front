import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { RegisterCandidatoComponent } from './layouts/register-candidato/register-candidato.component';
import { VotarComponent } from './layouts/votar/votar.component';
import { ApuracaoComponent } from './layouts/apuracao/apuracao.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MainComponent,
    children: [
      {  path: 'home/candidato', component: RegisterCandidatoComponent},
      {  path: 'home/votar', component: VotarComponent},
      {  path: 'home/apuracao', component: ApuracaoComponent},
    ]
  }
];
