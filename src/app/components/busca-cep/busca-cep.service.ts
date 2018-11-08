import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuscaCep } from 'src/app/model/buscaCep.model';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(private http: HttpClient) { }




  buscaCep(cep: string) {

    return this.http.get<BuscaCep[]>(`//viacep.com.br/ws/${cep}/json`);

  }
}
