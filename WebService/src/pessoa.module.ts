import { Module } from '@nestjs/common';
import { PessoaController } from './Controller/pessoa.controller';
import { PessoaService } from './Service/pessoa.service';

@Module({
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}
