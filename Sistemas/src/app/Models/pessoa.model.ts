import { Endereco } from "./endereco.model";


export interface Pessoa {
    id: number;
    nome: string;
    sexo: string;
    dataNascimento: string;
    estadoCivil: string;
    enderecos: Endereco[];
  }