import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from './models/pessoa.model';
import { PessoaService } from './pessoa.service';
import { CommonModule } from '@angular/common';
import  { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  pessoas: Pessoa[] = [];
  searchText: string = '';
  
  constructor(private pessoaService: PessoaService, private routes: Router) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getAllPessoas().subscribe((data: Pessoa[]) => {
      this.pessoas = data;
    });
  }

  deletePessoa(id: number) {
    if(confirm('Tem certeza que deseja excluir?')) {
      this.pessoaService.deletePessoa(id).subscribe(() => {
        this.pessoas = this.pessoas.filter(p => p.id !== id);
      });
      this.getPessoas();
    }
  }
  
  updatePessoa(id: number) {
    this.routes.navigate(['/editar-pessoa', id]);
  }

  navigateToCreatePessoa() {
    this.routes.navigate(['/app-create-pessoa']);
  }

  searchPessoas() {
    const searchTerm = (document.getElementById('txtSearch') as HTMLInputElement).value;
    if (searchTerm.trim() !== '') {
        this.pessoaService.searchPessoas(searchTerm).subscribe(pessoas => {
        this.pessoas = pessoas;
      });
  }}

}
