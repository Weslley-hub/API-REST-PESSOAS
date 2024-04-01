import { Routes } from '@angular/router';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';

export const routes: Routes = [
    { path: 'editar-pessoa/:id', component: EditarPessoaComponent }
];


