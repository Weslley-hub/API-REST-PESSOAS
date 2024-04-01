import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../Models/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router }  from '@angular/router'

@Component({
  selector: 'app-editar-pessoa',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule ],
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css'
})
export class EditarPessoaComponent implements OnInit {
  pessoa!: Pessoa;
  pessoaParaEditar: Pessoa = {} as Pessoa;

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService, private routes: Router) { }

  ngOnInit(): void {
    this.getPessoaById();
  }

  getPessoaById() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = parseInt(idString, 10); 
      this.pessoaService.getPessoaById(id).subscribe((pessoa: Pessoa) => {
        this.pessoaParaEditar = pessoa;
      });
    } else {
      console.error('O parâmetro "id" é null.');
    }
  }

  updatePessoa() {
      const id = this.pessoaParaEditar.id;
      const pessoaAtualizada = this.pessoaParaEditar;
      this.pessoaService.updatePessoa(id, pessoaAtualizada).subscribe((pessoa: Pessoa) => {
        console.log('Pessoa atualizada com sucesso:', pessoa);
        this.routes.navigate(['/']);
    });
  }
}
