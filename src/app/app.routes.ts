import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { RegisterCandidatoComponent } from './layouts/register-candidato/register-candidato.component';
import { VotarComponent } from './layouts/votar/votar.component';
import { ApuracaoComponent } from './layouts/apuracao/apuracao.component';
import { CandidatoListComponent } from './layouts/candidato-list/candidato-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: 'candidato', component: CandidatoListComponent, children: [
          { path: 'candidato-form', component: RegisterCandidatoComponent },
        ]
      },
      { path: 'votar', component: VotarComponent },
      { path: 'apuracao', component: ApuracaoComponent },
    ]
  }
];
