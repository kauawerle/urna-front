import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CandidatoService {
  http = inject(HttpClient);

  API = "http://localhost:8080/api/candidato";

}
