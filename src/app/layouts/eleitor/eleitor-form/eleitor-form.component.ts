import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Eleitor } from '../../../models/eleitor';
import { EleitorService } from '../../../services/eleitor.service';

@Component({
  selector: 'app-eleitor-form',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './eleitor-form.component.html',
  styleUrl: './eleitor-form.component.scss'
})
export class EleitorFormComponent {
  eleitor: Eleitor = new Eleitor();
  eleitorService = inject(EleitorService);

  constructor() { }

  salvarEleitor() {
    this.eleitorService.salvar(this.eleitor).subscribe({
      next: (resposta) => {
        Swal.fire('Sucesso', 'Eleitor cadastrado com sucesso!', 'success');
      },
      error: (erro) => {
        Swal.fire('Erro', 'Falha ao cadastrar eleitor!', 'error');
      }
    });
  }
}
