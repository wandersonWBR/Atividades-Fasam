import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Timestamp } from 'rxjs';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro: any;
  conversao: string;
  valoresForm: string;
  
  constructor(private fb: FormBuilder) { }
    
  ngOnInit() {

    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    

    this.formCadastro()
      this.conversao = JSON.stringify(this.valoresForm);
      localStorage.setItem('cadastro', this.conversao);
    }
  }
  
  

