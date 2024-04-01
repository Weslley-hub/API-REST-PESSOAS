import { Routes } from '@angular/router';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';

export const routes: Routes = [
    { path: 'editar-pessoa/:id', component: EditarPessoaComponent },
    { path: 'app-create-pessoa', component: CreatePessoaComponent }
];


