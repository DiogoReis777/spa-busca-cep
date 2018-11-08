import { BuscaCepService } from './busca-cep.service';

import { Component, OnInit } from '@angular/core';
import { BuscaCep } from 'src/app/model/buscaCep.model';


@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

  listaDadosCep: any = '';
  ngCepInput: any;

  constructor(private buscacepService: BuscaCepService) { }


  ngOnInit() {

  }

  executaMascara(objeto) {

    const valorObjeto = objeto;
    const campo = document.getElementsByName(valorObjeto.name)[0];
    if (valorObjeto.name === 'nameCepInput')
      this.mascaraCep(valorObjeto.value, campo);

  }

  mascaraCep(valorInput, campo) {

    valorInput = valorInput.replace(/\D/g, "");
    valorInput = valorInput.replace(/(\d{5})(\d)/, "$1-$2");
    campo.value = valorInput;
  }

  pesquisaCep(cep) {

    if (cep.length === 9) {

      cep = cep.replace(/\D/g, '');

      if (cep !== "") {

        const validaCep = /^[0-9]{8}$/;

        if (validaCep.test(cep)) {
          this.buscacepService.buscaCep(cep).subscribe(dadosCep => {
            this.listaDadosCep = dadosCep;

          }, err => { throw err; });
        }
      }
    }

  }

  limparCampos() {

    this.listaDadosCep = '';
    this.ngCepInput = '';
  }

}

