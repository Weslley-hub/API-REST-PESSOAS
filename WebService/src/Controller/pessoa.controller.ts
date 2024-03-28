import {
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Controller,
} from '@nestjs/common';
import { Pessoa } from 'src/Models/Pessoa.model';
import { PessoaService } from 'src/Service/pessoa.service';

@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  getAllPessoas(): Pessoa[] {
    return this.pessoaService.getAllPessoas();
  }

  @Get(':id')
  getPessoaById(@Param('id') id: string): Pessoa {
    return this.pessoaService.getPessoaById(+id);
  }

  @Post()
  createPessoa(@Body() pessoa: Pessoa): Pessoa {
    return this.pessoaService.createPessoa(pessoa);
  }

  @Put(':id')
  updatePessoa(@Param('id') id: string, @Body() pessoa: Pessoa): Pessoa {
    return this.pessoaService.updatePessoa(+id, pessoa);
  }

  @Delete(':id')
  deletePessoa(@Param('id') id: string): void {
    return this.pessoaService.deletePessoa(+id);
  }
}
