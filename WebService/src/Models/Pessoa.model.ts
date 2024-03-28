import { Endereco } from './Endereco.model';

export class Pessoa {
  id: number;
  nome: string;
  sexo: string;
  dataNascimento: Date;
  estadoCivil: string;
  enderecos: Endereco[];
}
