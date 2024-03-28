import { Module } from '@nestjs/common';
import { PessoaModule } from './pessoa.module';

@Module({
  imports: [PessoaModule],
})
export class AppModule {}
