export class CreatePessoaError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Erro ao cadastrar pessoa';
    }
  }
  
  export class GetAllPessoasError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Erro ao listar pessoas';
    }
  }
  
  export class GetPessoaByIdError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Erro ao buscar pessoa';
    }
  }
  
  export class UpdatePessoaError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Erro ao autializar pessoa';
    }
  }
  
  export class DeletePessoaError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'Erro ao deletar pessoa';
    }
  }
  