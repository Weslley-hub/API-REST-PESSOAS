import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Endereco } from '../models/endereco.model';
import { CepService } from '../service/cepService.service';

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

  idade: number | undefined;
  diasParaAniversario: number | undefined;
  aniversarioHoje: boolean = false;

  constructor(private pessoaService: PessoaService, private router: Router, private cepService: CepService) { }

  addEndereco() {
    this.newPessoa.enderecos.push(this.newEndereco);
    this.resetEndereco();
  }

  createPessoa() {
    this.pessoaService.createPessoa(this.newPessoa).subscribe(() => {
      this.calcularIdade();
      this.calcularDiasParaAniversario();
      this.exibirMensagemAniversario();
      this.router.navigate(['/']);
    }, error => {
      alert('Erro  ao criar a pessoa!' + error);
    });
  }

  fillAddressDetails() {
    const cep = this.newEndereco.cep;
    if (cep) {
      this.cepService.getAddressByCep(cep).subscribe((data: any) => {
        this.newEndereco.endereco = data.logradouro;
        this.newEndereco.bairro = data.bairro;
        this.newEndereco.cidade = data.localidade;
        this.newEndereco.estado = data.uf;
      });
    }
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

  calcularIdade() {
    const dataNascimento = new Date(this.newPessoa.dataNascimento);
    const hoje = new Date();
    this.idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const mesNascimento = dataNascimento.getMonth() + 1;
    if (mesAtual < mesNascimento || (mesAtual == mesNascimento && hoje.getDate() < dataNascimento.getDate())) {
      this.idade--;
    }
  }

  calcularDiasParaAniversario() {
    const dataNascimento = new Date(this.newPessoa.dataNascimento);
    const hoje = new Date();
    dataNascimento.setFullYear(hoje.getFullYear());
    if (hoje > dataNascimento) {
      dataNascimento.setFullYear(hoje.getFullYear() + 1);
    }
    const umDia = 1000 * 60 * 60 * 24;
    this.diasParaAniversario = Math.ceil((dataNascimento.getTime() - hoje.getTime()) / umDia);
    if (hoje.getMonth() == dataNascimento.getMonth() && hoje.getDate() == dataNascimento.getDate()) {
      this.aniversarioHoje = true;
    }
  }

  exibirMensagemAniversario() {
    if (this.aniversarioHoje) {
      alert('Parabéns pelo seu aniversário!');
    }
  }
}
