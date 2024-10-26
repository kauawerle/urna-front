import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatoListComponent } from '../candidato-list/candidato-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CandidatoListComponent, RouterOutlet, HttpClientModule,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
