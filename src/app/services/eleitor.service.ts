import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Eleitor } from '../models/eleitor';

@Injectable({
  providedIn: 'root'
})

export class EleitorService {
  private apiUrl = 'http://localhost:8080/api/eleitores';

  constructor(private http: HttpClient) { }

  salvar(eleitor: Eleitor): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/salvar`, eleitor, {
      responseType: 'text' as 'json'
    });
  }
}
