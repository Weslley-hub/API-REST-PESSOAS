import { Injectable } from '@nestjs/common';
import { Pessoa } from 'src/Models/Pessoa.model';

@Injectable()
export class PessoaService {
  private pessoas: Pessoa[] = [];

  createPessoa(pessoa: Pessoa): Pessoa {
    pessoa.id = this.pessoas.length + 1;
    this.pessoas.push(pessoa);
    return pessoa;
  }

  getAllPessoas(): Pessoa[] {
    return this.pessoas;
  }

  getPessoaById(id: number): Pessoa {
    return this.pessoas.find((p) => p.id === id);
  }

  updatePessoa(id: number, newPessoa: Pessoa): Pessoa {
    const index = this.pessoas.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.pessoas[index] = { ...newPessoa, id };
      return this.pessoas[index];
    }
    return null;
  }

  deletePessoa(id: number): void {
    this.pessoas = this.pessoas.filter((p) => p.id !== id);
  }

  searchPessoas(criteria: string): Pessoa[] {
    return this.pessoas.filter(
      (pessoa) =>
        pessoa.nome.includes(criteria) ||
        pessoa.sexo.includes(criteria) ||
        pessoa.estadoCivil.includes(criteria),
    );
  }

  getPessoasPaginadas(page: number, pageSize: number): Pessoa[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.pessoas.slice(startIndex, endIndex);
  }
}
