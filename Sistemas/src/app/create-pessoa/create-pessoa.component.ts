import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Endereco } from '../models/endereco.model';

@Component({
  selector: 'app-create-pessoa',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './create-pessoa.component.html',
  styleUrl: './create-pessoa.component.css'
})
export class CreatePessoaComponent {

  newPessoa: Pessoa = {
    id: 0, 
    nome: '',
    sexo: '',
    estadoCivil: '',
    dataNascimento: '',
    enderecos: [] 
  };

  newEndereco: Endereco = {
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    cidade: ''
  };

  constructor(private pessoaService: PessoaService, private router: Router) { }

  addEndereco() {
    this.newPessoa.enderecos.push(this.newEndereco);
    this.resetEndereco();
  }

  createPessoa() {
    this.pessoaService.createPessoa(this.newPessoa).subscribe(() => {
      this.router.navigate(['/']);
    }, error => {
      alert('Erro  ao criar a pessoa!' + error);
    });
  }

  private resetEndereco() {
    this.newEndereco = {
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      estado: '',
      cidade: '' 
    };
  }
}
