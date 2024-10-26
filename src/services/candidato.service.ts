import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Candidato } from "../app/models/candidato";

@Injectable({
  providedIn: 'root'
})

export class CandidatoService {
  http = inject(HttpClient);

  API = "http://localhost:8080/api/candidato";

  constructor() { }

  listAllPrefeitos(): Observable<Candidato[]>{
    return this.http.get<Candidato[]>(this.API+"/findAllPrefeito");
  }
}
