import { Component, inject } from '@angular/core';
import { CandidatoService } from '../../../services/candidato.service';
import { Candidato } from '../../models/candidato';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-candidato-list',
  standalone: true,
  imports: [],
  templateUrl: './candidato-list.component.html',
  styleUrl: './candidato-list.component.scss'
})
export class CandidatoListComponent {
  candidato: Candidato[] = [];

  candidatoService = inject(CandidatoService);
  constructor() {
    this.listAllPrefeitos();
  }

  listAllPrefeitos() {
    this.candidatoService.listAllPrefeitos().subscribe({
      next: candidato => {
        console.log(candidato)
        this.candidato = candidato
      }
     }
    );
  }

  // listAll() {

  //   this.carroService.listAll().subscribe({
  //     next: lista => { //quando o back retornar o que se espera
  //       this.lista = lista;
  //     },
  //     error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions..)
  //       Swal.fire({
  //         title: 'Ocorreu um erro',
  //         icon: 'error',
  //         confirmButtonText: 'Ok',
  //       });
  //     }
  //   });

  // }
}
